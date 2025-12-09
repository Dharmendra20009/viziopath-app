
import { useState, useEffect, useCallback, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import { config } from "../config";
import { Link, useParams } from "react-router-dom";
import { FaSync, FaSpinner, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import { Pencil, Check, X } from 'lucide-react';
import debounce from "lodash/debounce";

const backendURL = config.backendURL;

export default function LatexEditor() {
    const { id } = useParams<{ id: string }>();
    const { user } = useAuth();

    const [latexCode, setLatexCode] = useState("");
    const [pdfBlobUrl, setPdfBlobUrl] = useState("");
    const [isCompiling, setIsCompiling] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Title Editing State
    const [title, setTitle] = useState("Untitled Project");
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [newTitle, setNewTitle] = useState("");

    // UI State
    const [editorWidth, setEditorWidth] = useState(50); // Initial width: 50%
    const editorRef = useRef(null);
    const [isResizing, setIsResizing] = useState(false);
    const [pdfLoaded, setPdfLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const hasCompiledRef = useRef(false); // Track if compilation has been done

    // Load Project
    useEffect(() => {
        if (user && id) {
            loadProject();
        }
    }, [user, id]);

    const loadProject = async () => {
        try {
            const { data: project, error: fetchError } = await supabase
                .from('resume_projects')
                .select('*')
                .eq('id', id)
                .single();

            if (fetchError) throw fetchError;

            if (project) {
                setLatexCode(project.custom_latex_code);
                setTitle(project.title);
            }
        } catch (err: any) {
            console.error("Error loading project:", err);
            setError("Failed to load project. Please try again.");
        }
    };

    // Title Editing Logic
    const startEditing = () => {
        setIsEditingTitle(true);
        setNewTitle(title);
    };

    const cancelEditing = () => {
        setIsEditingTitle(false);
        setNewTitle("");
    };

    const handleUpdateTitle = async () => {
        if (!newTitle.trim() || !id) return;

        try {
            const { error } = await supabase
                .from('resume_projects')
                .update({
                    title: newTitle.trim(),
                    updated_at: new Date().toISOString()
                })
                .eq('id', id);

            if (error) throw error;

            setTitle(newTitle.trim());
            setIsEditingTitle(false);
        } catch (err: any) {
            console.error("Error updating title:", err);
            setError("Failed to update title");
        }
    };

    // Save Logic
    const saveCode = async (code: string) => {
        if (!id || !user) return;
        setIsSaving(true);
        try {
            const { error } = await supabase
                .from('resume_projects')
                .update({
                    custom_latex_code: code,
                    updated_at: new Date().toISOString()
                })
                .eq('id', id);

            if (error) throw error;
        } catch (err) {
            console.error("Error saving code:", err);
        } finally {
            setIsSaving(false);
        }
    };

    const debouncedSave = useCallback(debounce((code: string) => saveCode(code), 2000), [id]);

    const handleCodeChange = (value: string | undefined) => {
        const newCode = value || "";
        setLatexCode(newCode);
        debouncedSave(newCode);
    };

    // Compilation Logic
    const compileLatex = useCallback(async () => {
        setIsCompiling(true);
        setError(null);
        setPdfLoaded(false);

        // Save immediately before compiling
        await saveCode(latexCode);

        try {
            const res = await fetch(`${backendURL}/api/compile`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code: latexCode }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Compilation failed");
            }

            const blob = await res.blob();
            setPdfBlobUrl(URL.createObjectURL(blob));

            // Update last_compiled_at
            if (id) {
                await supabase
                    .from('resume_projects')
                    .update({ last_compiled_at: new Date().toISOString() })
                    .eq('id', id);
            }

        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsCompiling(false);
        }
    }, [latexCode, id]);

    // Auto-compile effect
    useEffect(() => {
        if (latexCode && id && !hasCompiledRef.current) {
            compileLatex();
            hasCompiledRef.current = true; // Mark as compiled
        }
    }, [latexCode, id, compileLatex]);

    // Keyboard shortcut
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                compileLatex();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [compileLatex]);

    const handleEditorDidMount = (editor: any, monaco: any) => {
        editorRef.current = editor;
        // Disable JavaScript validations
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: true,
        });

        // Set up dark/light mode theme switching
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateTheme = () => {
            monaco.editor.setTheme(darkModeMediaQuery.matches ? 'vs-dark' : 'vs');
        };
        darkModeMediaQuery.addEventListener('change', updateTheme);
        updateTheme();
    };

    // Resizing Logic
    const handleResizeStart = useCallback(() => {
        setIsResizing(true);
    }, []);

    const handleResize = useCallback(
        (e: MouseEvent) => {
            if (!isResizing) return;
            e.preventDefault();

            const container = document.querySelector('.flex.flex-1.flex-col.md\\:flex-row') as HTMLElement;
            if (!container) return;

            const containerWidth = container.offsetWidth;
            let newWidth = (e.clientX / containerWidth) * 100;

            // Limit the width between 30% and 70%
            newWidth = Math.max(30, Math.min(70, newWidth));
            setEditorWidth(newWidth);
        },
        [isResizing]
    );

    const handleResizeStop = useCallback(() => {
        setIsResizing(false);
    }, []);

    useEffect(() => {
        const handleResizeWindow = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResizeWindow);
        window.addEventListener('mousemove', handleResize);
        window.addEventListener('mouseup', handleResizeStop);

        return () => {
            window.removeEventListener('resize', handleResizeWindow);
            window.removeEventListener('mousemove', handleResize);
            window.removeEventListener('mouseup', handleResizeStop);
        };
    }, [handleResize, handleResizeStop]);

    const handlePdfLoad = () => {
        setPdfLoaded(true);
    };

    return (
        <div className="flex h-screen w-full flex-col bg-gray-900">
            {/* Top Navbar */}
            <div className="w-full max-w-[1920px] mx-auto py-2 px-4 flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-gray-700 bg-gray-800">

                {/* Nav Buttons */}
                <div className="w-full sm:w-auto">
                    <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 flex-wrap">
                        <Link
                            to="/"
                            className="text-sm text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1.5 rounded-md transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/resumeTemplates"
                            className="text-sm text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1.5 rounded-md transition-colors duration-200"
                        >
                            Templates
                        </Link>
                        <Link
                            to="/my-projects"
                            className="text-sm text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1.5 rounded-md transition-colors duration-200"
                        >
                            My Projects
                        </Link>
                    </div>
                </div>

                {/* Title Editor (Centered) */}
                <div className="flex-1 flex justify-center order-first sm:order-none w-full sm:w-auto mb-2 sm:mb-0">
                    {isEditingTitle ? (
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className="bg-gray-700 text-white px-3 py-1 rounded-md border border-gray-600 focus:border-indigo-500 focus:outline-none text-sm w-48 sm:w-64"
                                autoFocus
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleUpdateTitle();
                                    if (e.key === 'Escape') cancelEditing();
                                }}
                            />
                            <button
                                onClick={handleUpdateTitle}
                                className="text-green-400 hover:text-green-300 p-1 hover:bg-gray-700 rounded transition-colors"
                            >
                                <Check className="h-4 w-4" />
                            </button>
                            <button
                                onClick={cancelEditing}
                                className="text-red-400 hover:text-red-300 p-1 hover:bg-gray-700 rounded transition-colors"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    ) : (
                        <div
                            className="group flex items-center gap-2 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-700/50 transition-colors"
                            onClick={startEditing}
                        >
                            <h1 className="text-lg font-semibold text-white truncate max-w-[200px] sm:max-w-md" title={title}>
                                {title}
                            </h1>
                            <Pencil className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    )}
                </div>

                {/* Status & Recompile */}
                <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-400">
                        {isSaving ? "Saving..." : "Saved"}
                    </span>
                    <button
                        onClick={compileLatex}
                        disabled={isCompiling}
                        className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-70 transition-colors shadow-sm"
                    >
                        {isCompiling ? (
                            <>
                                <FaSpinner className="animate-spin h-4 w-4" />
                                Compiling...
                            </>
                        ) : (
                            <>
                                <FaSync className="h-4 w-4" />
                                Recompile
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className={`flex flex-1 flex-col ${isMobile ? '' : 'md:flex-row'} overflow-hidden`}>
                {/* Left: Editor */}
                <div
                    className="flex h-[50vh] md:h-full flex-col border-b md:border-r border-gray-700 overflow-hidden relative"
                    style={{ width: isMobile ? '100%' : `${editorWidth}%` }}
                >
                    <div className="flex-1 relative">
                        <MonacoEditor
                            height="100%"
                            width="100%"
                            defaultLanguage="javascript"
                            theme="vs-dark"
                            value={latexCode}
                            onChange={handleCodeChange}
                            options={{
                                minimap: { enabled: false },
                                scrollBeyondLastLine: false,
                                wordWrap: 'on',
                                wrappingStrategy: 'advanced',
                                wrappingIndent: 'indent',
                                lineNumbers: 'on',
                                scrollbar: {
                                    vertical: 'auto',
                                    horizontal: 'auto'
                                },
                                automaticLayout: true,
                                highlightActiveIndentGuide: true,
                                renderLineHighlight: 'all',
                                roundedSelection: false,
                                fontSize: 14,
                            }}
                            onMount={handleEditorDidMount}
                        />
                    </div>
                    {!isMobile && (
                        <div
                            className="absolute top-0 right-0 h-full w-2 cursor-col-resize z-10 flex items-center justify-center hover:bg-indigo-500/50 transition-colors"
                            onMouseDown={handleResizeStart}
                        >
                            <div className="opacity-0 hover:opacity-100 transition-opacity duration-200">
                                <FaChevronRight className="text-gray-400 text-xs" />
                                <FaChevronLeft className="text-gray-400 text-xs" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Right: PDF Preview */}
                <div
                    className="flex h-[50vh] md:h-full flex-col bg-gray-900"
                    style={{ width: isMobile ? '100%' : `${100 - editorWidth}%` }}
                >
                    <div className="flex-1 relative overflow-hidden">
                        {error && (
                            <div className="absolute top-0 left-0 right-0 bg-red-900/90 p-4 text-white text-sm border-b border-red-700 z-20 flex justify-between items-center">
                                <span>Error: {error}</span>
                                <button onClick={() => setError(null)} className="text-white hover:text-gray-200 font-bold">&times;</button>
                            </div>
                        )}
                        {pdfBlobUrl ? (
                            <iframe
                                src={pdfBlobUrl}
                                className="h-full w-full border-none"
                                title="PDF Preview"
                                onLoad={handlePdfLoad}
                            />
                        ) : (
                            <div className="flex h-full flex-col items-center justify-center text-gray-500 p-8 text-center">
                                <FaSync className="w-12 h-12 mb-4 opacity-20" />
                                <p className="text-lg font-medium">No PDF generated yet</p>
                                <p className="text-sm mt-2">Click "Recompile" to generate your resume PDF.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
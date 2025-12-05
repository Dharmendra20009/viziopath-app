import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { ResumeProject } from '../types/resume';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Trash2, Edit, FileText, Plus, Pencil, Check, X } from 'lucide-react';

const MyProjects = () => {
    const { user } = useAuth();
    const [projects, setProjects] = useState<ResumeProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            fetchProjects();
        }
    }, [user]);

    const fetchProjects = async () => {
        try {
            const { data, error } = await supabase
                .from('resume_projects')
                .select('*')
                .eq('user_id', user?.id)
                .order('updated_at', { ascending: false });

            if (error) throw error;
            setProjects(data || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
    const [newTitle, setNewTitle] = useState("");

    const startEditing = (project: ResumeProject) => {
        setEditingProjectId(project.id);
        setNewTitle(project.title);
    };

    const cancelEditing = () => {
        setEditingProjectId(null);
        setNewTitle("");
    };

    const handleUpdateTitle = async (id: string) => {
        if (!newTitle.trim()) return;

        try {
            const { error } = await supabase
                .from('resume_projects')
                .update({ title: newTitle.trim(), updated_at: new Date().toISOString() })
                .eq('id', id);

            if (error) throw error;

            setProjects(projects.map(p =>
                p.id === id ? { ...p, title: newTitle.trim(), updated_at: new Date().toISOString() } : p
            ));
            setEditingProjectId(null);
        } catch (err: any) {
            alert('Error updating title: ' + err.message);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this resume?')) return;

        try {
            const { error } = await supabase
                .from('resume_projects')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setProjects(projects.filter((p) => p.id !== id));
        } catch (err: any) {
            alert('Error deleting project: ' + err.message);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[100px]"></div>
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[100px]"></div>
                <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-teal-600/20 blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto mt-12">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-bold text-white">My Resumes</h1>
                        <p className="mt-2 text-gray-300">Manage your created resume projects.</p>
                    </div>
                    <Link
                        to="/resumeTemplates"
                        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30"
                    >
                        <Plus className="h-5 w-5" />
                        Create New
                    </Link>
                </div>

                {error && (
                    <div className="bg-red-900/50 border border-red-500/50 text-red-200 px-4 py-3 rounded mb-8 backdrop-blur-sm">
                        {error}
                    </div>
                )}

                {projects.length === 0 ? (
                    <div className="text-center py-16 bg-white/5 backdrop-blur-md rounded-2xl border-2 border-dashed border-gray-600">
                        <FileText className="mx-auto h-12 w-12 text-gray-500" />
                        <h3 className="mt-2 text-sm font-medium text-white">No projects yet</h3>
                        <p className="mt-1 text-sm text-gray-400">Get started by creating a new resume from a template.</p>
                        <div className="mt-6">
                            <Link
                                to="/resumeTemplates"
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                Create Resume
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-white/10 hover:border-white/20"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            {editingProjectId === project.id ? (
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="text"
                                                        value={newTitle}
                                                        onChange={(e) => setNewTitle(e.target.value)}
                                                        className="block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1 border"
                                                        autoFocus
                                                    />
                                                    <button
                                                        onClick={() => handleUpdateTitle(project.id)}
                                                        className="text-green-400 hover:text-green-300"
                                                    >
                                                        <Check className="h-4 w-4" />
                                                    </button>
                                                    <button
                                                        onClick={cancelEditing}
                                                        className="text-red-400 hover:text-red-300"
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div
                                                    className="group flex items-center gap-2 cursor-pointer"
                                                    onClick={() => startEditing(project)}
                                                >
                                                    <h3 className="text-lg font-semibold text-white truncate" title={project.title}>
                                                        {project.title}
                                                    </h3>
                                                    <Pencil className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            )}
                                            <p className="text-sm text-gray-400 mt-1">
                                                Last updated: {new Date(project.updated_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className="bg-indigo-500/20 p-2 rounded-lg">
                                            <FileText className="h-6 w-6 text-indigo-400" />
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center gap-3">
                                        <Link
                                            to={`/resume/${project.id}`}
                                            className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-sm"
                                        >
                                            <Edit className="h-4 w-4" />
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(project.id)}
                                            className="flex items-center justify-center p-2 text-gray-400 hover:text-red-400 hover:bg-red-900/30 rounded-lg transition-colors"
                                            title="Delete Project"
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProjects;

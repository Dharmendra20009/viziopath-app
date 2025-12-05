import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Template } from '../types/resume';
import { useNavigate } from 'react-router-dom';

const ResumeGallery = () => {
    const navigate = useNavigate();
    const [templates, setTemplates] = useState<Template[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchTemplates();
    }, []);

    const fetchTemplates = async () => {
        try {
            const { data, error } = await supabase
                .from('templates')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setTemplates(data || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleUseTemplate = async (templateId: string) => {
        try {
            // Find the selected template
            const template = templates.find(t => t.id === templateId);
            if (!template) return;

            // Create a new project
            const { data, error } = await supabase
                .from('resume_projects')
                .insert([
                    {
                        user_id: (await supabase.auth.getUser()).data.user?.id,
                        template_id: templateId,
                        title: `My ${template.title}`,
                        custom_latex_code: template.latex_code,
                    },
                ])
                .select()
                .single();

            if (error) throw error;

            // Redirect to the editor with the new project ID
            navigate(`/resume/${data.id}`);
        } catch (err: any) {
            console.error('Error creating project:', err);
            setError('Failed to create project. Please try again.');
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

            <div className="relative z-10 max-w-6xl mx-auto mt-12">
                <div className="text-center mb-12">
                    <h1 className="text-2xl font-extrabold text-white sm:text-3xl tracking-tight">
                        Choose Your Template
                    </h1>
                    <p className="mt-4 max-w-xl mx-auto text-base text-gray-300">
                        Select a professional template to get started with your resume.
                    </p>
                </div>

                {error && (
                    <div className="max-w-2xl mx-auto bg-red-900/50 border border-red-500/50 text-red-200 px-4 py-3 rounded mb-8 backdrop-blur-sm">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className="group flex flex-col bg-white/10 backdrop-blur-md rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-white/20"
                        >
                            <div className="relative aspect-w-1 aspect-h-1.4 bg-gray-800">
                                <img
                                    src={template.image_url}
                                    alt={template.title}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x800?text=No+Preview';
                                    }}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <button
                                        onClick={() => handleUseTemplate(template.id)}
                                        className="bg-white text-gray-900 px-3 py-1.5 rounded-full font-bold shadow-lg transform hover:scale-105 transition-transform text-xs"
                                    >
                                        Use
                                    </button>
                                </div>
                            </div>
                            <div className="p-3 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-sm font-bold text-white mb-1 truncate">{template.title}</h3>
                                    <p className="text-gray-400 text-[10px] line-clamp-2">
                                        Professional LaTeX template.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {templates.length === 0 && !error && (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-400">No templates available yet. Please check back later.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResumeGallery;

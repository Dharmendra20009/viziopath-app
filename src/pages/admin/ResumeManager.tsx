import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Template } from '../../types/resume';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ResumeManager = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [templates, setTemplates] = useState<Template[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Form state
    const [title, setTitle] = useState('');
    const [latexCode, setLatexCode] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const ADMIN_EMAIL = 'dharmendrakumartdh@gmail.com';

    useEffect(() => {
        if (user && user.email !== ADMIN_EMAIL) {
            navigate('/');
            return;
        }
        fetchTemplates();
    }, [user, navigate]);

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

    const handleAddTemplate = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError(null);

        try {
            const { data, error } = await supabase
                .from('templates')
                .insert([
                    {
                        title,
                        latex_code: latexCode,
                        image_url: imageUrl,
                        created_by: user?.id,
                    },
                ])
                .select();

            if (error) throw error;

            setTemplates([data[0], ...templates]);
            setTitle('');
            setLatexCode('');
            setImageUrl('');
            alert('Template added successfully!');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Resume Template Manager</h1>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Add Template Form */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Add New Template</h2>
                    <form onSubmit={handleAddTemplate} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Template Title</label>
                            <input
                                type="text"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
                                placeholder="e.g., Professional Software Engineer"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Preview Image URL</label>
                            <input
                                type="url"
                                required
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
                                placeholder="https://example.com/preview.jpg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">LaTeX Code</label>
                            <textarea
                                required
                                value={latexCode}
                                onChange={(e) => setLatexCode(e.target.value)}
                                rows={15}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2 font-mono"
                                placeholder="\documentclass{article}..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                        >
                            {saving ? 'Adding...' : 'Add Template'}
                        </button>
                    </form>
                </div>

                {/* Existing Templates List */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Existing Templates</h2>
                    <div className="space-y-6 max-h-[800px] overflow-y-auto">
                        {templates.length === 0 ? (
                            <p className="text-gray-500">No templates found.</p>
                        ) : (
                            templates.map((template) => (
                                <div key={template.id} className="border rounded-lg p-4 flex flex-col gap-4">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-medium text-lg">{template.title}</h3>
                                        <span className="text-xs text-gray-500">
                                            {new Date(template.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded overflow-hidden">
                                        <img
                                            src={template.image_url}
                                            alt={template.title}
                                            className="object-cover w-full h-48"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=No+Preview';
                                            }}
                                        />
                                    </div>
                                    <details className="text-sm">
                                        <summary className="cursor-pointer text-indigo-600 hover:text-indigo-500">
                                            View Code Snippet
                                        </summary>
                                        <pre className="mt-2 bg-gray-50 p-2 rounded overflow-x-auto text-xs">
                                            {template.latex_code.substring(0, 200)}...
                                        </pre>
                                    </details>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeManager;

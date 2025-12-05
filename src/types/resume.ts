export interface Template {
    id: string;
    title: string;
    latex_code: string;
    image_url: string;
    created_at: string;
    created_by?: string;
}

export interface ResumeProject {
    id: string;
    user_id: string;
    template_id?: string;
    title: string;
    custom_latex_code: string;
    last_compiled_at?: string;
    updated_at: string;
    created_at: string;
}

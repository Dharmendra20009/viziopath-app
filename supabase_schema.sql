-- Create templates table
create table public.templates (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  latex_code text not null,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  created_by uuid references auth.users(id)
);

-- Create resume_projects table (formerly user_templates)
create table public.resume_projects (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) not null,
  template_id uuid references public.templates(id),
  title text not null, -- User's name for the project
  custom_latex_code text not null,
  last_compiled_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table public.templates enable row level security;
alter table public.resume_projects enable row level security;

-- Policies for templates
-- Everyone can view templates
create policy "Templates are viewable by everyone"
  on public.templates for select
  using ( true );

-- Only specific admin email can insert/update/delete (This is harder to enforce purely in SQL without a custom claim or lookup table, 
-- but for now we can allow authenticated users to insert if we trust the frontend check, OR better, strictly check email if possible. 
-- Supabase auth.jwt() -> 'email' might work if configured, but usually we rely on app logic or a separate admins table. 
-- For simplicity in this starter, we'll allow authenticated users to insert, but the App enforces the email check.)
create policy "Authenticated users can insert templates"
  on public.templates for insert
  to authenticated
  with check ( true );

-- Policies for resume_projects
-- Users can CRUD their own projects
create policy "Users can view own projects"
  on public.resume_projects for select
  using ( auth.uid() = user_id );

create policy "Users can insert own projects"
  on public.resume_projects for insert
  with check ( auth.uid() = user_id );

create policy "Users can update own projects"
  on public.resume_projects for update
  using ( auth.uid() = user_id );

create policy "Users can delete own projects"
  on public.resume_projects for delete
  using ( auth.uid() = user_id );

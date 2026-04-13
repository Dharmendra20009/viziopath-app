-- Seed file for templates table
DELETE FROM public.templates;
INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '39a75185-0c6e-43aa-8245-1bde255044f3',
                    'Classic - Default',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{mathptmx} % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '19ecec3b-bc91-40a0-81fe-1e116851c0ca',
                    'Classic - Default (Blue)',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{mathptmx} % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '4c6a7cad-c272-4d12-9f16-0decae82e6f0',
                    'Classic - Lmodern',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage{lmodern}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'b87cd3b7-5ad2-4d86-b854-2bfa3061f66b',
                    'Classic - Lmodern (Red)',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage{lmodern}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '5990bfac-a3d1-4dd6-8f44-94d0457b20cf',
                    'Classic - Helvet',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '9ea35cbc-4639-4def-81e5-a85524f6960b',
                    'Classic - Helvet (Teal)',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '16391004-0414-4794-a3b3-5315838060a7',
                    'Classic - Charter',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage{charter}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '6bf0769f-7707-42ad-bbe3-ea1cbbce4e38',
                    'Classic - Charter (Blue)',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage{charter}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'f4bc47a1-98a6-434a-82e4-a3d6a1ce3d8e',
                    'Classic - Palatino',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage{mathpazo}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'e3597efb-985c-4a41-bff7-58aa1af03885',
                    'Classic - Palatino (Red)',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage{mathpazo}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '4bc4f0e3-df1f-4e47-b11d-a2ce137ea4cd',
                    'Classic - Opensans',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage[default]{opensans}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '9115dab5-47de-434a-9a34-b141ab2c84f0',
                    'Classic - Opensans (Teal)',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage[default]{opensans}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '83eabf85-45bb-4cae-aa5c-1d7dc17b7a13',
                    'Classic - Roboto',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage[sfdefault]{roboto}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '41aa58a3-c42a-46f0-b08a-df2bde96e28a',
                    'Classic - Roboto (Blue)',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage[sfdefault]{roboto}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '8fd50cf9-7a73-4ceb-a3f8-487b77924a38',
                    'Classic - Lato',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage[default]{lato}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'd3b687c7-1be4-48bd-9008-aef10889a89b',
                    'Classic - Lato (Red)',
                    'Traditional layout with serif fonts.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Simple structure, standard fonts, no columns/textboxes
\usepackage[utf8]{inputenc}
\usepackage[default]{lato}
\usepackage[T1]{fontenc}
 % Times New Roman equivalent
\usepackage[margin=0.75in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\uppercase} % Format
  {}                          % Label
  {0em}                       % Sep
  {}                          % Before-code
  [\titlerule]                % After-code

\titlespacing*{\section}{0pt}{12pt}{6pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\Huge \scshape Firstname Lastname} \\ \vspace{2pt}
    \small 123-456-7890 $|$ \href{mailto:email@example.com}{email@example.com} $|$ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} $|$
    \href{https://github.com/username}{github.com/username}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
      \resumeItem{Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0.15in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}
        \resumeItem{Developed and maintained web applications using React and Node.js.}
        \resumeItem{Optimized database queries, reducing load times by 30\%.}
        \resumeItem{Collaborated with cross-functional teams to define, design, and ship new features.}
      \end{itemize}

    \resumeSubheading
      {Software Developer Intern}{City, State}
      {Another Tech Company}{May 2021 -- Aug. 2021}
      \begin{itemize}
        \resumeItem{Assisted in the development of a mobile application using Flutter.}
        \resumeItem{Implemented unit tests to ensure code quality and reliability.}
        \resumeItem{Participated in code reviews and daily stand-up meetings.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0.15in, label={}]
    \resumeItem{\textbf{Project Name} $|$ \emph{Python, Flask, React} \\
    Designed and built a full-stack web application for managing tasks. Implemented user authentication and real-time updates.}
    
    \resumeItem{\textbf{Another Project} $|$ \emph{Java, Spring Boot} \\
    Developed a RESTful API for an e-commerce platform. Integrated payment gateway and order processing system.}
  \end{itemize}


%-----------SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code} \\
    }}
 \end{itemize}


%-----------CERTIFICATIONS-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Certified Solutions Architect – Associate} \\
     \textbf{Oracle Certified Professional, Java SE 8 Programmer}
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'eb4d5de5-9a9f-4dc6-a416-1e3e810a8a78',
                    'Creative - Default',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[default]{sourcesanspro}
\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{236, 0, 140} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'e1a45b5c-fe68-47d8-a163-be6a2376dcbf',
                    'Creative - Default (Teal)',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[default]{sourcesanspro}
\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{32, 178, 170} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '11c71681-90b7-47f3-898f-4ae093a2a7b6',
                    'Creative - Lmodern',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage{lmodern}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{236, 0, 140} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '79a0e067-77fe-4527-895d-554a5fd70fd5',
                    'Creative - Lmodern (Blue)',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage{lmodern}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{0, 102, 204} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '18d78eba-b068-423f-8566-d409cf0e0e75',
                    'Creative - Helvet',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{236, 0, 140} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '737a1654-8c9e-42d7-8b64-271531f3a5a7',
                    'Creative - Helvet (Red)',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{204, 0, 0} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'e6bb5da9-a518-4af6-aa72-1e1f0759f59e',
                    'Creative - Charter',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage{charter}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{236, 0, 140} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'f91128c3-0794-48a3-8e7d-671c934e4273',
                    'Creative - Charter (Teal)',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage{charter}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{32, 178, 170} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '9a3197a8-e432-4892-b112-aa6570991e58',
                    'Creative - Palatino',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage{mathpazo}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{236, 0, 140} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '76486693-c365-4987-bfa3-bde8716c212a',
                    'Creative - Palatino (Blue)',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage{mathpazo}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{0, 102, 204} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '8580054b-509c-4980-800e-81b24ed37c8f',
                    'Creative - Opensans',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage[default]{opensans}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{236, 0, 140} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '1a7ca2da-9760-4cc9-b673-9f3b3b194de6',
                    'Creative - Opensans (Red)',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage[default]{opensans}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{204, 0, 0} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'e4c30aa1-a5b0-40f8-b4e5-54ea7d0b3de4',
                    'Creative - Roboto',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage[sfdefault]{roboto}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{236, 0, 140} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'ac3a855e-c126-444d-8b1b-6040d9a42a34',
                    'Creative - Roboto (Teal)',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage[sfdefault]{roboto}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{32, 178, 170} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'ec507a58-cf3a-4937-a108-57561578f839',
                    'Creative - Lato',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage[default]{lato}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{236, 0, 140} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '8e5ba480-9166-40fd-b9d0-1a7f6126ab73',
                    'Creative - Lato (Blue)',
                    'Bold headers and accents for designers.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Creative but safe. Uses color and bold weights.
\usepackage[utf8]{inputenc}
\usepackage[default]{lato}
\usepackage[T1]{fontenc}

\usepackage[margin=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{accent}{RGB}{0, 102, 204} % Pink/Magenta accent
\definecolor{dark}{RGB}{44, 62, 80}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{accent}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{dark}\titlerule]   

\titlespacing*{\section}{0pt}{10pt}{5pt}

\begin{document}

%----------HEADER----------
\begin{center}
    {\fontsize{28}{34}\selectfont\bfseries\color{dark} Firstname \color{accent} Lastname} \\ \vspace{4pt}
    \small\color{dark}
    \href{mailto:email@example.com}{email@example.com} \ $\bullet$ \ 
    123-456-7890 \ $\bullet$ \ 
    \href{https://portfolio.com}{portfolio.com}
\end{center}

%-----------SKILLS-----------
\section{Skills}
\begin{center}
    \textbf{Design:} UI/UX, Figma, Adobe XD, Photoshop, Illustrator \\
    \textbf{Code:} HTML5, CSS3/SCSS, JavaScript, React \\
    \textbf{Tools:} Git, Jira, Notion, Slack
\end{center}

%-----------EXPERIENCE-----------
\section{Experience}

    \textbf{\large Senior UI/UX Designer} \hfill \color{accent}2021 -- Present \\
    \emph{\color{dark}Creative Studio, London}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Led the redesign of the company''s flagship mobile app, resulting in a 4.8-star rating.
        \item Established a new design system used across 5 different products.
    \end{itemize}
    \vspace{4pt}

    \textbf{\large Graphic Designer} \hfill \color{accent}2018 -- 2021 \\
    \emph{\color{dark}Marketing Agency, New York}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Created visual assets for social media campaigns reaching 1M+ followers.
        \item Collaborated with copywriters to produce engaging ad creatives.
    \end{itemize}

%-----------PROJECTS-----------
\section{Projects}

    \textbf{Brand Identity Redesign} | \emph{Freelance}
    \begin{itemize}[leftmargin=0.2in, label={\color{accent}\tiny$\blacksquare$}]
        \item Delivered a complete rebranding package for a local startup, including logo, typography, and guidelines.
    \end{itemize}

%-----------EDUCATION-----------
\section{Education}
    \textbf{Bachelor of Fine Arts using Graphic Design} \hfill \color{accent}2018 \\
    \emph{\color{dark}Art Institute}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '624646d2-94c7-44c2-8263-9f59d94290db',
                    'Executive - Default',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{charter} % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'e2b66705-065c-4767-998f-f84b924264a3',
                    'Executive - Default (Red)',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{charter} % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '21f88f4c-9798-4ce5-8a5c-a4d928f55c00',
                    'Executive - Lmodern',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage{lmodern}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'b46cece2-012a-4cc0-9a5e-39ccc6f56192',
                    'Executive - Lmodern (Teal)',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage{lmodern}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '66188c40-4cac-4ce6-9a9b-254cd39a8700',
                    'Executive - Helvet',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'b26625c9-31ae-42d2-b90e-6dc717a7c2a4',
                    'Executive - Helvet (Blue)',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'ec758934-5968-4827-b739-4335bc8dde8e',
                    'Executive - Charter',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage{charter}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'b5cbf890-164a-4435-b88f-206a94113faa',
                    'Executive - Charter (Red)',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage{charter}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '53dd474c-cdab-41e9-9f48-41a3767f4f2d',
                    'Executive - Palatino',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage{mathpazo}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '1b99575a-0bfe-4fd8-9800-9fd8d6c3e658',
                    'Executive - Palatino (Teal)',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage{mathpazo}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '4ec5c498-ffac-420b-80be-38884795782e',
                    'Executive - Opensans',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage[default]{opensans}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '17c9cbd7-2cdd-4e67-858c-4e7c74b0810b',
                    'Executive - Opensans (Blue)',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage[default]{opensans}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '0aa7a32a-4cef-4c34-b58b-7c266bbc4310',
                    'Executive - Roboto',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage[sfdefault]{roboto}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '750d4e0c-a6f8-41ff-a476-b2298c0ce42d',
                    'Executive - Roboto (Red)',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage[sfdefault]{roboto}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '1dda1bc3-a4a0-46e9-bdd7-b0bb24784162',
                    'Executive - Lato',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage[default]{lato}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'a3748e7d-cda4-4e07-9815-6c19eee568f6',
                    'Executive - Lato (Teal)',
                    'Spacious, elegant design for senior roles.',
                    '\documentclass[11pt,letterpaper]{article}

% ATS Optimization: Elegant, wide spacing, small caps, serif
\usepackage[utf8]{inputenc}
\usepackage[default]{lato}
\usepackage[T1]{fontenc}
 % Bitstream Charter - elegant serif
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\scshape} 
  {}                       
  {0em}                    
  {}                       
  [\titlerule]   

\titlespacing*{\section}{0pt}{18pt}{10pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\begin{document}

%----------HEADER----------
\begin{center}
    \textbf{\huge FIRSTNAME LASTNAME} \\ \vspace{6pt}
    \small 
    123-456-7890 \ $|$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $|$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username}
\end{center}

\vspace{10pt}

%----------SUMMARY----------
\section{Professional Summary}
Senior Executive with over 15 years of experience in strategic leadership and operations management. Proven track record of driving revenue growth and improving process efficiency. Adept at leading cross-functional teams and managing large-scale projects.

%-----------EXPERIENCE-----------
\section{Professional Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Director of Operations}{New York, NY}
      {Global Corp}{Jan 2018 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Oversaw daily operations across 5 regional offices, managing a budget of \$50M.}
        \resumeItem{Implemented new strategic initiatives that increased annual revenue by 20\%.}
        \resumeItem{Led a team of 100+ employees, fostering a culture of excellence and innovation.}
      \end{itemize}

    \resumeSubheading
      {Senior Manager}{Chicago, IL}
      {Consulting Firm}{June 2012 -- Dec 2017}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Managed key client accounts, delivering tailored solutions that improved client satisfaction scores by 15\%.}
        \resumeItem{Mentored junior consultants and developed internal training programs.}
      \end{itemize}

  \end{itemize}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University of Business}{Boston, MA}
      {Master of Business Administration (MBA)}{2012}
  \end{itemize}

  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {State University}{City, State}
      {Bachelor of Arts in Economics}{2008}
  \end{itemize}


%-----------SKILLS-----------
\section{Core Competencies}
\begin{itemize}[leftmargin=0.2in]
    \item Strategic Planning \& Execution
    \item Financial Analysis \& Budgeting
    \item Team Leadership \& Development
    \item Stakeholder Management
    \item Process Improvement (Lean Six Sigma)
\end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '1bd98d55-6e6d-4cd9-8d6d-b3a3cadcacee',
                    'Modern - Default',
                    'Clean, sans-serif design for tech and business.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Sans-serif fonts, clean lines, left-aligned
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[default]{lato} % Sans-serif font
\usepackage[margin=0.7in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{primary}{RGB}{45, 52, 54}
\definecolor{secondary}{RGB}{99, 110, 114}
\definecolor{highlight}{RGB}{9, 132, 227}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{primary}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{secondary}\titlerule]   

\titlespacing*{\section}{0pt}{14pt}{8pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{\color{primary}#1} & \color{secondary}\small #2 \\
      \textit{\color{secondary}\small#3} & \textit{\color{secondary}\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\small\color{highlight}$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{flushleft}
    \textbf{\Huge\color{primary} Firstname Lastname} \\ \vspace{4pt}
    {\color{secondary} \small 
    123-456-7890 \ $\cdot$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $\cdot$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} \ $\cdot$ \ 
    \href{https://github.com/username}{github.com/username}}
\end{flushleft}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Developed high-performance API services using Go and gRPC.}
        \resumeItem{Improved system reliability by implementing comprehensive monitoring.}
      \end{itemize}

    \resumeSubheading
      {Frontend Developer Intern}{City, State}
      {Creative Agency}{May 2021 -- Aug. 2021}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Built responsive user interfaces with Vue.js and Tailwind CSS.}
        \resumeItem{Optimized assets to improve page load speed by 25\%.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {E-Commerce Platform}{React, Node.js, MongoDB}
      {Full-stack application for online retail}{2022}
      \begin{itemize}[leftmargin=0.2in]
          \resumeItem{Implemented secure payment processing with Stripe integration.}
      \end{itemize}
  \end{itemize}


%-----------SKILLS-----------
\section{Skills}
 \begin{itemize}[leftmargin=0in, label={}]
    \small{\item{
     \textbf{Languages:} JavaScript, TypeScript, Go, Python, SQL \\
     \textbf{Technologies:} React, Vue, Docker, Kubernetes, AWS \\
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '8503d8a3-251e-43c4-9a67-1089b14b69dc',
                    'Modern - Default (Blue)',
                    'Clean, sans-serif design for tech and business.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Sans-serif fonts, clean lines, left-aligned
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[default]{lato} % Sans-serif font
\usepackage[margin=0.7in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{primary}{RGB}{0, 50, 100}
\definecolor{secondary}{RGB}{99, 110, 114}
\definecolor{highlight}{RGB}{0, 102, 204}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{primary}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{secondary}\titlerule]   

\titlespacing*{\section}{0pt}{14pt}{8pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{\color{primary}#1} & \color{secondary}\small #2 \\
      \textit{\color{secondary}\small#3} & \textit{\color{secondary}\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\small\color{highlight}$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{flushleft}
    \textbf{\Huge\color{primary} Firstname Lastname} \\ \vspace{4pt}
    {\color{secondary} \small 
    123-456-7890 \ $\cdot$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $\cdot$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} \ $\cdot$ \ 
    \href{https://github.com/username}{github.com/username}}
\end{flushleft}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Developed high-performance API services using Go and gRPC.}
        \resumeItem{Improved system reliability by implementing comprehensive monitoring.}
      \end{itemize}

    \resumeSubheading
      {Frontend Developer Intern}{City, State}
      {Creative Agency}{May 2021 -- Aug. 2021}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Built responsive user interfaces with Vue.js and Tailwind CSS.}
        \resumeItem{Optimized assets to improve page load speed by 25\%.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {E-Commerce Platform}{React, Node.js, MongoDB}
      {Full-stack application for online retail}{2022}
      \begin{itemize}[leftmargin=0.2in]
          \resumeItem{Implemented secure payment processing with Stripe integration.}
      \end{itemize}
  \end{itemize}


%-----------SKILLS-----------
\section{Skills}
 \begin{itemize}[leftmargin=0in, label={}]
    \small{\item{
     \textbf{Languages:} JavaScript, TypeScript, Go, Python, SQL \\
     \textbf{Technologies:} React, Vue, Docker, Kubernetes, AWS \\
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '24e807b6-004e-4ec5-96cb-68ca562cea40',
                    'Modern - Lmodern',
                    'Clean, sans-serif design for tech and business.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Sans-serif fonts, clean lines, left-aligned
\usepackage[utf8]{inputenc}
\usepackage{lmodern}
\usepackage[T1]{fontenc}
 % Sans-serif font
\usepackage[margin=0.7in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{primary}{RGB}{45, 52, 54}
\definecolor{secondary}{RGB}{99, 110, 114}
\definecolor{highlight}{RGB}{9, 132, 227}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{primary}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{secondary}\titlerule]   

\titlespacing*{\section}{0pt}{14pt}{8pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{\color{primary}#1} & \color{secondary}\small #2 \\
      \textit{\color{secondary}\small#3} & \textit{\color{secondary}\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\small\color{highlight}$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{flushleft}
    \textbf{\Huge\color{primary} Firstname Lastname} \\ \vspace{4pt}
    {\color{secondary} \small 
    123-456-7890 \ $\cdot$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $\cdot$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} \ $\cdot$ \ 
    \href{https://github.com/username}{github.com/username}}
\end{flushleft}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Developed high-performance API services using Go and gRPC.}
        \resumeItem{Improved system reliability by implementing comprehensive monitoring.}
      \end{itemize}

    \resumeSubheading
      {Frontend Developer Intern}{City, State}
      {Creative Agency}{May 2021 -- Aug. 2021}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Built responsive user interfaces with Vue.js and Tailwind CSS.}
        \resumeItem{Optimized assets to improve page load speed by 25\%.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {E-Commerce Platform}{React, Node.js, MongoDB}
      {Full-stack application for online retail}{2022}
      \begin{itemize}[leftmargin=0.2in]
          \resumeItem{Implemented secure payment processing with Stripe integration.}
      \end{itemize}
  \end{itemize}


%-----------SKILLS-----------
\section{Skills}
 \begin{itemize}[leftmargin=0in, label={}]
    \small{\item{
     \textbf{Languages:} JavaScript, TypeScript, Go, Python, SQL \\
     \textbf{Technologies:} React, Vue, Docker, Kubernetes, AWS \\
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '830509fa-37be-4b0b-9dc8-679cf3e31b83',
                    'Modern - Lmodern (Red)',
                    'Clean, sans-serif design for tech and business.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Sans-serif fonts, clean lines, left-aligned
\usepackage[utf8]{inputenc}
\usepackage{lmodern}
\usepackage[T1]{fontenc}
 % Sans-serif font
\usepackage[margin=0.7in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{primary}{RGB}{100, 0, 0}
\definecolor{secondary}{RGB}{99, 110, 114}
\definecolor{highlight}{RGB}{204, 0, 0}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{primary}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{secondary}\titlerule]   

\titlespacing*{\section}{0pt}{14pt}{8pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{\color{primary}#1} & \color{secondary}\small #2 \\
      \textit{\color{secondary}\small#3} & \textit{\color{secondary}\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\small\color{highlight}$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{flushleft}
    \textbf{\Huge\color{primary} Firstname Lastname} \\ \vspace{4pt}
    {\color{secondary} \small 
    123-456-7890 \ $\cdot$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $\cdot$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} \ $\cdot$ \ 
    \href{https://github.com/username}{github.com/username}}
\end{flushleft}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Developed high-performance API services using Go and gRPC.}
        \resumeItem{Improved system reliability by implementing comprehensive monitoring.}
      \end{itemize}

    \resumeSubheading
      {Frontend Developer Intern}{City, State}
      {Creative Agency}{May 2021 -- Aug. 2021}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Built responsive user interfaces with Vue.js and Tailwind CSS.}
        \resumeItem{Optimized assets to improve page load speed by 25\%.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {E-Commerce Platform}{React, Node.js, MongoDB}
      {Full-stack application for online retail}{2022}
      \begin{itemize}[leftmargin=0.2in]
          \resumeItem{Implemented secure payment processing with Stripe integration.}
      \end{itemize}
  \end{itemize}


%-----------SKILLS-----------
\section{Skills}
 \begin{itemize}[leftmargin=0in, label={}]
    \small{\item{
     \textbf{Languages:} JavaScript, TypeScript, Go, Python, SQL \\
     \textbf{Technologies:} React, Vue, Docker, Kubernetes, AWS \\
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '15c957f0-5c85-44a7-ad4f-4d0ccb4e1013',
                    'Modern - Helvet',
                    'Clean, sans-serif design for tech and business.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Sans-serif fonts, clean lines, left-aligned
\usepackage[utf8]{inputenc}
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
\usepackage[T1]{fontenc}
 % Sans-serif font
\usepackage[margin=0.7in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{primary}{RGB}{45, 52, 54}
\definecolor{secondary}{RGB}{99, 110, 114}
\definecolor{highlight}{RGB}{9, 132, 227}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{primary}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{secondary}\titlerule]   

\titlespacing*{\section}{0pt}{14pt}{8pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{\color{primary}#1} & \color{secondary}\small #2 \\
      \textit{\color{secondary}\small#3} & \textit{\color{secondary}\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\small\color{highlight}$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{flushleft}
    \textbf{\Huge\color{primary} Firstname Lastname} \\ \vspace{4pt}
    {\color{secondary} \small 
    123-456-7890 \ $\cdot$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $\cdot$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} \ $\cdot$ \ 
    \href{https://github.com/username}{github.com/username}}
\end{flushleft}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Developed high-performance API services using Go and gRPC.}
        \resumeItem{Improved system reliability by implementing comprehensive monitoring.}
      \end{itemize}

    \resumeSubheading
      {Frontend Developer Intern}{City, State}
      {Creative Agency}{May 2021 -- Aug. 2021}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Built responsive user interfaces with Vue.js and Tailwind CSS.}
        \resumeItem{Optimized assets to improve page load speed by 25\%.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {E-Commerce Platform}{React, Node.js, MongoDB}
      {Full-stack application for online retail}{2022}
      \begin{itemize}[leftmargin=0.2in]
          \resumeItem{Implemented secure payment processing with Stripe integration.}
      \end{itemize}
  \end{itemize}


%-----------SKILLS-----------
\section{Skills}
 \begin{itemize}[leftmargin=0in, label={}]
    \small{\item{
     \textbf{Languages:} JavaScript, TypeScript, Go, Python, SQL \\
     \textbf{Technologies:} React, Vue, Docker, Kubernetes, AWS \\
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '3b7e8ba2-8ba8-4a44-8520-38561a68afaf',
                    'Modern - Helvet (Teal)',
                    'Clean, sans-serif design for tech and business.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Sans-serif fonts, clean lines, left-aligned
\usepackage[utf8]{inputenc}
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
\usepackage[T1]{fontenc}
 % Sans-serif font
\usepackage[margin=0.7in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{primary}{RGB}{0, 128, 128}
\definecolor{secondary}{RGB}{99, 110, 114}
\definecolor{highlight}{RGB}{32, 178, 170}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{primary}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{secondary}\titlerule]   

\titlespacing*{\section}{0pt}{14pt}{8pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{\color{primary}#1} & \color{secondary}\small #2 \\
      \textit{\color{secondary}\small#3} & \textit{\color{secondary}\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\small\color{highlight}$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{flushleft}
    \textbf{\Huge\color{primary} Firstname Lastname} \\ \vspace{4pt}
    {\color{secondary} \small 
    123-456-7890 \ $\cdot$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $\cdot$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} \ $\cdot$ \ 
    \href{https://github.com/username}{github.com/username}}
\end{flushleft}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Developed high-performance API services using Go and gRPC.}
        \resumeItem{Improved system reliability by implementing comprehensive monitoring.}
      \end{itemize}

    \resumeSubheading
      {Frontend Developer Intern}{City, State}
      {Creative Agency}{May 2021 -- Aug. 2021}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Built responsive user interfaces with Vue.js and Tailwind CSS.}
        \resumeItem{Optimized assets to improve page load speed by 25\%.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {E-Commerce Platform}{React, Node.js, MongoDB}
      {Full-stack application for online retail}{2022}
      \begin{itemize}[leftmargin=0.2in]
          \resumeItem{Implemented secure payment processing with Stripe integration.}
      \end{itemize}
  \end{itemize}


%-----------SKILLS-----------
\section{Skills}
 \begin{itemize}[leftmargin=0in, label={}]
    \small{\item{
     \textbf{Languages:} JavaScript, TypeScript, Go, Python, SQL \\
     \textbf{Technologies:} React, Vue, Docker, Kubernetes, AWS \\
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '19813c73-fc0c-4e6f-a8ec-9f337513a9c6',
                    'Modern - Charter',
                    'Clean, sans-serif design for tech and business.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Sans-serif fonts, clean lines, left-aligned
\usepackage[utf8]{inputenc}
\usepackage{charter}
\usepackage[T1]{fontenc}
 % Sans-serif font
\usepackage[margin=0.7in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{primary}{RGB}{45, 52, 54}
\definecolor{secondary}{RGB}{99, 110, 114}
\definecolor{highlight}{RGB}{9, 132, 227}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{primary}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{secondary}\titlerule]   

\titlespacing*{\section}{0pt}{14pt}{8pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{\color{primary}#1} & \color{secondary}\small #2 \\
      \textit{\color{secondary}\small#3} & \textit{\color{secondary}\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\small\color{highlight}$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{flushleft}
    \textbf{\Huge\color{primary} Firstname Lastname} \\ \vspace{4pt}
    {\color{secondary} \small 
    123-456-7890 \ $\cdot$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $\cdot$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} \ $\cdot$ \ 
    \href{https://github.com/username}{github.com/username}}
\end{flushleft}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Developed high-performance API services using Go and gRPC.}
        \resumeItem{Improved system reliability by implementing comprehensive monitoring.}
      \end{itemize}

    \resumeSubheading
      {Frontend Developer Intern}{City, State}
      {Creative Agency}{May 2021 -- Aug. 2021}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Built responsive user interfaces with Vue.js and Tailwind CSS.}
        \resumeItem{Optimized assets to improve page load speed by 25\%.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {E-Commerce Platform}{React, Node.js, MongoDB}
      {Full-stack application for online retail}{2022}
      \begin{itemize}[leftmargin=0.2in]
          \resumeItem{Implemented secure payment processing with Stripe integration.}
      \end{itemize}
  \end{itemize}


%-----------SKILLS-----------
\section{Skills}
 \begin{itemize}[leftmargin=0in, label={}]
    \small{\item{
     \textbf{Languages:} JavaScript, TypeScript, Go, Python, SQL \\
     \textbf{Technologies:} React, Vue, Docker, Kubernetes, AWS \\
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '9565eba3-d697-4aa8-b86d-c07503352879',
                    'Modern - Charter (Blue)',
                    'Clean, sans-serif design for tech and business.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Sans-serif fonts, clean lines, left-aligned
\usepackage[utf8]{inputenc}
\usepackage{charter}
\usepackage[T1]{fontenc}
 % Sans-serif font
\usepackage[margin=0.7in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{primary}{RGB}{0, 50, 100}
\definecolor{secondary}{RGB}{99, 110, 114}
\definecolor{highlight}{RGB}{0, 102, 204}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{primary}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{secondary}\titlerule]   

\titlespacing*{\section}{0pt}{14pt}{8pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{\color{primary}#1} & \color{secondary}\small #2 \\
      \textit{\color{secondary}\small#3} & \textit{\color{secondary}\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\small\color{highlight}$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{flushleft}
    \textbf{\Huge\color{primary} Firstname Lastname} \\ \vspace{4pt}
    {\color{secondary} \small 
    123-456-7890 \ $\cdot$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $\cdot$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} \ $\cdot$ \ 
    \href{https://github.com/username}{github.com/username}}
\end{flushleft}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Developed high-performance API services using Go and gRPC.}
        \resumeItem{Improved system reliability by implementing comprehensive monitoring.}
      \end{itemize}

    \resumeSubheading
      {Frontend Developer Intern}{City, State}
      {Creative Agency}{May 2021 -- Aug. 2021}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Built responsive user interfaces with Vue.js and Tailwind CSS.}
        \resumeItem{Optimized assets to improve page load speed by 25\%.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {E-Commerce Platform}{React, Node.js, MongoDB}
      {Full-stack application for online retail}{2022}
      \begin{itemize}[leftmargin=0.2in]
          \resumeItem{Implemented secure payment processing with Stripe integration.}
      \end{itemize}
  \end{itemize}


%-----------SKILLS-----------
\section{Skills}
 \begin{itemize}[leftmargin=0in, label={}]
    \small{\item{
     \textbf{Languages:} JavaScript, TypeScript, Go, Python, SQL \\
     \textbf{Technologies:} React, Vue, Docker, Kubernetes, AWS \\
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'ac6726ce-8b0c-4c53-a5c3-6973caa5d0f0',
                    'Modern - Palatino',
                    'Clean, sans-serif design for tech and business.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Sans-serif fonts, clean lines, left-aligned
\usepackage[utf8]{inputenc}
\usepackage{mathpazo}
\usepackage[T1]{fontenc}
 % Sans-serif font
\usepackage[margin=0.7in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{primary}{RGB}{45, 52, 54}
\definecolor{secondary}{RGB}{99, 110, 114}
\definecolor{highlight}{RGB}{9, 132, 227}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{primary}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{secondary}\titlerule]   

\titlespacing*{\section}{0pt}{14pt}{8pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{\color{primary}#1} & \color{secondary}\small #2 \\
      \textit{\color{secondary}\small#3} & \textit{\color{secondary}\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\small\color{highlight}$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{flushleft}
    \textbf{\Huge\color{primary} Firstname Lastname} \\ \vspace{4pt}
    {\color{secondary} \small 
    123-456-7890 \ $\cdot$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $\cdot$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} \ $\cdot$ \ 
    \href{https://github.com/username}{github.com/username}}
\end{flushleft}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Developed high-performance API services using Go and gRPC.}
        \resumeItem{Improved system reliability by implementing comprehensive monitoring.}
      \end{itemize}

    \resumeSubheading
      {Frontend Developer Intern}{City, State}
      {Creative Agency}{May 2021 -- Aug. 2021}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Built responsive user interfaces with Vue.js and Tailwind CSS.}
        \resumeItem{Optimized assets to improve page load speed by 25\%.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {E-Commerce Platform}{React, Node.js, MongoDB}
      {Full-stack application for online retail}{2022}
      \begin{itemize}[leftmargin=0.2in]
          \resumeItem{Implemented secure payment processing with Stripe integration.}
      \end{itemize}
  \end{itemize}


%-----------SKILLS-----------
\section{Skills}
 \begin{itemize}[leftmargin=0in, label={}]
    \small{\item{
     \textbf{Languages:} JavaScript, TypeScript, Go, Python, SQL \\
     \textbf{Technologies:} React, Vue, Docker, Kubernetes, AWS \\
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    'f532b9b8-9b1e-4dfb-8b64-f4998bef7b87',
                    'Modern - Palatino (Red)',
                    'Clean, sans-serif design for tech and business.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Sans-serif fonts, clean lines, left-aligned
\usepackage[utf8]{inputenc}
\usepackage{mathpazo}
\usepackage[T1]{fontenc}
 % Sans-serif font
\usepackage[margin=0.7in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{primary}{RGB}{100, 0, 0}
\definecolor{secondary}{RGB}{99, 110, 114}
\definecolor{highlight}{RGB}{204, 0, 0}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{primary}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{secondary}\titlerule]   

\titlespacing*{\section}{0pt}{14pt}{8pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{\color{primary}#1} & \color{secondary}\small #2 \\
      \textit{\color{secondary}\small#3} & \textit{\color{secondary}\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\small\color{highlight}$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{flushleft}
    \textbf{\Huge\color{primary} Firstname Lastname} \\ \vspace{4pt}
    {\color{secondary} \small 
    123-456-7890 \ $\cdot$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $\cdot$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} \ $\cdot$ \ 
    \href{https://github.com/username}{github.com/username}}
\end{flushleft}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Developed high-performance API services using Go and gRPC.}
        \resumeItem{Improved system reliability by implementing comprehensive monitoring.}
      \end{itemize}

    \resumeSubheading
      {Frontend Developer Intern}{City, State}
      {Creative Agency}{May 2021 -- Aug. 2021}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Built responsive user interfaces with Vue.js and Tailwind CSS.}
        \resumeItem{Optimized assets to improve page load speed by 25\%.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {E-Commerce Platform}{React, Node.js, MongoDB}
      {Full-stack application for online retail}{2022}
      \begin{itemize}[leftmargin=0.2in]
          \resumeItem{Implemented secure payment processing with Stripe integration.}
      \end{itemize}
  \end{itemize}


%-----------SKILLS-----------
\section{Skills}
 \begin{itemize}[leftmargin=0in, label={}]
    \small{\item{
     \textbf{Languages:} JavaScript, TypeScript, Go, Python, SQL \\
     \textbf{Technologies:} React, Vue, Docker, Kubernetes, AWS \\
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '4b4e4a62-8046-489d-82cb-6a56a3181a08',
                    'Modern - Opensans',
                    'Clean, sans-serif design for tech and business.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Sans-serif fonts, clean lines, left-aligned
\usepackage[utf8]{inputenc}
\usepackage[default]{opensans}
\usepackage[T1]{fontenc}
 % Sans-serif font
\usepackage[margin=0.7in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{primary}{RGB}{45, 52, 54}
\definecolor{secondary}{RGB}{99, 110, 114}
\definecolor{highlight}{RGB}{9, 132, 227}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{primary}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{secondary}\titlerule]   

\titlespacing*{\section}{0pt}{14pt}{8pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{\color{primary}#1} & \color{secondary}\small #2 \\
      \textit{\color{secondary}\small#3} & \textit{\color{secondary}\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\small\color{highlight}$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{flushleft}
    \textbf{\Huge\color{primary} Firstname Lastname} \\ \vspace{4pt}
    {\color{secondary} \small 
    123-456-7890 \ $\cdot$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $\cdot$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} \ $\cdot$ \ 
    \href{https://github.com/username}{github.com/username}}
\end{flushleft}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Developed high-performance API services using Go and gRPC.}
        \resumeItem{Improved system reliability by implementing comprehensive monitoring.}
      \end{itemize}

    \resumeSubheading
      {Frontend Developer Intern}{City, State}
      {Creative Agency}{May 2021 -- Aug. 2021}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Built responsive user interfaces with Vue.js and Tailwind CSS.}
        \resumeItem{Optimized assets to improve page load speed by 25\%.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {E-Commerce Platform}{React, Node.js, MongoDB}
      {Full-stack application for online retail}{2022}
      \begin{itemize}[leftmargin=0.2in]
          \resumeItem{Implemented secure payment processing with Stripe integration.}
      \end{itemize}
  \end{itemize}


%-----------SKILLS-----------
\section{Skills}
 \begin{itemize}[leftmargin=0in, label={}]
    \small{\item{
     \textbf{Languages:} JavaScript, TypeScript, Go, Python, SQL \\
     \textbf{Technologies:} React, Vue, Docker, Kubernetes, AWS \\
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );

INSERT INTO public.templates (id, title, description, latex_code, created_at, updated_at)
                VALUES (
                    '4b86cd60-6b36-4bb8-993b-bd84fb94c73f',
                    'Modern - Opensans (Teal)',
                    'Clean, sans-serif design for tech and business.',
                    '\documentclass[11pt,a4paper]{article}

% ATS Optimization: Sans-serif fonts, clean lines, left-aligned
\usepackage[utf8]{inputenc}
\usepackage[default]{opensans}
\usepackage[T1]{fontenc}
 % Sans-serif font
\usepackage[margin=0.7in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}

% Colors
\definecolor{primary}{RGB}{0, 128, 128}
\definecolor{secondary}{RGB}{99, 110, 114}
\definecolor{highlight}{RGB}{32, 178, 170}

% Formatting
\pagestyle{empty}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section Formatting
\titleformat{\section}
  {\large\bfseries\color{primary}\uppercase} 
  {}                       
  {0em}                    
  {}                       
  [\color{secondary}\titlerule]   

\titlespacing*{\section}{0pt}{14pt}{8pt}

% Custom Commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{\color{primary}#1} & \color{secondary}\small #2 \\
      \textit{\color{secondary}\small#3} & \textit{\color{secondary}\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\renewcommand\labelitemi{$\vcenter{\hbox{\small\color{highlight}$\bullet$}}$}

\begin{document}

%----------HEADER----------
\begin{flushleft}
    \textbf{\Huge\color{primary} Firstname Lastname} \\ \vspace{4pt}
    {\color{secondary} \small 
    123-456-7890 \ $\cdot$ \ 
    \href{mailto:email@example.com}{email@example.com} \ $\cdot$ \ 
    \href{https://linkedin.com/in/username}{linkedin.com/in/username} \ $\cdot$ \ 
    \href{https://github.com/username}{github.com/username}}
\end{flushleft}


%-----------EDUCATION-----------
\section{Education}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Aug. 2018 -- May 2022}
      \resumeItem{GPA: 3.8/4.0}
  \end{itemize}


%-----------EXPERIENCE-----------
\section{Experience}
  \begin{itemize}[leftmargin=0in, label={}]

    \resumeSubheading
      {Software Engineer}{City, State}
      {Tech Company}{June 2022 -- Present}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Developed high-performance API services using Go and gRPC.}
        \resumeItem{Improved system reliability by implementing comprehensive monitoring.}
      \end{itemize}

    \resumeSubheading
      {Frontend Developer Intern}{City, State}
      {Creative Agency}{May 2021 -- Aug. 2021}
      \begin{itemize}[leftmargin=0.2in]
        \resumeItem{Built responsive user interfaces with Vue.js and Tailwind CSS.}
        \resumeItem{Optimized assets to improve page load speed by 25\%.}
      \end{itemize}

  \end{itemize}


%-----------PROJECTS-----------
\section{Projects}
  \begin{itemize}[leftmargin=0in, label={}]
    \resumeSubheading
      {E-Commerce Platform}{React, Node.js, MongoDB}
      {Full-stack application for online retail}{2022}
      \begin{itemize}[leftmargin=0.2in]
          \resumeItem{Implemented secure payment processing with Stripe integration.}
      \end{itemize}
  \end{itemize}


%-----------SKILLS-----------
\section{Skills}
 \begin{itemize}[leftmargin=0in, label={}]
    \small{\item{
     \textbf{Languages:} JavaScript, TypeScript, Go, Python, SQL \\
     \textbf{Technologies:} React, Vue, Docker, Kubernetes, AWS \\
    }}
 \end{itemize}

\end{document}
',
                    now(),
                    now()
                );
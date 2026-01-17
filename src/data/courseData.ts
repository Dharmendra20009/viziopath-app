export interface Course {
    id: string;
    title: string;
    category: string;
    image: string;
    price: number;
    discountedPrice: number;
    rating: number;
    students: number;
    description: string;
    syllabus: string[];
    features: string[];
}

export const courses: Course[] = [
    // 💻 Full Stack Development
    {
        id: "fsd-mern",
        title: "Full Stack Web Development (MERN)",
        category: "Development",
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 4999,
        discountedPrice: 2499,
        rating: 4.8,
        students: 12500,
        description: "Master MongoDB, Express, React, and Node.js to build scalable web applications.",
        syllabus: [
            "HTML5, CSS3, JavaScript (ES6+)",
            "React.js: Hooks, Redux, Context API",
            "Node.js & Express.js Backend",
            "MongoDB Database Design",
            "REST API Development",
            "Authentication & Authorization (JWT)",
            "Deployment to Cloud (AWS/Heroku)"
        ],
        features: ["Live Projects", "Certificate of Completion", "Placement Support"]
    },
    {
        id: "java-fsd",
        title: "Java Full Stack Development",
        category: "Development",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 5999,
        discountedPrice: 2999,
        rating: 4.7,
        students: 8900,
        description: "Build enterprise-grade applications using Java, Spring Boot, and React.",
        syllabus: [
            "Core Java & Advanced Java",
            "Spring Framework & Spring Boot",
            "Hibernate & JPA",
            "Microservices Architecture",
            "React.js Frontend Integration",
            "MySQL & PostgreSQL",
            "Docker & Kubernetes Basics"
        ],
        features: ["Enterprise Ready", "Microservices", "Interview Prep"]
    },

    // 📊 Data Science & AI
    {
        id: "data-science",
        title: "Data Science with Python",
        category: "Data Science",
        image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 6999,
        discountedPrice: 3499,
        rating: 4.9,
        students: 15400,
        description: "From Python basics to Machine Learning and Data Visualization masterclass.",
        syllabus: [
            "Python Programming Fundamentals",
            "NumPy & Pandas for Data Analysis",
            "Data Visualization (Matplotlib, Seaborn)",
            "Statistical Analysis",
            "Machine Learning Algorithms (Scikit-Learn)",
            "Deep Learning Basics (TensorFlow)",
            "Capstone Project"
        ],
        features: ["Real-world Datasets", "Kaggle Projects", "Mentorship"]
    },
    {
        id: "ai-ml",
        title: "Artificial Intelligence & Machine Learning",
        category: "Data Science",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 7999,
        discountedPrice: 3999,
        rating: 4.8,
        students: 6200,
        description: "Deep dive into neural networks, NLP, and computer vision technologies.",
        syllabus: [
            "Neural Networks & Deep Learning",
            "Computer Vision with OpenCV",
            "Natural Language Processing (NLP)",
            "Reinforcement Learning Basics",
            "Generative AI & LLMs",
            "Model Deployment & MLOps",
            "Ethics in AI"
        ],
        features: ["GPU Labs", "Cutting-edge Tech", "Research Based"]
    },

    // 📈 Data Analysis
    {
        id: "data-analyst",
        title: "Data Analyst Bootcamp",
        category: "Data Analyst",
        image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 4499,
        discountedPrice: 2299,
        rating: 4.7,
        students: 6800,
        description: "Become a Data Analyst with Excel, SQL, and Tableau expertise.",
        syllabus: [
            "Advanced Excel for Business Intelligence",
            "SQL for Data Analysis (MySQL/PostgreSQL)",
            "Data Cleaning & Preparation",
            "Tableau: Dashboarding & Storytelling",
            "Power BI: Basics to Advanced",
            "Python for Data Analytics",
            "Business Case Studies"
        ],
        features: ["Portfolio Projects", "BI Tools", "Job Ready Skills"]
    },
    {
        id: "pbi-adv",
        title: "Power BI & Data Visualization",
        category: "Data Analyst",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 2999,
        discountedPrice: 1499,
        rating: 4.6,
        students: 5300,
        description: "Transform raw data into compelling stories and interactive dashboards.",
        syllabus: [
            "Data Connection & Transformation",
            "DAX Formulas Masterclass",
            "Visualizations & Charts",
            "Dashboard Design Principles",
            "Power BI Service & Publishing",
            "Data Modeling",
            "Real-world Business Case Studies"
        ],
        features: ["Portfolio Building", "Business Analytics", "Interactive Labs"]
    },

    // 💰 Finance
    {
        id: "financial-modeling",
        title: "Financial Modeling & Valuation",
        category: "Finance",
        image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 5999,
        discountedPrice: 2999,
        rating: 4.8,
        students: 3400,
        description: "Master financial modeling, DCF valuation, and M&A analysis.",
        syllabus: [
            "Excel for Finance Professionals",
            "Building 3-Statement Financial Models",
            "Discounted Cash Flow (DCF) Valuation",
            "Comparable Company Analysis (Comps)",
            "Mergers & Acquisitions (M&A) Modeling",
            "LBO Modeling Basics",
            "Pitch Deck Creation"
        ],
        features: ["Wall St. Standards", "Live Case Studies", "Investment Banking Prep"]
    },
    {
        id: "stock-market",
        title: "Stock Market & Technical Analysis",
        category: "Finance",
        image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 3999,
        discountedPrice: 1999,
        rating: 4.7,
        students: 4100,
        description: "Learn to trade and invest in stock markets with technical analysis.",
        syllabus: [
            "Basics of Stock Market & IPOs",
            "Technical Analysis: Candlesticks & Patterns",
            "Indicators & Oscillators (RSI, MACD)",
            "Fundamental Analysis",
            "Risk Management & Psychology",
            "Options & Futures Trading Basics",
            "Building an Investment Portfolio"
        ],
        features: ["Live Trading Demo", "market Strategy", "Wealth Management"]
    },

    // 👥 Human Resources (HR)
    {
        id: "hr-analytics",
        title: "HR Analytics & Management",
        category: "HR",
        image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 3999,
        discountedPrice: 1999,
        rating: 4.6,
        students: 2800,
        description: "Data-driven human resource management and strategy.",
        syllabus: [
            "Introduction to HR Analytics",
            "Key HR Metrics & KPIs",
            "Recruitment & Dashboarding in Excel",
            "Employee Retention Analysis",
            "Performance Management Systems",
            "Workforce Planning",
            "Predictive Analytics in HR"
        ],
        features: ["SHRM Aligned", "Actionable Insights", "Management Tools"]
    },
    {
        id: "talent-acquisition",
        title: "Talent Acquisition Specialist",
        category: "HR",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 3499,
        discountedPrice: 1699,
        rating: 4.7,
        students: 2200,
        description: "Modern recruitment strategies for sourcing top talent.",
        syllabus: [
            "Recruitment Lifecycle Management",
            "Sourcing Strategies (LinkedIn, Job Boards)",
            "Employer Branding",
            "Screening & Interviewing Techniques",
            "Salary Negotiation",
            "Onboarding Best Practices",
            "Diversity & Inclusion in Hiring"
        ],
        features: ["Recruiter Toolkit", "Mock Interviews", "LinkedIn Optimization"]
    },

    // 🚀 Entrepreneurship
    {
        id: "startup-masterclass",
        title: "Startup Entrepreneurship Masterclass",
        category: "Entrepreneurship",
        image: "https://images.pexels.com/photos/7413916/pexels-photo-7413916.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 5999,
        discountedPrice: 2999,
        rating: 4.9,
        students: 1500,
        description: "From idea to IPO: The complete guide to building a startup.",
        syllabus: [
            "Ideation & Validation (Lean Canvas)",
            "Building a Minimum Viable Product (MVP)",
            "Business Model Generation",
            "Go-to-Market & Sales Strategy",
            "Fundraising: Seed to Series A",
            "Legal & IP Basics",
            "Scaling & Growth Hacking"
        ],
        features: ["Investor Pitch Deck", "Founder Community", "Mentor Access"]
    },

    // 🎓 MBA Specializations
    {
        id: "mini-mba-marketing",
        title: "Mini-MBA: Marketing Leadership",
        category: "MBA",
        image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 7999,
        discountedPrice: 3999,
        rating: 4.8,
        students: 3100,
        description: "Strategic marketing leadership for the digital age.",
        syllabus: [
            "Strategic Marketing Management",
            "Consumer Behavior Analysis",
            "Brand Management",
            "Digital Marketing Integration",
            "Marketing Analytics",
            "Product Positioning & Pricing",
            "Global Marketing Strategy"
        ],
        features: ["Case Method", "Leadership Skills", "CMO Insights"]
    },
    {
        id: "mini-mba-finance",
        title: "Mini-MBA: Corporate Finance",
        category: "MBA",
        image: "https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 7999,
        discountedPrice: 3999,
        rating: 4.7,
        students: 2900,
        description: "Essential finance skills for business leaders and managers.",
        syllabus: [
            "Financial Statement Analysis",
            "Corporate Finance Strategy",
            "Capital Budgeting",
            "Risk Management",
            "International Finance",
            "Mergers & Acquisitions Overview",
            "Fintech Trends"
        ],
        features: ["CFO Toolkit", "Financial Strategy", "Global Perspective"]
    },
    {
        id: "mini-mba-operations",
        title: "Mini-MBA: Operations & Supply Chain",
        category: "MBA",
        image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 7499,
        discountedPrice: 3799,
        rating: 4.6,
        students: 2400,
        description: "Optimize business processes and supply chain efficiency.",
        syllabus: [
            "Operations Management Fundamentals",
            "Supply Chain Strategy & Logistics",
            "Quality Management (Six Sigma Basics)",
            "Project Management",
            "Inventory Control",
            "Process Improvement (Lean)",
            "Technology in Operations"
        ],
        features: ["Operational Excellence", "Process Maps", "Efficiency Tools"]
    },
    {
        id: "product-mgmt",
        title: "Product Management Essentials",
        category: "Management",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 4999,
        discountedPrice: 2499,
        rating: 4.8,
        students: 2100,
        description: "Learn to build and scale products that customers love.",
        syllabus: [
            "Product Lifecycle Management",
            "Market Research & Competitor Analysis",
            "Product Roadmap & Strategy",
            "Agile & Scrum Methodologies",
            "User Stories & Requirements",
            "Metrics & KPIs",
            "Go-to-Market Strategy"
        ],
        features: ["Case Studies", "PM Tools", "Interview Guide"]
    },

    // 🛡️ Cyber Security
    {
        id: "cyber-sec",
        title: "Ethical Hacking & Cyber Security",
        category: "Cyber Security",
        image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 5499,
        discountedPrice: 2799,
        rating: 4.7,
        students: 4500,
        description: "Learn to defend systems by understanding how attackers think and operate.",
        syllabus: [
            "Networking Fundamentals",
            "Linux for Hackers",
            "Information Gathering & Scanning",
            "Vulnerability Assessment",
            "Web Application Penetration Testing",
            "Network Attacks & Defense",
            "Cryptography Basics"
        ],
        features: ["Virtual Labs", "CEH Aligned", "Defense Tools"]
    },

    // ☁️ Cloud Computing
    {
        id: "aws-cloud",
        title: "AWS Cloud Practitioner & Solutions Architect",
        category: "Cloud",
        image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 6499,
        discountedPrice: 3299,
        rating: 4.9,
        students: 7800,
        description: "Become a certified AWS professional and master cloud infrastructure.",
        syllabus: [
            "Cloud Computing Concepts",
            "EC2, S3, RDS, & VPC",
            "Identity & Access Management (IAM)",
            "Lambda & Serverless",
            "Load Balancing & Auto Scaling",
            "Cloud Security & Compliance",
            "AWS Billing & Cost Management"
        ],
        features: ["Certification Prep", "Free Tier Labs", "Architecture Focus"]
    },

    // 🎨 UI/UX Design
    {
        id: "ui-ux",
        title: "UI/UX Design Masterclass",
        category: "Design",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 3499,
        discountedPrice: 1799,
        rating: 4.7,
        students: 4200,
        description: "Design user-centered interfaces and experiences using Figma and Adobe XD.",
        syllabus: [
            "Design Thinking Process",
            "User Research & Personas",
            "Wireframing & Prototyping",
            "Visual Design Principles",
            "Figma Mastery",
            "Interaction Design",
            "Usability Testing"
        ],
        features: ["Portfolio Review", "Design Systems", "Real Client Briefs"]
    },

    // 📈 Digital Marketing
    {
        id: "digital-marketing",
        title: "Advanced Digital Marketing",
        category: "Marketing",
        image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: 2999,
        discountedPrice: 1499,
        rating: 4.6,
        students: 9000,
        description: "Master SEO, SEM, Social Media, and Content Marketing strategies.",
        syllabus: [
            "SEO (Search Engine Optimization)",
            "Google Ads (SEM) & PPC",
            "Social Media Marketing (SMM)",
            "Email Marketing & Automation",
            "Content Strategy & Copywriting",
            "Google Analytics 4",
            "Affiliate Marketing Basics"
        ],
        features: ["Live Ad Campaigns", "Tool Mastery", "Freelance Guide"]
    }
];

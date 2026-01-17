export type Job = {
    id: number;
    title: string;
    company: string;
    location: string;
    category: string;
    type: string;
    link: string;
    description: string;
    stipend: string;
    eligibility: string[];
};

export const fallbackJobs: Job[] = [
    // 🌐 Viziopath Internships
    {
        id: 101,
        title: "Global B.Tech Internship Program",
        company: "Viziopath",
        location: "Onsite / Remote",
        category: "Viziopath Intern",
        type: "Internship",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfOGD-eqNiOzivb65YFo9r-xHLs_bygwZ2FIMkR2q3TzrsBMg/viewform",
        description: "Hands-on industry experience for all B.Tech students with projects, mentorship, and skill development.",
        stipend: "₹15,000 - ₹25,000/month",
        eligibility: ["B.Tech", "BE", "B.Sc IT"]
    },
    {
        id: 102,
        title: "MBA/BBA Career Launchpad Internship",
        company: "Viziopath",
        location: "Onsite / Remote",
        category: "Viziopath Intern",
        type: "Internship",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfOGD-eqNiOzivb65YFo9r-xHLs_bygwZ2FIMkR2q3TzrsBMg/viewform",
        description: "Master core business skills by working on cross-functional projects with real business impact.",
        stipend: "₹12,000 - ₹20,000/month",
        eligibility: ["MBA", "BBA", "BMS"]
    },
    {
        id: 103,
        title: "BCA Career Launchpad Internship",
        company: "Viziopath",
        location: "Onsite / Remote",
        category: "Viziopath Intern",
        type: "Internship",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfOGD-eqNiOzivb65YFo9r-xHLs_bygwZ2FIMkR2q3TzrsBMg/viewform",
        description: "Code, create, and collaborate on real-world applications designed for tomorrow's tech world.",
        stipend: "₹10,000 - ₹18,000/month",
        eligibility: ["BCA", "B.Sc CS", "B.Sc IT"]
    },

    // 🔹 Microsoft
    {
        id: 1,
        title: "Software Engineering Intern",
        company: "Microsoft",
        location: "Hyderabad, Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://careers.microsoft.com/students/us/en/ind-internship",
        description: "Work on cutting-edge technologies including Azure, AI, and cloud computing.",
        stipend: "₹90,000 - ₹1,20,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA", "MCA"]
    },

    // 🔹 Google
    {
        id: 2,
        title: "Software Engineer Intern",
        company: "Google",
        location: "Bangalore, Hyderabad",
        category: "IT",
        type: "Internship",
        link: "https://careers.google.com/jobs/results/131339044044539590-software-engineering-intern-summer-2024/",
        description: "Develop software solutions and work on Google's core products and services.",
        stipend: "₹1,00,000 - ₹1,50,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA", "MCA"]
    },

    // 🔹 Amazon
    {
        id: 3,
        title: "SDE Intern",
        company: "Amazon",
        location: "Bangalore, Chennai",
        category: "IT",
        type: "Internship",
        link: "https://www.amazon.jobs/en/jobs/2415584/software-development-engineer-intern-2024",
        description: "Build scalable distributed systems and work on AWS technologies.",
        stipend: "₹80,000 - ₹1,20,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA", "MCA"]
    },

    // 🔹 Goldman Sachs
    {
        id: 4,
        title: "Summer Analyst Intern",
        company: "Goldman Sachs",
        location: "Bangalore, Mumbai",
        category: "Finance",
        type: "Internship",
        link: "https://www.goldmansachs.com/careers/students/programs/india/summer-analyst-program.html",
        description: "Investment banking, risk management, and financial analysis roles.",
        stipend: "₹1,00,000 - ₹1,40,000/month",
        eligibility: ["B.Tech", "MBA", "BBA", "B.Com"]
    },

    // 🔹 McKinsey & Company
    {
        id: 5,
        title: "Business Analyst Intern",
        company: "McKinsey & Company",
        location: "Delhi, Mumbai, Bangalore",
        category: "Management",
        type: "Internship",
        link: "https://www.mckinsey.com/careers/students",
        description: "Work on strategic business problems for global clients.",
        stipend: "₹1,20,000 - ₹1,80,000/month",
        eligibility: ["MBA", "B.Tech", "BBA"]
    },

    // 🔹 Intel
    {
        id: 6,
        title: "Hardware Engineering Intern",
        company: "Intel",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://jobs.intel.com/en/job/-/-/599/58667827552",
        description: "Work on processor design, validation, and hardware development.",
        stipend: "₹70,000 - ₹1,00,000/month",
        eligibility: ["B.Tech ECE", "B.Tech CSE", "M.Tech"]
    },

    // 🔹 Adobe
    {
        id: 7,
        title: "Product Development Intern",
        company: "Adobe",
        location: "Noida, Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://careers.adobe.com/us/en/job/R140915/Software-Development-Intern",
        description: "Work on Creative Cloud products and digital experience solutions.",
        stipend: "₹85,000 - ₹1,10,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA", "MCA"]
    },

    // 🔹 JP Morgan
    {
        id: 8,
        title: "Quantitative Research Intern",
        company: "JP Morgan",
        location: "Mumbai, Bangalore",
        category: "Finance",
        type: "Internship",
        link: "https://jpmc.recsolu.com/external/requisitions/9RrXHf0G7hXc8nX_9RrXHf0G7hXc8nX",
        description: "Develop quantitative models for trading and risk management.",
        stipend: "₹95,000 - ₹1,30,000/month",
        eligibility: ["B.Tech", "MBA", "BBA"]
    },

    // 🔹 IBM
    {
        id: 9,
        title: "Software Developer Intern",
        company: "IBM",
        location: "Bangalore, Pune",
        category: "IT",
        type: "Internship",
        link: "https://www.ibm.com/careers/us-en/",
        description: "Work on AI, cloud, and enterprise software solutions.",
        stipend: "₹60,000 - ₹90,000/month",
        eligibility: ["B.Tech", "BCA", "MCA"]
    },

    // 🔹 Deloitte
    {
        id: 10,
        title: "Business Technology Analyst Intern",
        company: "Deloitte",
        location: "Multiple Locations",
        category: "Management",
        type: "Internship",
        link: "https://www2.deloitte.com/us/en/careers/students.html",
        description: "Technology consulting and digital transformation projects.",
        stipend: "₹50,000 - ₹80,000/month",
        eligibility: ["B.Tech", "MBA", "BBA", "BCA"]
    },

    // 🔹 Accenture
    {
        id: 11,
        title: "Advanced Technology Intern",
        company: "Accenture",
        location: "Multiple Locations",
        category: "IT",
        type: "Internship",
        link: "https://www.accenture.com/in-en/careers/students",
        description: "Work on emerging technologies and digital solutions.",
        stipend: "₹45,000 - ₹70,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc IT"]
    },

    // 🔹 TCS
    {
        id: 12,
        title: "TCS Ignite Intern",
        company: "Tata Consultancy Services",
        location: "Pan India",
        category: "IT",
        type: "Internship",
        link: "https://www.tcs.com/careers/students",
        description: "Comprehensive training and project work in IT services.",
        stipend: "₹30,000 - ₹50,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc CS"]
    },

    // 🔹 Infosys
    {
        id: 13,
        title: "Infosys Springboard Intern",
        company: "Infosys",
        location: "Pan India",
        category: "IT",
        type: "Internship",
        link: "https://www.infosys.com/careers/graduates.html",
        description: "Software development and IT consulting projects.",
        stipend: "₹35,000 - ₹55,000/month",
        eligibility: ["B.Tech", "BCA", "MCA"]
    },

    // 🔹 Wipro
    {
        id: 14,
        title: "Wipro Turbo Intern",
        company: "Wipro",
        location: "Pan India",
        category: "IT",
        type: "Internship",
        link: "https://careers.wipro.com/careers-home/",
        description: "Digital transformation and IT infrastructure projects.",
        stipend: "₹32,000 - ₹48,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc IT"]
    },

    // 🔹 HCL
    {
        id: 15,
        title: "HCL TechBee Intern",
        company: "HCL Technologies",
        location: "Multiple Locations",
        category: "IT",
        type: "Internship",
        link: "https://www.hcltech.com/careers/students",
        description: "IT services and software development training program.",
        stipend: "₹28,000 - ₹45,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc CS"]
    },

    // 🔹 Capgemini
    {
        id: 16,
        title: "GET Program Intern",
        company: "Capgemini",
        location: "Multiple Locations",
        category: "IT",
        type: "Internship",
        link: "https://www.capgemini.com/in-en/careers/students/",
        description: "Graduate engineer training with hands-on projects.",
        stipend: "₹40,000 - ₹60,000/month",
        eligibility: ["B.Tech", "BCA", "MCA"]
    },

    // 🔹 Cognizant
    {
        id: 17,
        title: "Programmer Analyst Intern",
        company: "Cognizant",
        location: "Multiple Locations",
        category: "IT",
        type: "Internship",
        link: "https://careers.cognizant.com/global-en/students",
        description: "Software development and digital business solutions.",
        stipend: "₹42,000 - ₹65,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc IT"]
    },

    // 🔹 Oracle
    {
        id: 18,
        title: "Software Engineer Intern",
        company: "Oracle",
        location: "Bangalore, Hyderabad",
        category: "IT",
        type: "Internship",
        link: "https://eeho.fa.us.oracle.com/OA_HTML/OA.jsp?OAFunc=IRC_VIS_VAC_DISPLAY&OAMC=/ORACLE/ERC/INT/CX/CX_2024&p_svid=115287&p_spid=5697823",
        description: "Database technologies and cloud infrastructure development.",
        stipend: "₹75,000 - ₹1,05,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 VMware
    {
        id: 19,
        title: "R&D Intern",
        company: "VMware",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://careers.vmware.com/main/jobs/R2313742?lang=en-us",
        description: "Cloud infrastructure and virtualization technologies.",
        stipend: "₹80,000 - ₹1,10,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 Cisco
    {
        id: 20,
        title: "Engineering Intern",
        company: "Cisco",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://jobs.cisco.com/jobs/ProjectDetail/Software-Engineer-Intern-India-UHR/1378405",
        description: "Networking technologies and cybersecurity solutions.",
        stipend: "₹70,000 - ₹95,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 Morgan Stanley
    {
        id: 21,
        title: "Technology Analyst Intern",
        company: "Morgan Stanley",
        location: "Mumbai",
        category: "Finance",
        type: "Internship",
        link: "https://www.morganstanley.com/people-opportunities/students-graduates/technology-roles",
        description: "Financial technology and quantitative systems development.",
        stipend: "₹90,000 - ₹1,25,000/month",
        eligibility: ["B.Tech", "MBA", "BBA"]
    },

    // 🔹 Barclays
    {
        id: 22,
        title: "Technology Summer Analyst",
        company: "Barclays",
        location: "Pune",
        category: "Finance",
        type: "Internship",
        link: "https://search.jobs.barclays/technology-summer-analyst-2024-pune",
        description: "Banking technology and financial software development.",
        stipend: "₹65,000 - ₹90,000/month",
        eligibility: ["B.Tech", "BCA", "BBA"]
    },

    // 🔹 Deutsche Bank
    {
        id: 23,
        title: "Technology Intern",
        company: "Deutsche Bank",
        location: "Pune, Bangalore",
        category: "Finance",
        type: "Internship",
        link: "https://careers.db.com/professionals/search-roles/technology",
        description: "Investment banking technology and analytics platforms.",
        stipend: "₹70,000 - ₹1,00,000/month",
        eligibility: ["B.Tech", "MBA", "BBA"]
    },

    // 🔹 Salesforce
    {
        id: 24,
        title: "Futureforce Tech Intern",
        company: "Salesforce",
        location: "Hyderabad, Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://salesforce.wd1.myworkdayjobs.com/en-US/Futureforce_Internships/",
        description: "CRM platform development and cloud technologies.",
        stipend: "₹85,000 - ₹1,15,000/month",
        eligibility: ["B.Tech", "BCA", "MCA"]
    },

    // 🔹 ServiceNow
    {
        id: 25,
        title: "Software Engineering Intern",
        company: "ServiceNow",
        location: "Hyderabad",
        category: "IT",
        type: "Internship",
        link: "https://careers.servicenow.com/careers/jobs/743999957850111EXT",
        description: "Digital workflow and enterprise cloud platform development.",
        stipend: "₹75,000 - ₹1,05,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 Atlassian
    {
        id: 26,
        title: "Product Development Intern",
        company: "Atlassian",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://www.atlassian.com/company/careers/jobs/2435950",
        description: "Work on Jira, Confluence, and other collaboration tools.",
        stipend: "₹95,000 - ₹1,30,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 Uber
    {
        id: 27,
        title: "Software Engineer Intern",
        company: "Uber",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://university-uber.icims.com/jobs/121665/job",
        description: "Mobility and delivery platform technology development.",
        stipend: "₹1,00,000 - ₹1,40,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 Ola
    {
        id: 28,
        title: "Tech Intern",
        company: "Ola",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://ola.skillate.com/jobs/57638",
        description: "Electric mobility and transportation technology.",
        stipend: "₹60,000 - ₹85,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc IT"]
    },

    // 🔹 Swiggy
    {
        id: 29,
        title: "Engineering Intern",
        company: "Swiggy",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://careers.swiggy.com/#/careers/home",
        description: "Food delivery technology and logistics optimization.",
        stipend: "₹55,000 - ₹80,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc CS"]
    },

    // 🔹 Zomato
    {
        id: 30,
        title: "Product Management Intern",
        company: "Zomato",
        location: "Gurgaon",
        category: "Management",
        type: "Internship",
        link: "https://www.zomato.com/careers",
        description: "Product strategy and user experience optimization.",
        stipend: "₹50,000 - ₹75,000/month",
        eligibility: ["MBA", "B.Tech", "BBA"]
    },

    // 🔹 Flipkart
    {
        id: 31,
        title: "Flipkart Runway Intern",
        company: "Flipkart",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://www.flipkartcareers.com/#!/joblist",
        description: "E-commerce technology and supply chain solutions.",
        stipend: "₹70,000 - ₹1,00,000/month",
        eligibility: ["B.Tech", "MBA", "BBA"]
    },

    // 🔹 Amazon ML School
    {
        id: 32,
        title: "ML Summer School Intern",
        company: "Amazon",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://www.amazon.science/academic-programs",
        description: "Machine learning and AI research projects.",
        stipend: "₹90,000 - ₹1,20,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 Microsoft Engage
    {
        id: 33,
        title: "Microsoft Engage Mentorship",
        company: "Microsoft",
        location: "Remote",
        category: "IT",
        type: "Internship",
        link: "https://careers.microsoft.com/students/us/en/ind-engage",
        description: "Mentorship program with technical projects and guidance.",
        stipend: "₹40,000 - ₹60,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc CS"]
    },

    // 🔹 Google STEP
    {
        id: 34,
        title: "STEP Intern",
        company: "Google",
        location: "Hyderabad",
        category: "IT",
        type: "Internship",
        link: "https://buildyourfuture.withgoogle.com/programs/step/",
        description: "Software engineering training for early-year students.",
        stipend: "₹65,000 - ₹85,000/month",
        eligibility: ["B.Tech 1st/2nd Year", "BCA 2nd Year"]
    },

    // 🔹 Twitter
    {
        id: 35,
        title: "Engineering Intern",
        company: "Twitter",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://careers.twitter.com/",
        description: "Social media platform development and features.",
        stipend: "₹95,000 - ₹1,25,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 LinkedIn
    {
        id: 36,
        title: "Software Engineering Intern",
        company: "LinkedIn",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://careers.linkedin.com/",
        description: "Professional networking platform development.",
        stipend: "₹1,00,000 - ₹1,35,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 Meta
    {
        id: 37,
        title: "Software Engineer Intern",
        company: "Meta",
        location: "Remote",
        category: "IT",
        type: "Internship",
        link: "https://www.metacareers.com/careerprograms/students/",
        description: "Social media and virtual reality technologies.",
        stipend: "₹1,10,000 - ₹1,50,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 Netflix
    {
        id: 38,
        title: "Product Science Intern",
        company: "Netflix",
        location: "Remote",
        category: "IT",
        type: "Internship",
        link: "https://jobs.netflix.com/search?q=intern",
        description: "Content recommendation and streaming technology.",
        stipend: "₹1,20,000 - ₹1,60,000/month",
        eligibility: ["B.Tech", "MBA", "BBA"]
    },

    // 🔹 Apple
    {
        id: 39,
        title: "IS&T Intern",
        company: "Apple",
        location: "Hyderabad",
        category: "IT",
        type: "Internship",
        link: "https://www.apple.com/careers/in/",
        description: "Information systems and technology infrastructure.",
        stipend: "₹85,000 - ₹1,15,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc IT"]
    },

    // 🔹 Samsung
    {
        id: 40,
        title: "Samsung PRISM Intern",
        company: "Samsung",
        location: "Noida, Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://www.samsung.com/in/aboutsamsung/careers/students/",
        description: "Research and innovation in mobile technologies.",
        stipend: "₹50,000 - ₹75,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 Qualcomm
    {
        id: 41,
        title: "Hardware Intern",
        company: "Qualcomm",
        location: "Hyderabad",
        category: "IT",
        type: "Internship",
        link: "https://qualcomm.wd5.myworkdayjobs.com/en-US/External/",
        description: "Chip design and wireless communication technologies.",
        stipend: "₹70,000 - ₹95,000/month",
        eligibility: ["B.Tech ECE", "B.Tech CSE", "M.Tech"]
    },

    // 🔹 Nvidia
    {
        id: 42,
        title: "Deep Learning Intern",
        company: "Nvidia",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/",
        description: "AI research and GPU computing technologies.",
        stipend: "₹90,000 - ₹1,20,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 Intel AI
    {
        id: 43,
        title: "AI Research Intern",
        company: "Intel",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://jobs.intel.com/en/search-jobs/india",
        description: "Artificial intelligence and machine learning research.",
        stipend: "₹80,000 - ₹1,10,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 AMD
    {
        id: 44,
        title: "Silicon Design Intern",
        company: "AMD",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://amd.eightfold.ai/careers/",
        description: "Processor architecture and chip design.",
        stipend: "₹75,000 - ₹1,00,000/month",
        eligibility: ["B.Tech ECE", "M.Tech VLSI"]
    },

    // 🔹 Broadcom
    {
        id: 45,
        title: "ASIC Design Intern",
        company: "Broadcom",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://careers.broadcom.com/global/en/students",
        description: "Semiconductor design and verification.",
        stipend: "₹65,000 - ₹90,000/month",
        eligibility: ["B.Tech ECE", "M.Tech"]
    },

    // 🔹 Micron
    {
        id: 46,
        title: "Memory Design Intern",
        company: "Micron",
        location: "Hyderabad",
        category: "IT",
        type: "Internship",
        link: "https://micron.eightfold.ai/careers/",
        description: "Memory technology and storage solutions.",
        stipend: "₹60,000 - ₹85,000/month",
        eligibility: ["B.Tech", "M.Tech"]
    },

    // 🔹 Applied Materials
    {
        id: 47,
        title: "Process Engineer Intern",
        company: "Applied Materials",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://amat.eightfold.ai/careers/",
        description: "Semiconductor manufacturing equipment.",
        stipend: "₹55,000 - ₹80,000/month",
        eligibility: ["B.Tech", "M.Tech"]
    },

    // 🔹 Lam Research
    {
        id: 48,
        title: "Equipment Engineer Intern",
        company: "Lam Research",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://lamresearch.wd1.myworkdayjobs.com/en-US/LamCareers/",
        description: "Wafer fabrication equipment technology.",
        stipend: "₹58,000 - ₹82,000/month",
        eligibility: ["B.Tech", "M.Tech"]
    },

    // 🔹 KPMG
    {
        id: 49,
        title: "Advisory Intern",
        company: "KPMG",
        location: "Multiple Locations",
        category: "Finance",
        type: "Internship",
        link: "https://home.kpmg/in/en/home/careers/students.html",
        description: "Risk consulting and financial advisory services.",
        stipend: "₹45,000 - ₹65,000/month",
        eligibility: ["MBA", "BBA", "B.Com"]
    },

    // 🔹 EY
    {
        id: 50,
        title: "Technology Risk Intern",
        company: "EY",
        location: "Multiple Locations",
        category: "Finance",
        type: "Internship",
        link: "https://www.ey.com/en_in/careers/students",
        description: "IT audit and cybersecurity risk assessment.",
        stipend: "₹42,000 - ₹62,000/month",
        eligibility: ["B.Tech", "MBA", "BBA"]
    },

    // 🔹 PwC
    {
        id: 51,
        title: "Consulting Intern",
        company: "PwC",
        location: "Multiple Locations",
        category: "Management",
        type: "Internship",
        link: "https://www.pwc.in/careers/students.html",
        description: "Business consulting and strategy development.",
        stipend: "₹48,000 - ₹70,000/month",
        eligibility: ["MBA", "B.Tech", "BBA"]
    },

    // 🔹 BCG
    {
        id: 52,
        title: "Consulting Intern",
        company: "Boston Consulting Group",
        location: "Delhi, Mumbai",
        category: "Management",
        type: "Internship",
        link: "https://careers.bcg.com/students",
        description: "Management consulting and business strategy.",
        stipend: "₹1,10,000 - ₹1,50,000/month",
        eligibility: ["MBA", "B.Tech", "BBA"]
    },

    // 🔹 Bain & Company
    {
        id: 53,
        title: "Associate Consultant Intern",
        company: "Bain & Company",
        location: "Mumbai, Delhi",
        category: "Management",
        type: "Internship",
        link: "https://www.bain.com/careers/students/",
        description: "Strategy consulting and private equity work.",
        stipend: "₹1,05,000 - ₹1,45,000/month",
        eligibility: ["MBA", "B.Tech", "BBA"]
    },

    // 🔹 Kearney
    {
        id: 54,
        title: "Business Analyst Intern",
        company: "Kearney",
        location: "Mumbai, Delhi",
        category: "Management",
        type: "Internship",
        link: "https://www.kearney.com/careers/students",
        description: "Operations and strategic management consulting.",
        stipend: "₹95,000 - ₹1,30,000/month",
        eligibility: ["MBA", "B.Tech", "BBA"]
    },

    // 🔹 American Express
    {
        id: 55,
        title: "Technology Intern",
        company: "American Express",
        location: "Gurgaon",
        category: "Finance",
        type: "Internship",
        link: "https://www.americanexpress.com/en-in/careers/students/",
        description: "Payment technology and financial services.",
        stipend: "₹65,000 - ₹90,000/month",
        eligibility: ["B.Tech", "MBA", "BBA"]
    },

    // 🔹 Mastercard
    {
        id: 56,
        title: "Software Development Intern",
        company: "Mastercard",
        location: "Pune",
        category: "Finance",
        type: "Internship",
        link: "https://www.mastercard.us/en-us/vision/who-we-are/careers.html",
        description: "Payment processing and fintech solutions.",
        stipend: "₹70,000 - ₹95,000/month",
        eligibility: ["B.Tech", "BCA", "BBA"]
    },

    // 🔹 Visa
    {
        id: 57,
        title: "Technology Intern",
        company: "Visa",
        location: "Bangalore",
        category: "Finance",
        type: "Internship",
        link: "https://www.visa.co.in/careers.html",
        description: "Digital payments and cybersecurity technologies.",
        stipend: "₹75,000 - ₹1,00,000/month",
        eligibility: ["B.Tech", "MBA", "BBA"]
    },

    // 🔹 PayPal
    {
        id: 58,
        title: "Product Intern",
        company: "PayPal",
        location: "Chennai",
        category: "Finance",
        type: "Internship",
        link: "https://www.paypal.com/us/webapps/mpp/jobs",
        description: "Digital wallet and payment product development.",
        stipend: "₹68,000 - ₹92,000/month",
        eligibility: ["MBA", "B.Tech", "BBA"]
    },

    // 🔹 Razorpay
    {
        id: 59,
        title: "Engineering Intern",
        company: "Razorpay",
        location: "Bangalore",
        category: "Finance",
        type: "Internship",
        link: "https://razorpay.com/jobs/",
        description: "Fintech platform and payment gateway development.",
        stipend: "₹50,000 - ₹75,000/month",
        eligibility: ["B.Tech", "BCA", "BBA"]
    },

    // 🔹 Paytm
    {
        id: 60,
        title: "Product Management Intern",
        company: "Paytm",
        location: "Noida",
        category: "Finance",
        type: "Internship",
        link: "https://paytm.com/careers/",
        description: "Digital payments and financial services products.",
        stipend: "₹45,000 - ₹65,000/month",
        eligibility: ["MBA", "B.Tech", "BBA"]
    },

    // 🔹 PhonePe
    {
        id: 61,
        title: "Software Development Intern",
        company: "PhonePe",
        location: "Bangalore",
        category: "Finance",
        type: "Internship",
        link: "https://www.phonepe.com/careers/",
        description: "UPI payments and financial technology.",
        stipend: "₹55,000 - ₹80,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc IT"]
    },

    // 🔹 CRED
    {
        id: 62,
        title: "Product Design Intern",
        company: "CRED",
        location: "Bangalore",
        category: "Design",
        type: "Internship",
        link: "https://cred.club/careers/",
        description: "UX/UI design for credit card rewards platform.",
        stipend: "₹40,000 - ₹60,000/month",
        eligibility: ["B.Des", "B.Tech", "BCA"]
    },

    // 🔹 Byju's
    {
        id: 63,
        title: "Business Development Intern",
        company: "Byju's",
        location: "Bangalore",
        category: "Marketing",
        type: "Internship",
        link: "https://byjus.com/careers/",
        description: "Edtech sales and marketing operations.",
        stipend: "₹35,000 - ₹50,000/month",
        eligibility: ["MBA", "BBA", "B.Tech"]
    },

    // 🔹 Unacademy
    {
        id: 64,
        title: "Content Strategy Intern",
        company: "Unacademy",
        location: "Bangalore",
        category: "Marketing",
        type: "Internship",
        link: "https://unacademy.com/careers/",
        description: "Educational content planning and creation.",
        stipend: "₹32,000 - ₹48,000/month",
        eligibility: ["MBA", "BBA", "B.Tech"]
    },

    // 🔹 Vedantu
    {
        id: 65,
        title: "Product Intern",
        company: "Vedantu",
        location: "Bangalore",
        category: "Management",
        type: "Internship",
        link: "https://www.vedantu.com/careers/",
        description: "Live learning platform product management.",
        stipend: "₹38,000 - ₹55,000/month",
        eligibility: ["MBA", "B.Tech", "BBA"]
    },

    // 🔹 upGrad
    {
        id: 66,
        title: "Marketing Intern",
        company: "upGrad",
        location: "Mumbai",
        category: "Marketing",
        type: "Internship",
        link: "https://www.upgrad.com/us/careers/",
        description: "Digital marketing and student acquisition.",
        stipend: "₹30,000 - ₹45,000/month",
        eligibility: ["MBA", "BBA", "BMM"]
    },

    // 🔹 OYO
    {
        id: 67,
        title: "Operations Intern",
        company: "OYO",
        location: "Gurgaon",
        category: "Management",
        type: "Internship",
        link: "https://www.oyorooms.com/careers/",
        description: "Hospitality operations and process optimization.",
        stipend: "₹28,000 - ₹42,000/month",
        eligibility: ["MBA", "BBA", "BHM"]
    },

    // 🔹 MakeMyTrip
    {
        id: 68,
        title: "Product Management Intern",
        company: "MakeMyTrip",
        location: "Gurgaon",
        category: "Management",
        type: "Internship",
        link: "https://careers.makemytrip.com/",
        description: "Travel technology and booking platform.",
        stipend: "₹40,000 - ₹60,000/month",
        eligibility: ["MBA", "B.Tech", "BBA"]
    },

    // 🔹 Ibibo Group
    {
        id: 69,
        title: "Software Development Intern",
        company: "Ibibo Group",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://www.goibibo.com/careers/",
        description: "Travel technology and hotel booking systems.",
        stipend: "₹45,000 - ₹65,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc IT"]
    },

    // 🔹 Nykaa
    {
        id: 70,
        title: "E-commerce Intern",
        company: "Nykaa",
        location: "Mumbai",
        category: "Marketing",
        type: "Internship",
        link: "https://www.nykaa.com/careers/",
        description: "Beauty e-commerce platform operations.",
        stipend: "₹25,000 - ₹40,000/month",
        eligibility: ["MBA", "BBA", "B.Com"]
    },

    // 🔹 Myntra
    {
        id: 71,
        title: "Fashion Technology Intern",
        company: "Myntra",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://www.myntra.com/careers/",
        description: "Fashion e-commerce and recommendation systems.",
        stipend: "₹35,000 - ₹55,000/month",
        eligibility: ["B.Tech", "BCA", "B.Des"]
    },

    // 🔹 Lenskart
    {
        id: 72,
        title: "Product Development Intern",
        company: "Lenskart",
        location: "Gurgaon",
        category: "Management",
        type: "Internship",
        link: "https://www.lenskart.com/careers/",
        description: "Eyewear technology and retail operations.",
        stipend: "₹30,000 - ₹45,000/month",
        eligibility: ["MBA", "B.Tech", "BBA"]
    },

    // 🔹 PharmEasy
    {
        id: 73,
        title: "Operations Intern",
        company: "PharmEasy",
        location: "Mumbai",
        category: "Management",
        type: "Internship",
        link: "https://pharmeasy.in/careers/",
        description: "Healthcare delivery and logistics operations.",
        stipend: "₹28,000 - ₹42,000/month",
        eligibility: ["MBA", "BBA", "B.Pharma"]
    },

    // 🔹 1MG
    {
        id: 74,
        title: "Business Analyst Intern",
        company: "1MG",
        location: "Gurgaon",
        category: "Management",
        type: "Internship",
        link: "https://www.1mg.com/careers/",
        description: "Healthcare analytics and business intelligence.",
        stipend: "₹32,000 - ₹48,000/month",
        eligibility: ["MBA", "B.Tech", "BBA"]
    },

    // 🔹 CureFit
    {
        id: 75,
        title: "Fitness Tech Intern",
        company: "CureFit",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://www.cure.fit/careers/",
        description: "Health and fitness technology platform.",
        stipend: "₹35,000 - ₹52,000/month",
        eligibility: ["B.Tech", "BCA", "BBA"]
    },

    // 🔹 ShareChat
    {
        id: 76,
        title: "Software Engineer Intern",
        company: "ShareChat",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://sharechat.com/careers/",
        description: "Social media platform and content moderation.",
        stipend: "₹50,000 - ₹75,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc IT"]
    },

    // 🔹 Dailyhunt
    {
        id: 77,
        title: "Data Science Intern",
        company: "Dailyhunt",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://careers.dailyhunt.com/",
        description: "Content recommendation and personalization.",
        stipend: "₹45,000 - ₹68,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 InMobi
    {
        id: 78,
        title: "Ad Tech Intern",
        company: "InMobi",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://www.inmobi.com/company/careers/",
        description: "Mobile advertising technology and analytics.",
        stipend: "₹55,000 - ₹80,000/month",
        eligibility: ["B.Tech", "MBA", "BBA"]
    },

    // 🔹 Zoho
    {
        id: 79,
        title: "Software Developer Intern",
        company: "Zoho",
        location: "Chennai",
        category: "IT",
        type: "Internship",
        link: "https://www.zoho.com/careers/",
        description: "Business software and SaaS platform development.",
        stipend: "₹40,000 - ₹60,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc CS"]
    },

    // 🔹 Freshworks
    {
        id: 80,
        title: "Product Engineering Intern",
        company: "Freshworks",
        location: "Chennai",
        category: "IT",
        type: "Internship",
        link: "https://www.freshworks.com/company/careers/",
        description: "Customer engagement software development.",
        stipend: "₹48,000 - ₹70,000/month",
        eligibility: ["B.Tech", "BCA", "MCA"]
    },

    // 🔹 Chargebee
    {
        id: 81,
        title: "Full Stack Intern",
        company: "Chargebee",
        location: "Chennai",
        category: "IT",
        type: "Internship",
        link: "https://www.chargebee.com/careers/",
        description: "Subscription billing and revenue management.",
        stipend: "₹42,000 - ₹65,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc IT"]
    },

    // 🔹 BrowserStack
    {
        id: 82,
        title: "DevOps Intern",
        company: "BrowserStack",
        location: "Mumbai",
        category: "IT",
        type: "Internship",
        link: "https://www.browserstack.com/careers/",
        description: "Cloud testing infrastructure and automation.",
        stipend: "₹60,000 - ₹85,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc CS"]
    },

    // 🔹 Postman
    {
        id: 83,
        title: "API Platform Intern",
        company: "Postman",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://www.postman.com/careers/",
        description: "API development and platform features.",
        stipend: "₹65,000 - ₹90,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc IT"]
    },

    // 🔹 Hasura
    {
        id: 84,
        title: "Backend Engineer Intern",
        company: "Hasura",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://hasura.io/careers/",
        description: "GraphQL engine and backend services.",
        stipend: "₹55,000 - ₹78,000/month",
        eligibility: ["B.Tech", "BCA", "MCA"]
    },

    // 🔹 Razorpay (Engineering)
    {
        id: 85,
        title: "Backend Engineering Intern",
        company: "Razorpay",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://razorpay.com/jobs/",
        description: "Payment processing and fintech backend systems.",
        stipend: "₹52,000 - ₹75,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc CS"]
    },

    // 🔹 Dream11
    {
        id: 86,
        title: "Game Development Intern",
        company: "Dream11",
        location: "Mumbai",
        category: "IT",
        type: "Internship",
        link: "https://www.dreamsports.group/careers/",
        description: "Fantasy sports platform and game features.",
        stipend: "₹45,000 - ₹68,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc IT"]
    },

    // 🔹 MPL
    {
        id: 87,
        title: "Mobile Development Intern",
        company: "MPL",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://www.mpl.live/careers/",
        description: "Mobile gaming platform and app development.",
        stipend: "₹48,000 - ₹72,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc CS"]
    },

    // 🔹 Games24x7
    {
        id: 88,
        title: "Data Analyst Intern",
        company: "Games24x7",
        location: "Mumbai",
        category: "IT",
        type: "Internship",
        link: "https://www.games24x7.com/careers/",
        description: "Gaming analytics and user behavior analysis.",
        stipend: "₹40,000 - ₹60,000/month",
        eligibility: ["B.Tech", "BCA", "BBA"]
    },

    // 🔹 Urban Company
    {
        id: 89,
        title: "Product Operations Intern",
        company: "Urban Company",
        location: "Gurgaon",
        category: "Management",
        type: "Internship",
        link: "https://urbancompany.com/careers/",
        description: "Service marketplace operations and quality.",
        stipend: "₹35,000 - ₹55,000/month",
        eligibility: ["MBA", "BBA", "B.Tech"]
    },

    // 🔹 BigBasket
    {
        id: 90,
        title: "Supply Chain Intern",
        company: "BigBasket",
        location: "Bangalore",
        category: "Management",
        type: "Internship",
        link: "https://www.bigbasket.com/careers/",
        description: "Grocery delivery logistics and operations.",
        stipend: "₹30,000 - ₹48,000/month",
        eligibility: ["MBA", "BBA", "B.Tech"]
    },

    // 🔹 Grofers
    {
        id: 91,
        title: "Operations Intern",
        company: "Grofers",
        location: "Gurgaon",
        category: "Management",
        type: "Internship",
        link: "https://grofers.com/careers/",
        description: "Quick commerce and delivery operations.",
        stipend: "₹28,000 - ₹45,000/month",
        eligibility: ["MBA", "BBA", "B.Tech"]
    },

    // 🔹 Rebel Foods
    {
        id: 92,
        title: "Kitchen Tech Intern",
        company: "Rebel Foods",
        location: "Mumbai",
        category: "IT",
        type: "Internship",
        link: "https://careers.rebelfoods.co/",
        description: "Cloud kitchen technology and automation.",
        stipend: "₹32,000 - ₹50,000/month",
        eligibility: ["B.Tech", "BCA", "BHM"]
    },

    // 🔹 Zomato (Engineering)
    {
        id: 93,
        title: "Backend Engineer Intern",
        company: "Zomato",
        location: "Gurgaon",
        category: "IT",
        type: "Internship",
        link: "https://www.zomato.com/careers/",
        description: "Food delivery platform backend services.",
        stipend: "₹45,000 - ₹65,000/month",
        eligibility: ["B.Tech", "BCA", "B.Sc CS"]
    },

    // 🔹 Swiggy (Tech)
    {
        id: 94,
        title: "Machine Learning Intern",
        company: "Swiggy",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://careers.swiggy.com/",
        description: "Delivery optimization and recommendation systems.",
        stipend: "₹50,000 - ₹75,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 Ola (Electric)
    {
        id: 95,
        title: "EV Technology Intern",
        company: "Ola Electric",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://ola.skillate.com/jobs/",
        description: "Electric vehicle technology and software.",
        stipend: "₹55,000 - ₹80,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 Ather Energy
    {
        id: 96,
        title: "Embedded Systems Intern",
        company: "Ather Energy",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://www.atherenergy.com/careers/",
        description: "Electric scooter firmware and controls.",
        stipend: "₹48,000 - ₹70,000/month",
        eligibility: ["B.Tech ECE", "B.Tech CSE"]
    },

    // 🔹 Tesla
    {
        id: 97,
        title: "Autopilot Intern",
        company: "Tesla",
        location: "Remote",
        category: "IT",
        type: "Internship",
        link: "https://www.tesla.com/careers/search/",
        description: "Autonomous driving technology and AI.",
        stipend: "₹85,000 - ₹1,20,000/month",
        eligibility: ["B.Tech", "M.Tech", "BCA"]
    },

    // 🔹 NVIDIA (AI)
    {
        id: 98,
        title: "AI Research Intern",
        company: "NVIDIA",
        location: "Bangalore",
        category: "IT",
        type: "Internship",
        link: "https://www.nvidia.com/en-in/about-nvidia/careers/",
        description: "Deep learning and computer vision research.",
        stipend: "₹95,000 - ₹1,30,000/month",
        eligibility: ["B.Tech", "M.Tech", "PhD"]
    },

    // 🔹 OpenAI
    {
        id: 99,
        title: "Research Engineer Intern",
        company: "OpenAI",
        location: "Remote",
        category: "IT",
        type: "Internship",
        link: "https://openai.com/careers/",
        description: "Large language models and AI safety.",
        stipend: "₹1,20,000 - ₹1,60,000/month",
        eligibility: ["B.Tech", "M.Tech", "PhD"]
    },

    // 🔹 DeepMind
    {
        id: 100,
        title: "AI Safety Intern",
        company: "DeepMind",
        location: "Remote",
        category: "IT",
        type: "Internship",
        link: "https://deepmind.com/careers/",
        description: "AI alignment and safety research.",
        stipend: "₹1,10,000 - ₹1,50,000/month",
        eligibility: ["B.Tech", "M.Tech", "PhD"]
    }
];

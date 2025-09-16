import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Briefcase, MapPin, Filter, ExternalLink } from "lucide-react";
import { apiRequest } from "../utils/api";

const JobPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Added Viziopath Intern and Management as categories
  const categories = ["All", "IT", "Viziopath Intern", "Marketing", "Finance", "Design", "HR", "Management"];

  // ✅ Job type from backend
  type Job = {
    id: number;
    title: string;
    company: string;
    location: string;
    category: string;
    type: string;
    link: string;
    description: string;
  };

  const [apiJobs, setApiJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ✅ Jobs & Internships List (fallback if API is unavailable)
  const fallbackJobs: Job[] = [
    // 🌐 Viziopath Internships
    {
      id: 101,
      title: "Digital Marketing Intern",
      company: "Viziopath",
      location: "Remote",
      category: "Viziopath Intern",
      type: "Internship",
      link: "https://viziopath.com/apply/digital-marketing",
      description: "Work on SEO, social media management, and content creation to build digital campaigns for global clients."
    },
    {
      id: 103,
      title: "Engineering Intern",
      company: "Viziopath",
      location: "Remote",
      category: "Viziopath Intern",
      type: "Internship",
      link: "https://viziopath.com/apply/engineering-intern",
      description: "Gain hands-on experience across Software, Mechanical, Electrical, Civil, and Data Engineering by contributing to real-world projects in design, development, testing, and research. Work with cross-functional teams, learn industry tools, and build problem-solving skills through practical innovation."
    },
    {
      id: 102,
      title: "Business Analyst Intern",
      company: "Viziopath",
      location: "Remote / Gurgaon, India",
      category: "Viziopath Intern",
      type: "Internship",
      link: "https://viziopath.com/apply/business-analyst",
      description: "Assist in market research, competitor analysis, and preparing client presentations with actionable insights."
    },
    {
      id: 103,
      title: "Graphic Design Intern",
      company: "Viziopath",
      location: "Remote",
      category: "Viziopath Intern",
      type: "Internship",
      link: "https://viziopath.com/apply/graphic-design",
      description: "Design creative posters, social media graphics, and branding materials for ongoing campaigns."
    },
    {
      id: 103,
      title: "HR Intern",
      company: "Viziopath",
      location: "Remote",
      category: "Viziopath Intern",
      type: "Internship",
      link: "https://viziopath.com/apply/hr-intern",
      description: "Assist in recruitment, employee engagement, and HR policy implementation."
    },
    {
      id: 104,
      title: "Finance Intern",
      company: "Viziopath",
      location: "Remote",
      category: "Viziopath Intern",
      type: "Internship",
      link: "https://viziopath.com/apply/finance-intern",
      description: "Support financial analysis, reporting, and client onboarding documentation."
    },

    // 🔹 Existing Jobs (your previous code)
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "NVIDIA",
      location: "Shangai",
      category: "IT",
      type: "Full-Time",
      link: "https://www.citadel.com/careers/details/software-engineer-intern-asia/",
      description: "Work on scalable web applications with React, Node.js, and cloud tech."
    },
    {
      id: 2,
      title: "Site Reliability Engineer - Intern",
      company: "Citadel",
      location: "Singapore",
      category: "IT",
      type: "Internship",
      link: "https://naukri.com/marketing-job-link",
      description: "Support system reliability by assisting with monitoring, automation, and troubleshooting while learning from senior engineers."
    },
    {
      id: 3,
      title: "Financial Analyst - Intern",
      company: "JP Morgan",
      location: "Mumbai, India",
      category: "Finance",
      type: "Internship",
      link: "https://naukri.com/finance-job-link",
      description: "Analyze financial reports and assist in investment strategies."
    },
    {
      id: 4,
      title: "Engineering Intern",
      company: "Appwrite",
      location: "Remote",
      category: "IT",
      type: "Internship",
      link: "https://www.appwrite.careers/engineering-internship/en",
      description: "Contribute to open-source projects, assist in developing scalable web and mobile solutions, and gain hands-on experience in modern software engineering practices."
    },
    {
      id: 5,
      title: "HR Manager",
      company: "Infosys",
      location: "Hyderabad, India",
      category: "HR",
      type: "Full-Time",
      link: "https://naukri.com/hr-job-link",
      description: "Lead HR operations and employee engagement initiatives."
    },
    {
      id: 6,
      title: "Frontend Engineer",
      company: "Atlan",
      location: "Chennai, India",
      category: "IT",
      type: "Full-Time",
      link: "https://jobs.ashbyhq.com/atlan/24de3528-5486-421b-9282-82260b83e033/application",
      description: "Build scalable frontend applications with React, Vue.js, and modern web technologies."
    },
    {
      id: 7,
      title: "Digital Marketing Specialist",
      company: "4BELL TECHNOLOGY",
      location: "Noida, India",
      category: "Marketing",
      type: "Full-Time",
      link: "https://www.shine.com/jobs/digital-marketing/4bell-technology/17558788",
      description: "Develop SEO, SEM and social media strategies for global campaigns."
    },
    {
      id: 8,
      title: "Accounts Manager",
      company: "KPMG",
      location: "Delhi, India",
      category: "Finance",
      type: "Full-Time",
      link: "https://naukri.com/accounts-job-link",
      description: "Manage client accounts and financial reconciliations."
    },
    {
      id: 9,
      title: "Graphic Designer",
      company: "Atlan",
      location: "Remote",
      category: "Design",
      type: "Internship",
      link: "https://jobs.ashbyhq.com/atlan/24de3528-5486-421b-9282-82260b83e033/application",
      description: "Create engaging graphics, illustrations, and marketing assets."
    },
    {
      id: 10,
      title: "Software Engineer Intern",
      company: "IBM",
      location: "Hyderabad, India",
      category: "IT",
      type: "Full-Time",
      link: "https://ibmglobal.avature.net/en_US/careers/JobDetail?jobId=48508",
      description: "Work on real-world software projects, assist in coding, debugging, and testing applications, and learn best practices in software development under the guidance of IBM engineers."
    },
    {
      id: 11,
      title: "Product Management Intern",
      company: "PW(Physics Wallah)",
      location: "Noida, India",
      category: "IT",
      type: "Full-Time",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdowsqFGCmsqybe6aT-qcPGZdT_LnzDzirzMPHwt5O8oEDD4A/viewform",
      description: "Assist in product research, feature planning, and execution. Collaborate with cross-functional teams to gather insights, define requirements, and improve user experience."
    },
    {
      id: 12,
      title: "Content Strategist",
      company: "Desnor Destination Pvt. Ltd.",
      location: "Delhi, India",
      category: "Marketing",
      type: "Full-Time",
      link: "https://www.shine.com/jobs/content-writer-work-from-home-part-time/desnor-destination-pvt-ltd/17615810",
      description: "Plan and execute digital content campaigns to increase user reach."
    },
    {
      id: 13,
      title: "Investment Banker",
      company: "Goldman Sachs",
      location: "Mumbai, India",
      category: "Finance",
      type: "Full-Time",
      link: "https://naukri.com/investment-job-link",
      description: "Manage corporate investment portfolios and risk analysis."
    },
    {
      id: 14,
      title: "Product Designer",
      company: "Figma",
      location: "Remote",
      category: "Design",
      type: "Full-Time",
      link: "https://naukri.com/product-design-job-link",
      description: "Collaborate with product teams to design user-friendly interfaces."
    },
    {
      id: 15,
      title: "HR Business Partner",
      company: "Cognizant",
      location: "Kolkata, India",
      category: "HR",
      type: "Full-Time",
      link: "https://naukri.com/hr-business-job-link",
      description: "Partner with leadership to align HR strategies with business goals."
    },
    {
      id: 16,
      title: "Software Engineer",
      company: "Cisco",
      location: "Bangalore, India",
      category: "IT",
      type: "Full-Time",
      link: "https://jobs.cisco.com/jobs/ProjectDetail/Software-Engineer-Network-Embedded-Application-Development-Intern-India-UHR/1421663",
      description: "Develop and optimize software solutions while gaining hands-on experience in cloud, networking, and application development."
    },
    {
      id: 17,
      title: "SEO Analyst",
      company: "Kashni",
      location: "Delhi, India",
      category: "Marketing",
      type: "Full-Time",
      link: "https://www.shine.com/jobs/digital-marketing-internship-in-delhi/kashni/17407688",
      description: "Optimize website traffic and rankings using advanced SEO techniques."
    },
    {
      id: 18,
      title: "Finance Executive",
      company: "EY",
      location: "Delhi, India",
      category: "Finance",
      type: "Internship",
      link: "https://naukri.com/finance-executive-job-link",
      description: "Assist in audits, taxation, and financial reporting."
    },
    {
      id: 19,
      title: "Visual Designer",
      company: "Dribbble",
      location: "Remote",
      category: "Design",
      type: "Part-Time",
      link: "https://naukri.com/visual-design-job-link",
      description: "Create visual assets for web, mobile, and print media."
    },
    {
      id: 20,
      title: "Payroll Specialist",
      company: "TCS",
      location: "Pan India",
      category: "HR",
      type: "Full-Time",
      link: "https://on.tcs.com/4ghJTtv",
      description: "Manage payroll operations and compliance across teams."
    },

    // 🚀 Tech Giants & Startups
    {
      id: 21,
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      category: "IT",
      type: "Full-Time",
      link: "https://careers.google.com/jobs/results/",
      description: "Build scalable systems and innovative products used by billions worldwide."
    },
    {
      id: 22,
      title: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      category: "IT",
      type: "Full-Time",
      link: "https://careers.microsoft.com/us/en",
      description: "Lead product strategy and development for enterprise solutions."
    },
    {
      id: 23,
      title: "Data Scientist",
      company: "Amazon",
      location: "Seattle, WA",
      category: "IT",
      type: "Full-Time",
      link: "https://www.amazon.jobs/en/",
      description: "Analyze big data to drive business insights and machine learning models."
    },
    {
      id: 24,
      title: "Frontend Developer",
      company: "Meta",
      location: "Menlo Park, CA",
      category: "IT",
      type: "Full-Time",
      link: "https://www.metacareers.com/",
      description: "Create engaging user interfaces for social media platforms."
    },
    {
      id: 25,
      title: "DevOps Engineer",
      company: "Netflix",
      location: "Los Gatos, CA",
      category: "IT",
      type: "Full-Time",
      link: "https://jobs.netflix.com/",
      description: "Build and maintain cloud infrastructure for streaming services."
    },
    {
      id: 26,
      title: "AI Research Scientist",
      company: "OpenAI",
      location: "San Francisco, CA",
      category: "IT",
      type: "Full-Time",
      link: "https://openai.com/careers/",
      description: "Research and develop cutting-edge artificial intelligence technologies."
    },
    {
      id: 27,
      title: "Mobile App Developer",
      company: "Uber",
      location: "San Francisco, CA",
      category: "IT",
      type: "Full-Time",
      link: "https://www.uber.com/careers/",
      description: "Develop mobile applications for ride-sharing and delivery services."
    },
    {
      id: 28,
      title: "Backend Engineer",
      company: "Airbnb",
      location: "San Francisco, CA",
      category: "IT",
      type: "Full-Time",
      link: "https://careers.airbnb.com/",
      description: "Build scalable backend systems for the global travel platform."
    },
    {
      id: 29,
      title: "Full Stack Developer",
      company: "Stripe",
      location: "San Francisco, CA",
      category: "IT",
      type: "Full-Time",
      link: "https://stripe.com/jobs",
      description: "Develop payment processing solutions for businesses worldwide."
    },
    {
      id: 30,
      title: "Cloud Architect",
      company: "Salesforce",
      location: "San Francisco, CA",
      category: "IT",
      type: "Full-Time",
      link: "https://salesforce.wd1.myworkdayjobs.com/External_Career_Site",
      description: "Design and implement cloud solutions for enterprise customers."
    },

    // 💼 Management & Consulting
    {
      id: 31,
      title: "Management Consultant",
      company: "McKinsey & Company",
      location: "New York, NY",
      category: "Management",
      type: "Full-Time",
      link: "https://www.mckinsey.com/careers",
      description: "Provide strategic consulting to Fortune 500 companies."
    },
    {
      id: 32,
      title: "Business Analyst",
      company: "Bain & Company",
      location: "Boston, MA",
      category: "Management",
      type: "Full-Time",
      link: "https://www.bain.com/careers/",
      description: "Analyze business processes and recommend strategic improvements."
    },
    {
      id: 33,
      title: "Strategy Consultant",
      company: "Boston Consulting Group",
      location: "Boston, MA",
      category: "Management",
      type: "Full-Time",
      link: "https://careers.bcg.com/",
      description: "Develop growth strategies for leading global companies."
    },
    {
      id: 34,
      title: "Project Manager",
      company: "Deloitte",
      location: "New York, NY",
      category: "Management",
      type: "Full-Time",
      link: "https://www2.deloitte.com/us/en/careers.html",
      description: "Lead digital transformation projects for enterprise clients."
    },
    {
      id: 35,
      title: "Operations Manager",
      company: "Accenture",
      location: "Chicago, IL",
      category: "Management",
      type: "Full-Time",
      link: "https://www.accenture.com/us-en/careers",
      description: "Optimize business operations and implement process improvements."
    },
    {
      id: 36,
      title: "Product Manager",
      company: "PwC",
      location: "New York, NY",
      category: "Management",
      type: "Full-Time",
      link: "https://www.pwc.com/us/en/careers.html",
      description: "Manage product development lifecycle and market strategy."
    },
    {
      id: 37,
      title: "Business Development Manager",
      company: "EY",
      location: "New York, NY",
      category: "Management",
      type: "Full-Time",
      link: "https://www.ey.com/en_us/careers",
      description: "Drive business growth through strategic partnerships and client relationships."
    },
    {
      id: 38,
      title: "Operations Analyst",
      company: "KPMG",
      location: "New York, NY",
      category: "Management",
      type: "Full-Time",
      link: "https://home.kpmg/us/en/home/careers.html",
      description: "Analyze operational efficiency and recommend process optimizations."
    },

    // 💰 Finance & Banking
    {
      id: 39,
      title: "Investment Banking Analyst",
      company: "Goldman Sachs",
      location: "New York, NY",
      category: "Finance",
      type: "Full-Time",
      link: "https://www.goldmansachs.com/careers/",
      description: "Analyze financial markets and execute complex transactions."
    },
    {
      id: 40,
      title: "Risk Analyst",
      company: "JPMorgan Chase",
      location: "New York, NY",
      category: "Finance",
      type: "Full-Time",
      link: "https://careers.jpmorgan.com/",
      description: "Assess and manage financial risks across various portfolios."
    },
    {
      id: 41,
      title: "Quantitative Analyst",
      company: "Morgan Stanley",
      location: "New York, NY",
      category: "Finance",
      type: "Full-Time",
      link: "https://www.morganstanley.com/careers/",
      description: "Develop mathematical models for trading and risk management."
    },
    {
      id: 42,
      title: "Corporate Finance Manager",
      company: "Bank of America",
      location: "Charlotte, NC",
      category: "Finance",
      type: "Full-Time",
      link: "https://careers.bankofamerica.com/",
      description: "Manage corporate financial planning and capital allocation."
    },
    {
      id: 43,
      title: "Credit Analyst",
      company: "Wells Fargo",
      location: "San Francisco, CA",
      category: "Finance",
      type: "Full-Time",
      link: "https://www.wellsfargo.com/about/careers/",
      description: "Evaluate creditworthiness and manage loan portfolios."
    },
    {
      id: 44,
      title: "Treasury Analyst",
      company: "Citigroup",
      location: "New York, NY",
      category: "Finance",
      type: "Full-Time",
      link: "https://jobs.citi.com/",
      description: "Manage cash flow, liquidity, and foreign exchange operations."
    },
    {
      id: 45,
      title: "Financial Advisor",
      company: "Charles Schwab",
      location: "San Francisco, CA",
      category: "Finance",
      type: "Full-Time",
      link: "https://jobs.schwabjobs.com/",
      description: "Provide investment advice and financial planning services."
    },
    {
      id: 46,
      title: "Portfolio Manager",
      company: "BlackRock",
      location: "New York, NY",
      category: "Finance",
      type: "Full-Time",
      link: "https://careers.blackrock.com/",
      description: "Manage investment portfolios and develop asset allocation strategies."
    },

    // 🎨 Design & Creative
    {
      id: 47,
      title: "UX Designer",
      company: "Adobe",
      location: "San Jose, CA",
      category: "Design",
      type: "Full-Time",
      link: "https://adobe.wd5.myworkdayjobs.com/external_experienced",
      description: "Design intuitive user experiences for creative software products."
    },
    {
      id: 48,
      title: "UI Designer",
      company: "Sketch",
      location: "Amsterdam, Netherlands",
      category: "Design",
      type: "Full-Time",
      link: "https://www.sketch.com/jobs/",
      description: "Create beautiful and functional user interfaces for design tools."
    },
    {
      id: 49,
      title: "Brand Designer",
      company: "Canva",
      location: "Sydney, Australia",
      category: "Design",
      type: "Full-Time",
      link: "https://www.canva.com/careers/",
      description: "Develop brand identities and visual design systems."
    },
    {
      id: 50,
      title: "Motion Graphics Designer",
      company: "After Effects",
      location: "Remote",
      category: "Design",
      type: "Full-Time",
      link: "https://www.adobe.com/careers.html",
      description: "Create engaging animations and motion graphics for digital media."
    },
    {
      id: 51,
      title: "Product Designer",
      company: "InVision",
      location: "New York, NY",
      category: "Design",
      type: "Full-Time",
      link: "https://www.invisionapp.com/careers",
      description: "Design digital products and user experiences for enterprise clients."
    },
    {
      id: 52,
      title: "Creative Director",
      company: "Behance",
      location: "San Francisco, CA",
      category: "Design",
      type: "Full-Time",
      link: "https://careers.adobe.com/us/en/search-results?keywords=behance",
      description: "Lead creative teams and oversee design strategy for creative platform."
    },

    // 📈 Marketing & Sales
    {
      id: 53,
      title: "Digital Marketing Manager",
      company: "HubSpot",
      location: "Cambridge, MA",
      category: "Marketing",
      type: "Full-Time",
      link: "https://www.hubspot.com/careers",
      description: "Develop and execute digital marketing strategies for inbound marketing."
    },
    {
      id: 54,
      title: "Content Marketing Specialist",
      company: "Mailchimp",
      location: "Atlanta, GA",
      category: "Marketing",
      type: "Full-Time",
      link: "https://mailchimp.com/careers/",
      description: "Create compelling content to drive customer engagement and growth."
    },
    {
      id: 55,
      title: "Social Media Manager",
      company: "Hootsuite",
      location: "Vancouver, Canada",
      category: "Marketing",
      type: "Full-Time",
      link: "https://careers.hootsuite.com/",
      description: "Manage social media presence and community engagement strategies."
    },
    {
      id: 56,
      title: "Growth Marketing Manager",
      company: "Slack",
      location: "San Francisco, CA",
      category: "Marketing",
      type: "Full-Time",
      link: "https://slack.com/careers",
      description: "Drive user acquisition and retention through data-driven marketing campaigns."
    },
    {
      id: 57,
      title: "Brand Manager",
      company: "Coca-Cola",
      location: "Atlanta, GA",
      category: "Marketing",
      type: "Full-Time",
      link: "https://www.coca-colacompany.com/careers",
      description: "Develop and execute brand strategies for global beverage products."
    },
    {
      id: 58,
      title: "Sales Manager",
      company: "Salesforce",
      location: "San Francisco, CA",
      category: "Marketing",
      type: "Full-Time",
      link: "https://salesforce.wd1.myworkdayjobs.com/External_Career_Site",
      description: "Lead sales teams and drive revenue growth for CRM solutions."
    },
    {
      id: 59,
      title: "Marketing Analyst",
      company: "Google",
      location: "Mountain View, CA",
      category: "Marketing",
      type: "Full-Time",
      link: "https://careers.google.com/jobs/results/",
      description: "Analyze marketing performance and optimize advertising campaigns."
    },
    {
      id: 60,
      title: "Product Marketing Manager",
      company: "Microsoft",
      location: "Redmond, WA",
      category: "Marketing",
      type: "Full-Time",
      link: "https://careers.microsoft.com/us/en",
      description: "Develop go-to-market strategies for enterprise software products."
    },

    // 👥 Human Resources
    {
      id: 61,
      title: "HR Business Partner",
      company: "Google",
      location: "Mountain View, CA",
      category: "HR",
      type: "Full-Time",
      link: "https://careers.google.com/jobs/results/",
      description: "Partner with business leaders to drive people strategy and culture."
    },
    {
      id: 62,
      title: "Talent Acquisition Manager",
      company: "LinkedIn",
      location: "Sunnyvale, CA",
      category: "HR",
      type: "Full-Time",
      link: "https://careers.linkedin.com/",
      description: "Lead recruitment efforts and build talent pipelines for tech roles."
    },
    {
      id: 63,
      title: "Employee Experience Manager",
      company: "Airbnb",
      location: "San Francisco, CA",
      category: "HR",
      type: "Full-Time",
      link: "https://careers.airbnb.com/",
      description: "Design and implement programs to enhance employee engagement and satisfaction."
    },
    {
      id: 64,
      title: "Compensation Analyst",
      company: "PayPal",
      location: "San Jose, CA",
      category: "HR",
      type: "Full-Time",
      link: "https://www.paypal.com/us/webapps/mpp/jobs",
      description: "Analyze compensation data and design competitive pay structures."
    },
    {
      id: 65,
      title: "Learning & Development Manager",
      company: "Amazon",
      location: "Seattle, WA",
      category: "HR",
      type: "Full-Time",
      link: "https://www.amazon.jobs/en/",
      description: "Develop training programs and career development initiatives."
    },
    {
      id: 66,
      title: "Diversity & Inclusion Manager",
      company: "Microsoft",
      location: "Redmond, WA",
      category: "HR",
      type: "Full-Time",
      link: "https://careers.microsoft.com/us/en",
      description: "Lead diversity initiatives and create inclusive workplace culture."
    },
    {
      id: 67,
      title: "HR Operations Manager",
      company: "Uber",
      location: "San Francisco, CA",
      category: "HR",
      type: "Full-Time",
      link: "https://www.uber.com/careers/",
      description: "Optimize HR processes and manage employee lifecycle operations."
    },
    {
      id: 68,
      title: "Workplace Culture Manager",
      company: "Netflix",
      location: "Los Gatos, CA",
      category: "HR",
      type: "Full-Time",
      link: "https://jobs.netflix.com/",
      description: "Foster company culture and employee engagement initiatives."
    },

    // 🏭 Manufacturing & Automotive
    {
      id: 69,
      title: "Manufacturing Engineer",
      company: "Tesla",
      location: "Fremont, CA",
      category: "IT",
      type: "Full-Time",
      link: "https://www.tesla.com/careers",
      description: "Optimize production processes for electric vehicle manufacturing."
    },
    {
      id: 70,
      title: "Supply Chain Manager",
      company: "Toyota",
      location: "Plano, TX",
      category: "Management",
      type: "Full-Time",
      link: "https://www.toyota.com/careers/",
      description: "Manage global supply chain operations and logistics."
    },
    {
      id: 71,
      title: "Quality Assurance Engineer",
      company: "BMW",
      location: "Spartanburg, SC",
      category: "IT",
      type: "Full-Time",
      link: "https://www.bmwgroup.com/en/careers.html",
      description: "Ensure product quality and implement quality control systems."
    },
    {
      id: 72,
      title: "Production Manager",
      company: "Ford",
      location: "Dearborn, MI",
      category: "Management",
      type: "Full-Time",
      link: "https://corporate.ford.com/careers.html",
      description: "Oversee manufacturing operations and production efficiency."
    },

    // 🏥 Healthcare & Pharmaceuticals
    {
      id: 73,
      title: "Clinical Research Associate",
      company: "Pfizer",
      location: "New York, NY",
      category: "Management",
      type: "Full-Time",
      link: "https://www.pfizer.com/careers",
      description: "Manage clinical trials and research studies for new medications."
    },
    {
      id: 74,
      title: "Healthcare Data Analyst",
      company: "Johnson & Johnson",
      location: "New Brunswick, NJ",
      category: "IT",
      type: "Full-Time",
      link: "https://www.careers.jnj.com/",
      description: "Analyze healthcare data to improve patient outcomes and operations."
    },
    {
      id: 75,
      title: "Medical Device Engineer",
      company: "Medtronic",
      location: "Minneapolis, MN",
      category: "IT",
      type: "Full-Time",
      link: "https://www.medtronic.com/us-en/about/careers.html",
      description: "Design and develop innovative medical devices and technologies."
    },
    {
      id: 76,
      title: "Pharmaceutical Sales Manager",
      company: "Merck",
      location: "Kenilworth, NJ",
      category: "Marketing",
      type: "Full-Time",
      link: "https://jobs.merck.com/us/en",
      description: "Lead sales teams and drive pharmaceutical product sales."
    },

    // 🛒 Retail & E-commerce
    {
      id: 77,
      title: "E-commerce Manager",
      company: "Shopify",
      location: "Ottawa, Canada",
      category: "Marketing",
      type: "Full-Time",
      link: "https://www.shopify.com/careers",
      description: "Manage online store operations and digital marketing strategies."
    },
    {
      id: 78,
      title: "Supply Chain Analyst",
      company: "Walmart",
      location: "Bentonville, AR",
      category: "Management",
      type: "Full-Time",
      link: "https://careers.walmart.com/",
      description: "Optimize supply chain operations and inventory management."
    },
    {
      id: 79,
      title: "Retail Operations Manager",
      company: "Target",
      location: "Minneapolis, MN",
      category: "Management",
      type: "Full-Time",
      link: "https://corporate.target.com/careers",
      description: "Oversee retail store operations and customer experience."
    },
    {
      id: 80,
      title: "Digital Marketing Specialist",
      company: "Amazon",
      location: "Seattle, WA",
      category: "Marketing",
      type: "Full-Time",
      link: "https://www.amazon.jobs/en/",
      description: "Develop and execute digital marketing campaigns for e-commerce."
    },

    // 🎮 Gaming & Entertainment
    {
      id: 81,
      title: "Game Developer",
      company: "Epic Games",
      location: "Cary, NC",
      category: "IT",
      type: "Full-Time",
      link: "https://www.epicgames.com/site/en-US/careers",
      description: "Develop cutting-edge video games and interactive experiences."
    },
    {
      id: 82,
      title: "Game Designer",
      company: "Blizzard Entertainment",
      location: "Irvine, CA",
      category: "Design",
      type: "Full-Time",
      link: "https://careers.blizzard.com/",
      description: "Design engaging gameplay mechanics and user experiences."
    },
    {
      id: 83,
      title: "3D Artist",
      company: "Unity Technologies",
      location: "San Francisco, CA",
      category: "Design",
      type: "Full-Time",
      link: "https://careers.unity.com/",
      description: "Create stunning 3D assets and visual effects for games."
    },
    {
      id: 84,
      title: "Community Manager",
      company: "Riot Games",
      location: "Los Angeles, CA",
      category: "Marketing",
      type: "Full-Time",
      link: "https://www.riotgames.com/en/work-with-us",
      description: "Build and engage gaming communities across social platforms."
    },

    // 🏦 Fintech & Cryptocurrency
    {
      id: 85,
      title: "Blockchain Developer",
      company: "Coinbase",
      location: "San Francisco, CA",
      category: "IT",
      type: "Full-Time",
      link: "https://www.coinbase.com/careers",
      description: "Develop blockchain applications and cryptocurrency solutions."
    },
    {
      id: 86,
      title: "Cryptocurrency Analyst",
      company: "Binance",
      location: "Remote",
      category: "Finance",
      type: "Full-Time",
      link: "https://www.binance.com/en/careers",
      description: "Analyze cryptocurrency markets and trading strategies."
    },
    {
      id: 87,
      title: "Fintech Product Manager",
      company: "Square",
      location: "San Francisco, CA",
      category: "Management",
      type: "Full-Time",
      link: "https://careers.squareup.com/us/en",
      description: "Lead product development for financial technology solutions."
    },
    {
      id: 88,
      title: "Risk Management Specialist",
      company: "Robinhood",
      location: "Menlo Park, CA",
      category: "Finance",
      type: "Full-Time",
      link: "https://robinhood.com/careers/",
      description: "Manage financial risks in trading and investment platforms."
    },

    // 🚀 Aerospace & Defense
    {
      id: 89,
      title: "Aerospace Engineer",
      company: "SpaceX",
      location: "Hawthorne, CA",
      category: "IT",
      type: "Full-Time",
      link: "https://www.spacex.com/careers/",
      description: "Design and develop spacecraft and rocket technologies."
    },
    {
      id: 90,
      title: "Systems Engineer",
      company: "Boeing",
      location: "Seattle, WA",
      category: "IT",
      type: "Full-Time",
      link: "https://jobs.boeing.com/",
      description: "Develop complex aerospace systems and integration solutions."
    },
    {
      id: 91,
      title: "Defense Analyst",
      company: "Lockheed Martin",
      location: "Bethesda, MD",
      category: "Management",
      type: "Full-Time",
      link: "https://www.lockheedmartin.com/en-us/careers.html",
      description: "Analyze defense systems and strategic planning initiatives."
    },
    {
      id: 92,
      title: "Avionics Engineer",
      company: "Northrop Grumman",
      location: "Falls Church, VA",
      category: "IT",
      type: "Full-Time",
      link: "https://www.northropgrumman.com/careers/",
      description: "Design and develop aircraft electronic systems and controls."
    },

    // 🏠 Real Estate & Construction
    {
      id: 93,
      title: "Real Estate Analyst",
      company: "CBRE",
      location: "Los Angeles, CA",
      category: "Finance",
      type: "Full-Time",
      link: "https://www.cbre.com/careers",
      description: "Analyze real estate markets and investment opportunities."
    },
    {
      id: 94,
      title: "Construction Project Manager",
      company: "Turner Construction",
      location: "New York, NY",
      category: "Management",
      type: "Full-Time",
      link: "https://www.turnerconstruction.com/careers",
      description: "Manage large-scale construction projects from planning to completion."
    },
    {
      id: 95,
      title: "Property Manager",
      company: "JLL",
      location: "Chicago, IL",
      category: "Management",
      type: "Full-Time",
      link: "https://www.jll.com/en/careers",
      description: "Oversee commercial and residential property operations."
    },
    {
      id: 96,
      title: "Architectural Designer",
      company: "Gensler",
      location: "San Francisco, CA",
      category: "Design",
      type: "Full-Time",
      link: "https://www.gensler.com/careers",
      description: "Design innovative architectural solutions for commercial projects."
    },

    // 🎓 Education & EdTech
    {
      id: 97,
      title: "Educational Technology Manager",
      company: "Coursera",
      location: "Mountain View, CA",
      category: "Management",
      type: "Full-Time",
      link: "https://www.coursera.org/careers",
      description: "Develop and manage online learning platforms and content."
    },
    {
      id: 98,
      title: "Learning Experience Designer",
      company: "Udemy",
      location: "San Francisco, CA",
      category: "Design",
      type: "Full-Time",
      link: "https://about.udemy.com/careers/",
      description: "Design engaging online learning experiences and curricula."
    },
    {
      id: 99,
      title: "EdTech Product Manager",
      company: "Khan Academy",
      location: "Mountain View, CA",
      category: "Management",
      type: "Full-Time",
      link: "https://www.khanacademy.org/careers",
      description: "Lead product development for educational technology solutions."
    },
    {
      id: 100,
      title: "Curriculum Developer",
      company: "Duolingo",
      location: "Pittsburgh, PA",
      category: "Design",
      type: "Full-Time",
      link: "https://www.duolingo.com/careers",
      description: "Develop language learning curricula and educational content."
    },

    // 🌱 Sustainability & Clean Energy
    {
      id: 101,
      title: "Sustainability Manager",
      company: "Patagonia",
      location: "Ventura, CA",
      category: "Management",
      type: "Full-Time",
      link: "https://www.patagonia.com/careers/",
      description: "Lead environmental sustainability initiatives and programs."
    },
    {
      id: 102,
      title: "Renewable Energy Engineer",
      company: "First Solar",
      location: "Tempe, AZ",
      category: "IT",
      type: "Full-Time",
      link: "https://www.firstsolar.com/en-us/about-us/careers",
      description: "Design and develop solar energy systems and technologies."
    },
    {
      id: 103,
      title: "Environmental Analyst",
      company: "Tesla",
      location: "Austin, TX",
      category: "Management",
      type: "Full-Time",
      link: "https://www.tesla.com/careers",
      description: "Analyze environmental impact and sustainability metrics."
    },
    {
      id: 104,
      title: "Clean Energy Consultant",
      company: "BloombergNEF",
      location: "New York, NY",
      category: "Management",
      type: "Full-Time",
      link: "https://about.bnef.com/careers/",
      description: "Provide consulting services for clean energy investments and strategies."
    },

    // 🎬 Media & Entertainment
    {
      id: 105,
      title: "Content Producer",
      company: "Netflix",
      location: "Los Angeles, CA",
      category: "Marketing",
      type: "Full-Time",
      link: "https://jobs.netflix.com/",
      description: "Produce original content and manage production workflows."
    },
    {
      id: 106,
      title: "Video Editor",
      company: "YouTube",
      location: "San Bruno, CA",
      category: "Design",
      type: "Full-Time",
      link: "https://careers.google.com/jobs/results/",
      description: "Edit and produce video content for digital platforms."
    },
    {
      id: 107,
      title: "Social Media Producer",
      company: "TikTok",
      location: "Los Angeles, CA",
      category: "Marketing",
      type: "Full-Time",
      link: "https://careers.tiktok.com/",
      description: "Create and manage social media content and campaigns."
    },
    {
      id: 108,
      title: "Digital Content Manager",
      company: "Disney",
      location: "Burbank, CA",
      category: "Marketing",
      type: "Full-Time",
      link: "https://jobs.disneycareers.com/",
      description: "Manage digital content strategy and distribution across platforms."
    }
  ];

  // ✅ Fetch jobs from backend (supports server-side filtering if available)
  useEffect(() => {
    let isCancelled = false;

    async function fetchJobs() {
      setIsLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        if (selectedCategory !== "All") params.set("category", selectedCategory);
        if (searchTerm.trim()) params.set("q", searchTerm.trim());

        const endpointWithFilters = `/jobs${params.toString() ? `?${params.toString()}` : ""}`;
        let data: Job[] | null = null;
        try {
          data = await apiRequest<Job[]>(endpointWithFilters);
        } catch (_) {
          data = await apiRequest<Job[]>("/jobs");
        }

        if (!isCancelled && Array.isArray(data)) {
          setApiJobs(data);
        }
      } catch (e: any) {
        if (!isCancelled) {
          setError(e?.message || "Failed to load jobs from server");
          setApiJobs([]);
        }
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    fetchJobs();
    return () => {
      isCancelled = true;
    };
  }, [searchTerm, selectedCategory]);

  // ✅ Choose data source (API first, fallback otherwise)
  const jobs: Job[] = useMemo(() => (apiJobs && apiJobs.length ? apiJobs : fallbackJobs), [apiJobs, fallbackJobs]);

  // ✅ Client-side filtering (works for both API and fallback data)
  const filteredJobs = jobs.filter((job) => {
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Explore Internship & Job Opportunities
          </motion.h1>
          <p className="text-xl text-blue-100">
            Apply for Viziopath Internships or find jobs from top global companies.
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="flex items-center border rounded-lg px-3 py-2 w-full md:w-1/2">
            <Search className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search jobs or companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center flex-wrap gap-2">
            <Filter className="h-5 w-5 text-gray-600" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Messages */}
      {error && (
        <div className="max-w-6xl mx-auto px-4 mt-6">
          <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 p-4 text-sm">{error}</div>
        </div>
      )}

      {/* Job Cards */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading && filteredJobs.length === 0 ? (
            <div className="col-span-full text-center text-gray-600">Loading jobs...</div>
          ) : filteredJobs.length === 0 ? (
            <div className="col-span-full text-center text-gray-600">No jobs found.</div>
          ) : filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
                  {job.title}
                </h3>
                <p className="text-gray-600 font-medium">{job.company}</p>
                <p className="text-gray-500 text-sm flex items-center mt-2">
                  <MapPin className="h-4 w-4 mr-1" /> {job.location}
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full">
                  {job.category} • {job.type}
                </span>
                <p className="mt-4 text-gray-700 text-sm">{job.description}</p>
              </div>

              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Apply Now <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobPortal;

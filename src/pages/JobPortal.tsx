import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Briefcase, MapPin, Filter, ExternalLink } from "lucide-react";

const JobPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "IT", "Marketing", "Finance", "Design", "HR"];

  // ✅ FIXED: Only ONE jobs array
  const jobs = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "NVIDIA",
      location: "Shangai",
      category: "IT",
      type: "Full-Time",
      link: "https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/Taiwan-Taipei/Software-Engineering-Intern---OpenBMC_JR1989739?source=jobboardlinkedin",
      description: "Work on scalable web applications with React, Node.js, and cloud tech."
    },
    {
      id: 2,
      title: "Marketing Executive",
      company: "Deloitte",
      location: "Gurgaon, India",
      category: "Marketing",
      type: "Internship",
      link: "https://naukri.com/marketing-job-link",
      description: "Plan, strategize and execute brand awareness campaigns."
    },
    {
      id: 3,
      title: "Financial Analyst",
      company: "JP Morgan",
      location: "Mumbai, India",
      category: "Finance",
      type: "Full-Time",
      link: "https://naukri.com/finance-job-link",
      description: "Analyze financial reports and assist in investment strategies."
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Adobe",
      location: "Remote",
      category: "Design",
      type: "Full-Time",
      link: "https://naukri.com/design-job-link",
      description: "Design modern and user-friendly interfaces for web & mobile apps."
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
      title: "Backend Engineer",
      company: "Amazon",
      location: "Chennai, India",
      category: "IT",
      type: "Full-Time",
      link: "https://naukri.com/backend-job-link",
      description: "Build scalable backend services with Java, Spring Boot, and AWS."
    },
    {
      id: 7,
      title: "Digital Marketing Specialist",
      company: "Google",
      location: "Bangalore, India",
      category: "Marketing",
      type: "Full-Time",
      link: "https://naukri.com/digital-marketing-job-link",
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
      company: "Canva",
      location: "Remote",
      category: "Design",
      type: "Internship",
      link: "https://naukri.com/graphic-design-job-link",
      description: "Create engaging graphics, illustrations, and marketing assets."
    },
    {
      id: 10,
      title: "Talent Acquisition Specialist",
      company: "Wipro",
      location: "Pune, India",
      category: "HR",
      type: "Full-Time",
      link: "https://naukri.com/talent-acquisition-job-link",
      description: "Source, screen, and onboard top talent for multiple business units."
    },
    {
      id: 11,
      title: "Data Scientist",
      company: "IBM",
      location: "Bangalore, India",
      category: "IT",
      type: "Full-Time",
      link: "https://naukri.com/datascientist-job-link",
      description: "Work on ML models and data pipelines for enterprise solutions."
    },
    {
      id: 12,
      title: "Content Strategist",
      company: "Zomato",
      location: "Gurgaon, India",
      category: "Marketing",
      type: "Full-Time",
      link: "https://naukri.com/content-job-link",
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
      title: "Cloud Engineer",
      company: "Oracle",
      location: "Hyderabad, India",
      category: "IT",
      type: "Full-Time",
      link: "https://naukri.com/cloud-job-link",
      description: "Deploy and manage cloud infrastructure using OCI and Kubernetes."
    },
    {
      id: 17,
      title: "SEO Analyst",
      company: "Swiggy",
      location: "Bangalore, India",
      category: "Marketing",
      type: "Full-Time",
      link: "https://naukri.com/seo-job-link",
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
      location: "Bangalore, India",
      category: "HR",
      type: "Full-Time",
      link: "https://naukri.com/payroll-job-link",
      description: "Manage payroll operations and compliance across teams."
    }
    // 👉 Add more jobs here (up to 30+)
  ];

  // Filtering jobs
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
            Find Your Dream Job
          </motion.h1>
          <p className="text-xl text-blue-100">
            Explore opportunities from top companies and apply instantly.
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

      {/* Job Cards */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job, index) => (
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

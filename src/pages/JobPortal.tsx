import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Briefcase, MapPin, Filter, ExternalLink } from "lucide-react";

const JobPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Added Viziopath Intern as a category
  const categories = ["All", "IT", "Viziopath Intern", "Marketing", "Finance", "Design", "HR"];

  // ✅ Jobs & Internships List
  const jobs = [
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
      location: "Bangalore, India",
      category: "HR",
      type: "Full-Time",
      link: "https://naukri.com/payroll-job-link",
      description: "Manage payroll operations and compliance across teams."
    }
  ];

  // ✅ Filtering jobs
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

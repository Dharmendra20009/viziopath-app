import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Briefcase, MapPin, Filter, ExternalLink, IndianRupee, Sparkles, Building2, Wallet } from "lucide-react";
import { apiRequest } from "../utils/api";
import { fallbackJobs, Job } from "../data/jobData"; // Import extracted data

const JobPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "IT", "Viziopath Intern", "Marketing", "Finance", "Design", "HR", "Management"];

  const [apiJobs, setApiJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch jobs effect (preserving logical flow)
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
          setError(e?.message || "Using curated local database");
          setApiJobs([]);
        }
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    fetchJobs();
    return () => { isCancelled = true; };
  }, [searchTerm, selectedCategory]);

  const jobs: Job[] = useMemo(() => (apiJobs && apiJobs.length ? apiJobs : fallbackJobs), [apiJobs]);

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.eligibility.some(elig => elig.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1️⃣ Modern Hero Section */}
      <section className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-6 border border-blue-500/30">
              <Sparkles className="w-3 h-3" /> Career Opportunities
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Dream Job</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Explore thousands of internships and full-time roles from top global companies. Your career journey starts here.
            </p>

            {/* Floating Search Bar */}
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-2 shadow-2xl">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by Title, Company, or Skills..."
                  className="w-full pl-12 pr-4 py-4 bg-white/5 rounded-xl border border-transparent focus:bg-white text-white focus:text-gray-900 focus:outline-none transition-all placeholder:text-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-blue-600/30">
                Search Jobs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ Filter Tabs */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-gray-500 mr-4 shrink-0">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filters:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${selectedCategory === cat
                  ? "bg-slate-900 text-white border-slate-900 shadow-md transform scale-105"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3️⃣ Job Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <Briefcase className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">No Jobs Found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </motion.div>
            ) : (
              filteredJobs.map((job, idx) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Top Accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${job.category === 'Viziopath Intern' ? 'bg-gradient-to-r from-teal-400 to-blue-500' : 'bg-gradient-to-r from-gray-200 to-gray-300'}`}></div>

                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-gray-50 p-3 rounded-xl">
                        <Building2 className="w-6 h-6 text-gray-700" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${job.type === 'Internship' ? 'bg-purple-50 text-purple-600' : 'bg-green-50 text-green-600'
                        }`}>
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1" title={job.title}>
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium mb-4">{job.company}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-900 font-bold">
                        <div className="bg-green-100 p-1 rounded-full mr-2">
                          <IndianRupee className="w-3 h-3 text-green-700" />
                        </div>
                        {/* Ensure text doesn't contain $ if data still has it, though data should be clean */}
                        {job.stipend.replace('$', '')}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.eligibility.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-md border border-gray-100">
                          {tag}
                        </span>
                      ))}
                      {job.eligibility.length > 3 && (
                        <span className="text-xs text-gray-400 py-1">+ {job.eligibility.length - 3}</span>
                      )}
                    </div>
                  </div>

                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-3 rounded-xl hover:bg-blue-600 transition-colors group/btn"
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default JobPortal;
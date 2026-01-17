import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, BookOpen, Star, Users, CheckCircle, IndianRupee, X, PlayCircle, Clock, Award } from 'lucide-react';
import { courses, Course } from '../data/courseData';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null); // For Modal

  const categories = ["All", ...Array.from(new Set(courses.map(c => c.category)))];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openEnrollModal = (course: Course) => {
    setSelectedCourse(course);
  };

  const closeEnrollModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* 1️⃣ Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-6">
              Skill Up, Scale Up
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">In-Demand</span> Skills
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
              Join thousands of learners in our specialized certification programs. Designed by industry experts for real-world impact.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses (e.g. Python, Data Science)..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white placeholder:text-gray-300 focus:bg-white focus:text-gray-900 focus:outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ Filters */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500 mr-2 shrink-0" />
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

      {/* 3️⃣ Course Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-2 py-1 text-xs font-bold text-gray-900 flex items-center shadow-sm">
                      <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" /> {course.rating}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">{course.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">{course.description}</p>

                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <Users className="w-4 h-4 mr-2" /> {course.students.toLocaleString()} Students
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-gray-400 line-through text-xs mr-2">₹{course.price}</span>
                        <span className="text-xl font-bold text-gray-900 flex items-center">
                          <IndianRupee className="w-4 h-4" />{course.discountedPrice}
                        </span>
                      </div>
                      <button
                        onClick={() => openEnrollModal(course)}
                        className="bg-slate-900 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">No Courses Found</h3>
                <p className="text-gray-500">Try searching for something else.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4️⃣ Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={closeEnrollModal}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative z-10 flex flex-col md:flex-row"
            >
              <button
                onClick={closeEnrollModal}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full z-20 text-gray-600 md:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Side: Summary & Image */}
              <div className="md:w-2/5 bg-slate-900 text-white p-8 flex flex-col relative overflow-hidden">
                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <span className="inline-block bg-teal-500/20 text-teal-300 text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit border border-teal-500/30">
                    {selectedCourse.category}
                  </span>
                  <h2 className="text-2xl font-bold mb-2 leading-tight">{selectedCourse.title}</h2>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm mb-6">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-gray-400 ml-2">({selectedCourse.rating})</span>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div className="bg-white/10 rounded-xl p-4 border border-white/5">
                      <p className="text-gray-400 text-sm mb-1">Total Course Fee</p>
                      <div className="flex items-end gap-3">
                        <span className="text-3xl font-bold text-white flex items-center">
                          <IndianRupee className="w-6 h-6" />{selectedCourse.discountedPrice}
                        </span>
                        <span className="text-gray-500 line-through text-lg mb-1">
                          ₹{selectedCourse.price}
                        </span>
                      </div>
                      <div className="text-green-400 text-sm font-semibold mt-2">
                        {Math.round(((selectedCourse.price - selectedCourse.discountedPrice) / selectedCourse.price) * 100)}% OFF Limited Time
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2">
                      Proceed to Payment <Award className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side: Syllabus */}
              <div className="md:w-3/5 p-8 overflow-y-auto bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" /> Course Best Syllabus
                </h3>

                <div className="space-y-4 mb-8">
                  {selectedCourse.syllabus.map((topic, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{topic.split(':')[0]}</h4>
                        <p className="text-sm text-gray-500 mt-1">{topic.split(':')[1] || 'Comprehensive module coverage'}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-4">What you'll get</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedCourse.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <PlayCircle className="w-4 h-4 text-purple-500" />
                      Lifetime Access
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-orange-500" />
                      Self-Paced
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Courses;

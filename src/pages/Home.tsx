import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useSpring, useTransform } from 'framer-motion';
import {
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Code,
  Download,
  Star,
  Cpu,
  Zap,
} from 'lucide-react';
import SEO from '../components/SEO';

const CountUp = ({ to }: { to: number }) => {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    spring.set(to);
  }, [spring, to]);

  return <motion.span>{display}</motion.span>;
};

const Home = () => {
  const [formData, setFormData] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    degree: 'B.Tech in Computer Science',
    skills: 'React, Node.js, Python, TypeScript'
  });

  const generateLatexPreview = () => {
    return `\\documentclass{article}
\\begin{document}
\\textbf{${formData.name || 'Your Name'}} \\\\
\\textit{${formData.email || 'email@example.com'}}

\\section*{Education}
${formData.degree || 'Degree Name'}

\\section*{Skills}
${formData.skills || 'Your Skills'}
\\end{document}`;
  };

  const highlights = [
    { icon: Zap, text: "100% Free to Use" },
    { icon: Code, text: "Built with LaTeX Formatting" },
    { icon: Users, text: "Trusted by Students & Professionals" }
  ];

  const templates = [
    'S1.jpg', 'S2.jpg', 'S3.jpg', 'S4.jpg', 'S5.jpg', 'S6.jpg', 'S7.jpg'
  ];

  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Viziopath",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Free LaTeX Resume Maker & ATS Resume Checker"
        description="Build ATS-friendly resumes with Viziopath's free LaTeX resume generator. Check your resume score instantly. No signup required for checker."
        keywords="free latex resume maker, ats resume checker, resume builder online, latex resume template, viziopath"
        schema={schema}
      />

      {/* 1️⃣ Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden pb-16 pt-24 lg:pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-teal-500/20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-800/50 border border-blue-700 backdrop-blur-sm mb-6">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm font-medium text-blue-100">Premium Resume Builder</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">LaTeX</span> Resume Builder
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
                Generate ATS-friendly, academic-standard resumes instantly. Stand out with clean, professional formatting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/resumeTemplates"
                  className="inline-flex justify-center items-center bg-teal-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/30 group"
                >
                  Create My Resume
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#templates-demo"
                  className="inline-flex justify-center items-center px-8 py-4 rounded-xl text-lg font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  View Templates
                </a>
              </div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Abstract Resume Representation */}
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 rotate-3 hover:rotate-0 transition-transform duration-500 border border-gray-100">
                <div className="flex items-center justify-between mb-4 border-b pb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-gray-400 text-xs font-mono">resume.tex</div>
                </div>
                <div className="space-y-3 font-mono text-xs text-gray-600">
                  <div className="flex"><span className="text-blue-600 w-8">01</span><span>\documentclass{'{article}'}</span></div>
                  <div className="flex"><span className="text-blue-600 w-8">02</span><span>\begin{'{document}'}</span></div>
                  <div className="flex"><span className="text-blue-600 w-8">03</span><span>\textbf{'{John Doe}'}</span></div>
                  <div className="pl-8 text-gray-400">... compiling professional history ...</div>
                  <div className="flex"><span className="text-blue-600 w-8">42</span><span>\end{'{document}'}</span></div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
                  <FileText className="h-12 w-12 text-gray-400" />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 z-20"
              >
                <div className="bg-green-100 p-2 rounded-lg"><CheckCircle className="text-green-600 h-6 w-6" /></div>
                <div>
                  <div className="text-xs text-gray-500">Validation</div>
                  <div className="font-bold text-gray-900">ATS Friendly</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Live Stats Section */}
      <section className="py-12 bg-white -mt-8 relative z-20 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Counter */}
            <div className="lg:col-span-2 text-center md:text-left py-4">
              <p className="text-gray-500 font-medium mb-1 uppercase tracking-wide text-sm">Community Trust</p>
              <div className="flex items-baseline justify-center md:justify-start gap-1">
                <span className="text-4xl lg:text-5xl font-bold text-blue-900">
                  <CountUp to={453419} />
                </span>
                <span className="text-2xl font-bold text-blue-600">+</span>
              </div>
              <p className="text-gray-600 mt-1">Resumes generated and counting</p>
            </div>

            {/* Highlights */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 py-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.text}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Template Demo Section */}
      <section id="templates-demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Templates</h2>
            <p className="text-gray-600">Choose from our collection of ATS-optimized designs</p>
          </div>

          <div className="relative">
            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
              {templates.map((template, index) => (
                <div key={index} className="snap-center shrink-0 w-80 md:w-96 group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-transform group-hover:-translate-y-2 duration-300">
                    <img
                      src={`/${template}`}
                      alt={`Resume Template ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Link to="/resumeTemplates" className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-teal-50 transform scale-90 group-hover:scale-100 transition-all">
                        Use Template
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fading Edges for Scroll Suggestion */}
            <div className="absolute top-0 bottom-8 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute top-0 bottom-8 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Mini Form or Preview Panel */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Try It Yourself</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See how your information translates instantly into clean LaTeX code. No sign-up required for this demo.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Input Panel */}
              <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-blue-100 p-2 rounded-lg"><Cpu className="text-blue-600 h-5 w-5" /></div>
                  <h3 className="text-xl font-bold text-gray-900">Enter Details</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Degree / Qualification</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      value={formData.degree}
                      onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Key Skills</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    />
                  </div>

                  <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                    <Zap className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    Generate LaTeX
                  </button>
                </div>
              </div>

              {/* Preview Panel */}
              <div className="bg-slate-900 p-8 lg:p-12 text-gray-300 font-mono text-sm overflow-auto relative group">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white/10 hover:bg-white/20 p-2 rounded text-white" title="Copy Code">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-6 text-slate-500 border-b border-slate-700 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2">preview.tex</span>
                </div>

                <pre className="whitespace-pre-wrap leading-relaxed">
                  <div dangerouslySetInnerHTML={{
                    __html: generateLatexPreview()
                      .replace(/\\/g, '<span class="text-pink-400">\\</span>')
                      .replace(/{/g, '<span class="text-yellow-400">{</span>')
                      .replace(/}/g, '<span class="text-yellow-400">}</span>')
                  }} />
                </pre>

                <div className="mt-8 pt-4 border-t border-slate-700 text-center">
                  <p className="text-slate-500 text-xs">Want the full PDF?</p>
                  <Link to="/resumeTemplates" className="text-teal-400 hover:text-teal-300 font-semibold text-sm">
                    Build Full Resume &rarr;
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

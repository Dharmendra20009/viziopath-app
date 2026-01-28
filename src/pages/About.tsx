import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Globe, Lightbulb, CheckCircle, Clock, LayoutTemplate, Shield, Star, Rocket, Heart, Zap, Coffee } from 'lucide-react';

import SEO from '../components/SEO';

const About = () => {

  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Viziopath",
      "founder": {
        "@type": "Person",
        "name": "Dharmendra Gupta",
        "jobTitle": "Founder & CEO",
        "url": "https://www.linkedin.com/in/dharmendra-gupta-viziopath"
      },
      "description": "Viziopath is a free LaTeX resume maker and ATS resume checker."
    }
  });

  // ... existing variants ...
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const aboutHighlights = [
    { text: "Powerful LaTeX engine", sub: "Automatic formatting" },
    { text: "100% Browser-based", sub: "No installation needed" },
    { text: "Clean Sections", sub: "Education, Experience, Skills" },
    { text: "ATS Compliant", sub: "For all HR systems" },
    { text: "Global Community", sub: "04,53,419+ users" }
  ];

  const benefits = [
    { icon: Clock, title: "Saves Time", desc: "Focus on content, not margins." },
    { icon: LayoutTemplate, title: "Professional Layout", desc: "Perfect alignment every time." },
    { icon: Users, title: "For Everyone", desc: "Designed for all career stages." }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      description: 'Every pixel aligned. We sweat the small stuff so you don’t have to.'
    },
    {
      icon: Users,
      title: 'Accessibility',
      color: 'text-teal-500',
      bg: 'bg-teal-50',
      description: 'Democratizing professional documentation for everyone, everywhere.'
    },
    {
      icon: Rocket,
      title: 'Growth',
      color: 'text-purple-500',
      bg: 'bg-purple-50',
      description: 'Fueling your career trajectory with documents that open doors.'
    },
    {
      icon: Heart,
      title: 'Success',
      color: 'text-rose-500',
      bg: 'bg-rose-50',
      description: 'Your hired status is our favorite metric. We succeed when you do.'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden font-sans">
      <SEO
        title="About Viziopath - Founder Dharmendra Gupta | Free Resume Maker"
        description="Learn about Viziopath and its founder Dharmendra Gupta. We provide free, ATS-friendly LaTeX resume tools to help students and professionals get hired."
        keywords="about viziopath, dharmendra gupta founder, about dhamendra gupta, viziopath story, free resume maker mission"
        schema={schema}
      />

      {/* 1️⃣ Unique Hero Section with Abstract Background */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900 border-b border-white/10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl"></div>
          {/* LaTeX Symbols Pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-64 h-64 border border-white/10 rounded-full border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 -left-20 w-96 h-96 border border-white/5 rounded-full border-dashed"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-teal-300 text-sm font-mono border border-white/10 mb-6 backdrop-blur-sm">
              \usepackage{'{career-success}'}
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Crafting Careers with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400">Precision & Logic</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We bridge the gap between your potential and your opportunity through intelligent, automated document design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ Product Spotlight: Glassmorphism Card Style */}
      <section className="relative py-24 bg-gray-50">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-900 to-gray-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-20">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={itemVariants} className="order-2 lg:order-1">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="text-yellow-500 fill-current h-6 w-6" />
                  <span className="font-bold text-gray-900 tracking-wide uppercase text-sm">The Power Engine</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-display">
                  Why We built a <span className="text-blue-600">LaTeX</span> Resume Creator
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Traditional word processors rely on "What You See Is What You Get," which often means fighting with margins and alignment. Our engine operates on "What You Mean Is What You Get." You focus on the content; our system handles the professional presentation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {aboutHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                      <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">{item.text}</h4>
                        <p className="text-xs text-slate-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-slate-900 aspect-square rounded-2xl p-6 flex flex-col justify-center items-center text-center overflow-hidden">
                    {/* Code Animation Effect */}
                    <div className="absolute top-0 w-full h-full opacity-10 pointer-events-none">
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className="whitespace-nowrap text-[10px] text-teal-300 font-mono animate-marquee" style={{ animationDelay: `${i * 0.5}s` }}>
                          \documentclass{'{article}'} \usepackage{'{titlesec}'} \begin{'{document}'} ...
                        </div>
                      ))}
                    </div>

                    <Shield className="w-20 h-20 text-teal-400 mb-6 relative z-10" />
                    <h3 className="text-2xl font-bold text-white mb-2 relative z-10">ATS Compliant</h3>
                    <p className="text-slate-400 text-sm relative z-10 max-w-xs mx-auto">
                      Our generated PDFs are structure-perfect, ensuring robots read your resume exactly as humans do.
                    </p>

                    {/* Floating benefits */}
                    <div className="absolute bottom-6 flex gap-4 z-10">
                      {benefits.map((b, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-teal-500/50 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3️⃣ Values Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Principles</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 ${value.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${value.bg} ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:translate-x-1 transition-transform">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Story Section: Modern Split */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 translate-x-32 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Our Origin Story</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">From Frustration to <span className="underline decoration-teal-400 decoration-4 underline-offset-4">Innovation</span></h3>

              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  It started with a rejected resume. A perfectly qualified candidate, overlooked essentially because their margins were messy and their headers confused the ATS parser.
                </p>
                <p>
                  We looked at the solution: <span className="font-semibold text-slate-900">LaTeX</span>. It was perfect, precise, and professional. It was also terrifyingly complex for the average job seeker.
                </p>
                <div className="pl-6 border-l-4 border-teal-500 italic text-slate-700 my-8">
                  "Why should format be a barrier to employment? We decided it shouldn't be."
                </div>
                <p>
                  So, Viziopath was born. We built a UI that feels like a simple form but outputs code-perfect documents. No learning curve, just results.
                </p>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="font-medium text-slate-800">
                    <span className="font-bold text-blue-600">Dharmendra Gupta</span> is the Founder & CEO of Viziopath, a platform focused on free, ATS-friendly LaTeX resumes. He is dedicated to helping students and professionals crack their dream jobs through better documentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 group">
                <img
                  src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team brainstorming"
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-lg">Dharmendra Gupta</p>
                    <p className="text-teal-300 text-sm">Founder & CEO</p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-slate-200 rounded-2xl hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Vision Card */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="relative z-10">
              <Eye className="w-12 h-12 mx-auto mb-6 text-teal-300 opacity-80" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                "To create a world where every individual's potential is judged on their skills and experience, not their ability to format a document."
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
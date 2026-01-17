import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Globe, Award, Mail, Phone, CheckCircle, ArrowRight, School, Briefcase, GraduationCap, Layout } from 'lucide-react';

const MOUs = () => {

  const keyBenefits = [
    {
      icon: Users,
      title: "Free Access",
      desc: "Unlimited customized resume building for students and placement cells."
    },
    {
      icon: Layout,
      title: "Branded Templates",
      desc: "Resume formats tailored to your institute's official branding guidelines."
    },
    {
      icon: CheckCircle,
      title: "Bulk Generation",
      desc: "Generate hundreds of resumes for placement season in minutes."
    },
    {
      icon: GraduationCap,
      title: "Career Workshops",
      desc: "Exclusive webinars and sessions on resume building and career readiness."
    },
    {
      icon: Phone,
      title: "Dedicated Support",
      desc: "Priority support channel for faculty and placement officers."
    }
  ];

  const partners = [
    "Engineering & Degree Colleges",
    "Management and Commerce Institutes",
    "Skill Development Centers",
    "Corporate HR & Training Partners"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1️⃣ Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-blue-800 text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-teal-300 text-sm font-semibold mb-6 border border-white/10 backdrop-blur-sm">
              Empowering Institutions
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">MOUs & Institutional <br /><span className="text-teal-400">Collaborations</span></h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Highlight our strategic partnerships with colleges, universities, training institutes, and career cells across India.
              Our LaTeX Resume Builder platform supports institutions in empowering students with modern, ATS-ready resume tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ SEO Highlights Bar */}
      <section className="bg-slate-900 text-white py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Users className="text-teal-400 h-6 w-6" />
              <span className="font-semibold">Partnered with 04,53,419+ users</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-teal-400 h-6 w-6" />
              <span className="font-semibold">Trusted Campus Placement Tool</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-teal-400 h-6 w-6" />
              <span className="font-semibold">Expanding Pan-India Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Key Collaboration Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your campus placement results with our dedicated institutional tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
            {keyBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:border-teal-100 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}

            {/* Special Card for "Who We Work With" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-900 text-white md:col-span-2 lg:col-span-1 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Building className="h-5 w-5 text-teal-400" />
                Who We Work With
              </h3>
              <ul className="space-y-4">
                {partners.map((partner, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                    <span className="text-gray-300">{partner}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Institutional Inquery CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Become an Institutional Partner</h2>
              <p className="text-gray-600">
                Empower your students with the best tools. Fill out the form below to schedule a demo for your institute.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Institute Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="e.g. IIT Delhi" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Representative Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Placement Officer Name" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Official Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="tpo@institute.edu" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+91 98765 43210" />
                </div>
              </div>

              <button type="button" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2 group">
                Request Partnership Details
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Already a partner? <a href="#" className="text-blue-600 font-semibold hover:underline">Login to Institutional Dashboard</a>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MOUs;
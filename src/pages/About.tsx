import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Globe, Lightbulb, CheckCircle, Clock, LayoutTemplate, Shield, Star, Rocket, Heart } from 'lucide-react';

const About = () => {

  const aboutHighlights = [
    { text: "Powerful LaTeX engine that formats resumes automatically" },
    { text: "100% browser-based — no software installation needed" },
    { text: "Generates clean sections for education, experience, and skills" },
    { text: "Perfect for university submissions, job portals, LinkedIn, and HR systems" },
    { text: "Loved by 04,53,419+ users across India and worldwide" }
  ];

  const benefits = [
    { icon: Clock, title: "Saves Time", desc: "Saves hours of manual formatting" },
    { icon: LayoutTemplate, title: "Professional Layout", desc: "Ensures results every time" },
    { icon: Users, title: "For Everyone", desc: "Freshers, students & professionals" }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We believe in the power of perfect formatting. Every pixel and margin is calculated for maximum impact.'
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Making professional-grade LaTeX documents accessible to everyone, regardless of technical skill.'
    },
    {
      icon: Rocket,
      title: 'Career Growth',
      description: 'Our ultimate goal is to help you land your dream job by presenting your best self.'
    },
    {
      icon: Heart,
      title: 'User Success',
      description: 'Your success is our success. We celebrate every interview call and job offer our users receive.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Building Careers, One Resume at a Time</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We are Viziopath. We bridge the gap between your potential and your career opportunities through intelligent, ATS-friendly document creation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Spotlight: LaTeX Resume Creator */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-mono">About Our LaTeX Resume Creator</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Designed for students, professionals, and job-seekers, our platform helps you build clean, ATS-compliant resumes using industry-standard LaTeX formatting. Whether you’re applying for your first internship or targeting top corporate roles, our tools ensure your profile stands out with clarity, structure, and precision.
              </p>

              <ul className="space-y-4 mb-10">
                {aboutHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-xl text-center hover:bg-teal-50 transition-colors">
                    <benefit.icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{benefit.title}</h4>
                    <p className="text-xs text-gray-500">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Decorative Visual representing structure */}
                <div className="space-y-4">
                  <div className="h-8 w-1/3 bg-gray-100 rounded"></div>
                  <div className="flex gap-4">
                    <div className="h-32 w-full bg-blue-50/50 rounded-lg border border-dashed border-blue-200 flex items-center justify-center">
                      <div className="text-center">
                        <Shield className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                        <span className="text-xs text-blue-400 font-mono">ATS_COMPLIANT</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-50 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-50 rounded"></div>
                    <div className="h-4 w-4/6 bg-gray-50 rounded"></div>
                  </div>
                  <div className="flex justify-between items-center pt-8 border-t border-gray-100">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">
                          U{i}
                        </div>
                      ))}
                      <div className="w-10 h-10 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-xs font-bold text-teal-600">
                        +4M
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex text-yellow-400 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <div className="text-xs text-gray-400">Trusted by Professionals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Viziopath started with a common frustration: seeing talented individuals get overlooked simply because their resumes weren't optimized for modern hiring systems. We realized that while candidates had the skills, they lacked the tools to present them effectively.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We turned to LaTeX—the gold standard for document formatting—but knew it was too complex for the average user. So, we built a bridge. A platform that harnesses the power of LaTeX's precision engine but wraps it in an intuitive, easy-to-use interface.
              </p>
              <p className="text-lg text-gray-600">
                Today, Viziopath is more than just a resume builder. It's a career catalyst trusted by over 450,000+ users worldwide, helping them navigate the competitive job market with confidence and professionalism.
              </p>
              {/* Founder & CEO Section */}
              <div className="mt-10 flex items-center gap-4">
                <img
                  src="/ceo.JPG"
                  alt="Dharmendra Gupta"
                  className="w-20 h-20 rounded-full border-4 border-blue-600 shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dharmendra Gupta</h3>
                  <p className="text-blue-700 font-semibold">Founder &amp; CEO</p>
                  <p className="text-gray-600 text-sm mt-1">Passionate about democratizing career opportunities through technology.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our commitment"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600">
                To eliminate the "formatting barrier" in recruitment. We are on a mission to ensure that no qualified candidate is rejected by an ATS bot simply because of a poorly formatted document. We empower you to focus on your content while we handle the presentation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600">
                To become the global standard for professional resume creation. We envision a world where creating a high-quality, industry-standard CV is not a skill you need to learn, but a tool you can access freely and instantly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">Built on principles that put your career first</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Viziopath */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Viziopath?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We leverage technology to simplify your path to success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <Award className="h-10 w-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Precision Engineered</h3>
              <p className="text-blue-100">Our underlying LaTeX engine ensures flawless alignment, typography, and structure that word processors can't match.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <Users className="h-10 w-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Recruiter Approved</h3>
              <p className="text-blue-100">Templates designed with direct feedback from HR professionals to ensure they pass the 6-second scan.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <Globe className="h-10 w-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Compatibility</h3>
              <p className="text-blue-100">Accepted by Applicant Tracking Systems (ATS) and multinational corporations worldwide.</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
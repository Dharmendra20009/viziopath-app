import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Globe,
  Building,
  BookOpen,
  Code,
  Smartphone,
  Database,
  TrendingUp,
  PenTool,
  CheckCircle,
  ArrowRight,
  Star,
  BarChart,
  DollarSign,
  Settings,
  PieChart,
  Briefcase,
  Truck,
  ShoppingCart,
  HeartPulse,
  Calendar,
  Plane
} from 'lucide-react';



const Home = () => {
  const stats = [
    { number: '12,898+', label: 'Interns', icon: Users },
    { number: '187+', label: 'Colleges', icon: Building },
    { number: '135,000+', label: 'Top Tier Finishers', icon: Award },
    { number: '13+', label: 'Countries', icon: Globe },
  ];

  const highlights = [
    'AICTE Approved',
    'Trusted by Colleges',
    'Recognized by LinkedIn',
    'Own Internship Platform',
    'Mentoring by Big Tech',
    'Hiring Opportunities'
  ];

  const domains = [
    { name: 'Artificial Intelligence', icon: Code, color: 'bg-blue-100 text-blue-600' },
    { name: 'Web Development', icon: Globe, color: 'bg-green-100 text-green-600' },
    { name: 'Mobile App Dev', icon: Smartphone, color: 'bg-purple-100 text-purple-600' },
    { name: 'Data Science', icon: Database, color: 'bg-orange-100 text-orange-600' },
    { name: 'Digital Marketing', icon: TrendingUp, color: 'bg-pink-100 text-pink-600' },
    { name: 'UI/UX Design', icon: PenTool, color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Marketing Management', icon: BarChart, color: 'bg-yellow-100 text-yellow-600' },
  { name: 'Human Resource Management', icon: Users, color: 'bg-red-100 text-red-600' },
  { name: 'Finance & Accounting', icon: DollarSign, color: 'bg-lime-100 text-lime-600' },
  { name: 'Operations Management', icon: Settings, color: 'bg-slate-100 text-slate-600' },
  { name: 'International Business', icon: Globe, color: 'bg-cyan-100 text-cyan-600' },
  { name: 'Business Analytics', icon: PieChart, color: 'bg-teal-100 text-teal-600' },
  { name: 'Entrepreneurship', icon: Briefcase, color: 'bg-violet-100 text-violet-600' },
  { name: 'Supply Chain Management', icon: Truck, color: 'bg-amber-100 text-amber-600' },
  { name: 'Retail Management', icon: ShoppingCart, color: 'bg-rose-100 text-rose-600' },
  { name: 'Healthcare Management', icon: HeartPulse, color: 'bg-emerald-100 text-emerald-600' },
  { name: 'Event Management', icon: Calendar, color: 'bg-fuchsia-100 text-fuchsia-600' },
  { name: 'Hospitality & Tourism', icon: Plane, color: 'bg-sky-100 text-sky-600' },
  ];

  const certifications = [
    'MCA', 'MSME', 'ISO', 'AICTE', 'Startup India'
  ];

  const testimonials = [
    {
      name: "Anjali Singh",
      role: "Operations Manager at ZARZO",
      content: "Viziopath transformed my career. The mentorship and real-world projects prepared me for big tech challenges.",
      rating: 5
    },
    {
      name: "Ranjeet Kumar",
      role: "Full Stack Developer",
      content: "Amazing experience! The hands-on training and industry connections helped me land my dream job.",
      rating: 5
    },
    {
      name: "Sneha Gupta",
      role: "Data Scientist",
      content: "The AI program at Viziopath is exceptional. Expert mentors and cutting-edge curriculum.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Arrive with dreams,{' '}
                <span className="text-teal-400">leave with skills,</span>{' '}
                experience
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                Transforming aspirations into expertise. Journey with us from imaginative visions to real-world experience.
              </p>
              <Link
                to="/apply"
                className="inline-flex items-center bg-teal-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 transition-colors group"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Makes Us Different?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              <strong>Viziopath, powered by CodeClause:</strong> Where Technology Meets Talent.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our internship program focuses on real-world tech innovation, mentorship from industry leaders, 
              and meaningful career-building experiences that prepare you for success.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4 hover:shadow-xl transition-shadow"
              >
                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" />
                <span className="text-lg font-semibold text-gray-900">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Global Impact
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-teal-400" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Domains */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Internship Domains</h2>
            <p className="text-xl text-gray-600">Diverse Tech and Non-Tech opportunities to match your passion</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className={`inline-flex p-4 rounded-lg ${domain.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <domain.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{domain.name}</h3>
                <p className="text-gray-600">Professional training with industry-standard tools and mentorship</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Interns Say</h2>
            <p className="text-xl text-gray-600">Success stories from our global community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Official Recognition</h2>
            <p className="text-xl text-gray-600 mb-12">Certified and trusted by leading organizations</p>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-100 px-8 py-4 rounded-lg font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
           
            <a
              href="mailto:viziopath@gmail.com"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Dharmendra Gupta
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful interns who have launched their careers with Viziopath
            </p>
            <Link
              to="/apply"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
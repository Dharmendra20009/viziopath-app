import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every training program and internship opportunity we provide.'
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Industry experts guide every intern through personalized mentorship programs.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting talent worldwide with opportunities that transcend geographical boundaries.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and innovative learning methodologies.'
    }
  ];

  const methodology = [
    {
      step: '01',
      title: 'Assessment & Onboarding',
      description: 'Comprehensive skill assessment and personalized learning path creation.'
    },
    {
      step: '02',
      title: 'Structured Learning',
      description: 'Industry-relevant curriculum with hands-on projects and real-world scenarios.'
    },
    {
      step: '03',
      title: 'Mentorship & Guidance',
      description: 'One-on-one mentorship from industry experts and career guidance.'
    },
    {
      step: '04',
      title: 'Project Implementation',
      description: 'Work on live projects that contribute to your portfolio and experience.'
    },
    {
      step: '05',
      title: 'Career Placement',
      description: 'Job placement assistance and networking opportunities with top companies.'
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
            <h1 className="text-5xl font-bold mb-6">About Viziopath</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering the next generation of tech professionals through comprehensive training and meaningful internship experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the gap between academic learning and industry requirements, 
                Viziopath has emerged as a leading platform for technical training and internships. 
                Powered by Innovation and Industry Insight, we combine technological expertise with educational excellence.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple belief: every student deserves access to quality education 
                and real-world experience that prepares them for successful careers in technology and beyond.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have trained over 13,661 interns from 187+ colleges across 13 countries, 
                with recognition from AICTE and other prestigious organizations.
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
                  <p className="text-gray-600 text-sm mt-1">Leading Viziopath with a passion for empowering students and bridging the gap between education and industry.</p>
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
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600">
                To democratize access to quality technical education and provide students with practical, 
                industry-relevant skills that enable them to excel in their chosen careers. We're committed 
                to creating a bridge between academic knowledge and professional requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600">
                To become the global leader in technical education and internship programs, fostering 
                innovation and excellence while empowering individuals to transform their aspirations 
                into successful, fulfilling careers in technology.
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
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
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
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Viziopath?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're not just another training platform. We're your career transformation partner.
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
              <h3 className="text-xl font-semibold mb-3">Industry Recognition</h3>
              <p className="text-blue-100">AICTE approved with recognition from LinkedIn and trusted by 300+ colleges worldwide.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <Users className="h-10 w-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Mentorship</h3>
              <p className="text-blue-100">Learn from industry professionals working at top tech companies like Google, Microsoft, and Amazon.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <Globe className="h-10 w-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Network</h3>
              <p className="text-blue-100">Connect with a worldwide community of learners and professionals across 43 countries.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internship Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Methodology</h2>
            <p className="text-xl text-gray-600">A proven 5-step process that ensures your success</p>
          </motion.div>

          <div className="space-y-8">
            {methodology.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
              >
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        {item.step}
                      </span>
                      <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src={`https://images.pexels.com/photos/${3184291 + index}/pexels-photo-${3184291 + index}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt={item.title}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
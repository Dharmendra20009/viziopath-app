import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Globe, Award, Mail, Phone } from 'lucide-react';

const MOUs = () => {
  const partnerships = [
    {
      name: 'Indian Institute of Technology (IIT)',
      type: 'Academic Institution',
      description: 'Collaborative research programs and student exchange initiatives in emerging technologies.',
      students: '500+',
      programs: 'AI, ML, Data Science'
    },
    {
      name: 'National Institute of Technology (NIT)',
      type: 'Academic Institution', 
      description: 'Joint internship programs and curriculum development for computer science students.',
      students: '800+',
      programs: 'Web Dev, Mobile Apps'
    },
    {
      name: 'Manipal Institute of Technology',
      type: 'Academic Institution',
      description: 'Industry-academia collaboration for practical training and skill development.',
      students: '200+',
      programs: 'Full Stack, DevOps'
    },
    {
      name: 'SRM Institute of Science and Technology',
      type: 'Academic Institution',
      description: 'Comprehensive internship programs and career development initiatives.',
      students: '1,100+',
      programs: 'Cloud Computing, Cybersecurity'
    },
    {
      name: 'VIT University',
      type: 'Academic Institution',
      description: 'Technical training partnerships and placement assistance programs.',
      students: '900+',
      programs: 'IoT, Blockchain'
    },
    {
      name: 'Lovely Professional University',
      type: 'Academic Institution',
      description: 'Student training programs and industry-ready skill development.',
      students: '1,000+',
      programs: 'Digital Marketing, UI/UX'
    }
  ];

  const industryPartners = [
    {
      name: 'ZARZO',
      type: 'Industry Partner',
      description: 'Providing real-world project opportunities and mentorship for interns.',
      focus: 'Enterprise Solutions'
    },
    {
      name: 'CAREERHUBS',
      type: 'Industry Partner', 
      description: 'Collaborative training programs and direct recruitment opportunities.',
      focus: 'Digital Transformation'
    },
    {
      name: 'Anshu PVT. LTD.',
      type: 'Industry Partner',
      description: 'Joint certification programs and career advancement pathways.',
      focus: 'Software Development'
    },
    {
      name: 'Aringo tech',
      type: 'Industry Partner',
      description: 'Internship placements and professional development programs.',
      focus: 'Consulting Services'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Industry Exposure',
      description: 'Direct access to real-world projects and industry professionals'
    },
    {
      icon: Award,
      title: 'Certified Programs',
      description: 'Joint certifications recognized by both academia and industry'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'International collaboration opportunities and cultural exchange'
    },
    {
      icon: Building,
      title: 'Infrastructure',
      description: 'Access to state-of-the-art facilities and cutting-edge technology'
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
            <h1 className="text-5xl font-bold mb-6">MOUs & Collaborations</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Building bridges between academia and industry through strategic partnerships that benefit students, institutions, and organizations alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnership Benefits</h2>
            <p className="text-xl text-gray-600">Why institutions and companies choose to collaborate with Viziopath</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Academic Partnerships</h2>
            <p className="text-xl text-gray-600">Collaborating with premier educational institutions across India</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {partner.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                    <span>Students Enrolled:</span>
                    <span className="font-semibold text-gray-900">{partner.students}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Focus Areas:</span>
                    <span className="font-semibold text-gray-900">{partner.programs}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Partnerships</h2>
            <p className="text-xl text-gray-600">Working with leading technology companies for practical exposure</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-2 rounded-lg mr-3">
                    <Award className="h-6 w-6 text-teal-600" />
                  </div>
                  <span className="text-sm font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                    {partner.type}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Focus Area:</span>
                    <span className="font-semibold text-gray-900">{partner.focus}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Request */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our network of prestigious institutions and industry leaders. Let's create meaningful opportunities for students together.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Ready to Collaborate?</h3>
              <p className="text-blue-100 mb-8">
                We're always looking for new partnerships that can benefit students and advance education. 
                Contact us to discuss collaboration opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>viziopath@gmail.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+91 6203757233</span>
                </div>
              </div>
              
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Partnership
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MOUs;
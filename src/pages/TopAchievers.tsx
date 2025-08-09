import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Linkedin, Github, ExternalLink } from 'lucide-react';

const TopAchievers = () => {
  const achievers = [
    {
      id: 1,
      name: 'Harshit Sharma',
      domain: 'Artificial Intelligence',
      company: 'Google',
      position: 'AI Engineer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Viziopath transformed my understanding of AI. The mentorship and hands-on projects prepared me perfectly for my role at Google.',
      achievements: ['Published 3 research papers', 'Led AI team of 12 members', 'Patent holder'],
      rating: 5,
      linkedin: '#',
      github: '#'
    },
    {
      id: 2,
      name: 'Rahul Patel',
      domain: 'Full Stack Development',
      company: 'Microsoft',
      position: 'Senior Software Engineer',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The comprehensive training at Viziopath gave me the confidence to tackle complex projects. Now I lead a team at Microsoft.',
      achievements: ['Architected 5 major systems', 'Mentor to 20+ developers', 'Microsoft MVP'],
      rating: 5,
      linkedin: '#',
      github: '#'
    },
    {
      id: 3,
      name: 'Sneha Gupta',
      domain: 'Data Science',
      company: 'Amazon',
      position: 'Principal Data Scientist',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The data science program exceeded my expectations. The real-world projects and expert mentorship were invaluable.',
      achievements: ['Led ML initiatives', 'Improved efficiency by 40%', 'Conference speaker'],
      rating: 5,
      linkedin: '#',
      github: '#'
    },
    {
      id: 4,
      name: 'Arjun Singh',
      domain: 'Mobile Development',
      company: 'Meta',
      position: 'Mobile Architect',
      image: 'https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Viziopath provided the perfect blend of theory and practice. The mobile development track set me up for success at Meta.',
      achievements: ['Built apps with 10M+ users', 'Tech lead for 3 products', 'Mobile innovation award'],
      rating: 5,
      linkedin: '#',
      github: '#'
    },
    {
      id: 5,
      name: 'Kavya Reddy',
      domain: 'UI/UX Design',
      company: 'Adobe',
      position: 'Senior UX Designer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The design thinking approach and portfolio development at Viziopath helped me land my dream job at Adobe.',
      achievements: ['Designed 15+ award-winning interfaces', 'UX team lead', 'Design mentor'],
      rating: 5,
      linkedin: '#',
      github: '#'
    },
    {
      id: 6,
      name: 'Karthik Kumar',
      domain: 'DevOps Engineering',
      company: 'Netflix',
      position: 'DevOps Architect',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The DevOps training was comprehensive and practical. I gained skills that directly translated to success at Netflix.',
      achievements: ['Managed infrastructure for 200M+ users', 'Reduced deployment time by 60%', 'Cloud architecture expert'],
      rating: 5,
      linkedin: '#',
      github: '#'
    },
    {
      id: 7,
      name: 'Ananya Joshi',
      domain: 'Digital Marketing',
      company: 'Shopify',
      position: 'Growth Marketing Manager',
      image: 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The digital marketing program gave me both strategic thinking and practical skills. I doubled user acquisition at Shopify.',
      achievements: ['Increased user growth by 150%', 'Led global campaigns', 'Marketing innovation award'],
      rating: 5,
      linkedin: '#',
      github: '#'
    },
    {
      id: 8,
      name: 'Vikram Mehta',
      domain: 'Cybersecurity',
      company: 'Tesla',
      position: 'Security Engineer',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The cybersecurity program at Viziopath prepared me for the complex security challenges at Tesla.',
      achievements: ['Prevented 50+ security breaches', 'Security framework architect', 'Industry speaker'],
      rating: 5,
      linkedin: '#',
      github: '#'
    }
  ];

  const stats = [
    { number: '1,35,000+', label: 'Top Tier Finishers' },
    { number: '65%', label: 'Placement Rate' },
    { number: '₹4L+', label: 'Average Package' },
    { number: '8+', label: 'Partner Companies' }
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
            <h1 className="text-5xl font-bold mb-6">Top Achievers</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet our exceptional interns who have gone on to achieve remarkable success in leading technology companies worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Achievers Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600">Alumni who are making their mark in the tech industry</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {achievers.map((achiever, index) => (
              <motion.div
                key={achiever.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={achiever.image}
                    alt={achiever.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center">
                      {[...Array(achiever.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {achiever.domain}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{achiever.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{achiever.position}</p>
                  <p className="text-gray-600 mb-4">{achiever.company}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {achiever.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="text-sm text-gray-600 italic mb-4 border-l-4 border-blue-200 pl-3">
                    "{achiever.testimonial}"
                  </blockquote>

                  <div className="flex space-x-3 pt-4 border-t">
                    <a
                      href={achiever.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={achiever.github}
                      className="text-gray-400 hover:text-gray-900 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <button className="text-gray-400 hover:text-blue-600 transition-colors ml-auto">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certification Excellence</h2>
            <p className="text-xl text-gray-600">Industry-recognized certifications that validate expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Certificates</h3>
              <p className="text-gray-600">Industry-standard certifications in various technology domains</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-12 w-12 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence Badges</h3>
              <p className="text-gray-600">Recognition for outstanding performance and project achievements</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-12 w-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">LinkedIn Verified</h3>
              <p className="text-gray-600">LinkedIn-verified skills and accomplishments showcase</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your journey today and become the next success story that inspires others.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TopAchievers;
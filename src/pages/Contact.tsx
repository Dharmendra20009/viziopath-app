import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'Viziopath',
        'Khushi Tola, Near Khiriya Ghat',
        'Bettiah, Bihar 845438, India'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 6203757233',
        '+91 6203757233 (WhatsApp)'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'viziopath@gmail.com',
        'support@viziopath.info'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const subjects = [
    'General Inquiry',
    'Internship Program',
    'Partnership Opportunity',
    'Technical Support',
    'Billing/Payment',
    'Career Guidance',
    'Other'
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
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions about our programs? Want to discuss partnership opportunities? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us for your convenience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Google Maps Embed */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 bg-blue-600 text-white">
                  <h3 className="text-xl font-semibold flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Visit Our Office
                  </h3>
                </div>
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.234964234019!2d84.5117553150277!3d26.80278598317613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935c1e2e2e2e2f%3A0x7e7e7e7e7e7e7e7e!2sKhushi%20Tola%2C%20Bettiah%2C%20Bihar%20845438%2C%20India!5e0!3m2!1sen!2sin!4v1691145600000"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Viziopath Office Location"
                  ></iframe>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <Phone className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">Call Now</span>
                  </div>
                  <p className="text-green-700 text-sm mb-2">For immediate assistance</p>
                  <p className="text-green-900 font-medium">+91 80 6218 1320</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center mb-3">
                    <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-blue-800">WhatsApp</span>
                  </div>
                  <p className="text-blue-700 text-sm mb-2">Quick chat support</p>
                  <p className="text-blue-900 font-medium">+91 77758 10097</p>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Response Times</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Email Inquiries</span>
                    <span className="text-blue-600 font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Phone Calls</span>
                    <span className="text-blue-600 font-medium">Immediate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">WhatsApp Messages</span>
                    <span className="text-blue-600 font-medium">Within 2 hours</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long do internship programs typically last?",
                answer: "Our internship programs are flexible and can range from 4 weeks to 6 months, depending on the domain and your availability."
              },
              {
                question: "Is there any fee for the internship program?",
                answer: "Our basic internship programs are free. We also offer premium tracks with advanced features and one-on-one mentorship."
              },
              {
                question: "Do you provide certificates upon completion?",
                answer: "Yes, we provide AICTE-approved certificates and LinkedIn-verified skill badges upon successful completion of the program."
              },
              {
                question: "Can international students apply?",
                answer: "Absolutely! We welcome students from all countries. Our programs are conducted online, making them accessible globally."
              },
              {
                question: "What are the technical requirements?",
                answer: "You need a computer with stable internet connection. Specific software requirements vary by domain and will be communicated during onboarding."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, ChevronDown, ChevronUp } from 'lucide-react';
import { apiRequest } from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Try primary route
      try {
        await apiRequest('/api/contact', {
          method: 'POST',
          body: JSON.stringify(formData),
        });
      } catch (primaryErr) {
        // Fallback: some backends expose the route without the /api prefix
        await apiRequest('/contact', {
          method: 'POST',
          body: JSON.stringify(formData),
        });
      }
      alert('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      const message = (err as any)?.message || 'Failed to send message. Please try again.';
      console.error('Contact submit failed:', err);
      alert(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      details: [
        'Viziopath, Khushi Tola',
        'Near Khiriya Ghat, Bettiah',
        'Bihar 845438, India'
      ],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      details: [
        '+91 9507629432', '+91 6203757233',
        'Available 24/7 for urgent calls'
      ],
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'viziopath@gmail.com',
        'support@viziopath.info'
      ],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Mon - Fri: 9:00 AM - 6:00 PM',
        'Sat: 10:00 AM - 4:00 PM'
      ],
      color: "bg-orange-50 text-orange-600"
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

  const faqs = [
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
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 text-white py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              We'd love to hear from you
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-200">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Whether you have a question about our programs, partnerships, or just want to say hello, our team is ready to answer all your questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Floating Info Cards */}
      <section className="relative -mt-20 z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${info.color}`}>
                <info.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-500 text-sm font-medium">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left: Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                  <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Send a Message</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Start a Conversation</h2>
                <p className="text-slate-500 mb-10 text-lg">
                  Fill out the form below and we will get back to you within 24 hours. No spam, ever.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-300"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-300"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Phone (Optional)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-300"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Subject</label>
                      <div className="relative">
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none text-slate-700"
                          required
                        >
                          <option value="" disabled>Select a topic...</option>
                          {subjects.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-300 resize-none"
                      placeholder="How can we help you today?"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Right: Map & FAQ */}
            <div className="lg:col-span-5 space-y-10">

              {/* Map Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-2 rounded-3xl shadow-lg border border-gray-100"
              >
                <div className="bg-slate-100 rounded-2xl overflow-hidden h-80 relative group">
                  <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur text-sm font-bold px-4 py-2 rounded-full shadow-sm text-blue-900">Get Directions</span>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.234964234019!2d84.5117553150277!3d26.80278598317613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935c1e2e2e2e2f%3A0x7e7e7e7e7e7e7e7e!2sKhushi%20Tola%2C%20Bettiah%2C%20Bihar%20845438%2C%20India!5e0!3m2!1sen!2sin!4v1691145600000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Viziopath Office Location"
                    className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-slate-200/50 p-8"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequent Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                        className="w-full flex items-center justify-between text-left focus:outline-none group"
                      >
                        <span className={`font-semibold transition-colors ${openFaqIndex === index ? 'text-blue-600' : 'text-slate-700 group-hover:text-blue-600'}`}>
                          {faq.question}
                        </span>
                        {openFaqIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="pt-3 text-slate-500 text-sm leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
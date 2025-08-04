import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, CheckCircle, ArrowRight, Users, Award, Clock, Globe } from 'lucide-react';

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domain: '',
    resume: null,
    linkedin: '',
    experience: '',
    motivation: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const domains = [
    'Artificial Intelligence',
    'Web Development',
    'Mobile App Development',
    'Data Science',
    'Digital Marketing',
    'UI/UX Design',
    'DevOps Engineering',
    'Cybersecurity',
    'Cloud Computing',
    'Blockchain Technology'
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'One-on-one guidance from industry professionals working at top tech companies'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'AICTE approved certificates and LinkedIn verified skills upon completion'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Self-paced learning with flexible schedules to fit your academic commitments'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with peers and professionals from 43+ countries worldwide'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Application Submission',
      description: 'Submit your application with required documents and preferences'
    },
    {
      step: '02',
      title: 'Skill Assessment',
      description: 'Complete a domain-specific assessment to evaluate your current skill level'
    },
    {
      step: '03',
      title: 'Interview & Selection',
      description: 'Participate in a brief interview to discuss your goals and expectations'
    },
    {
      step: '04',
      title: 'Onboarding',
      description: 'Get onboarded with your mentor and start your learning journey'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl font-bold mb-6">Apply Now</h1>
              <p className="text-xl text-blue-100 mb-8">
                Take the first step towards transforming your career with industry-leading training and mentorship.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">73,898+</div>
                  <div className="text-blue-200">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">85%</div>
                  <div className="text-blue-200">Placement Rate</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students applying"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Join Viziopath?</h2>
            <p className="text-xl text-gray-600">Discover the benefits of our comprehensive internship program</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Start Your Application</h2>
            <p className="text-xl text-gray-600">Complete the form below to begin your journey with us</p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="h-6 w-6" /> : step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Domain and Experience */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Domain & Experience</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Domain of Interest *
                    </label>
                    <select
                      name="domain"
                      value={formData.domain}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select your domain</option>
                      {domains.map((domain) => (
                        <option key={domain} value={domain}>
                          {domain}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Previous Experience
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your previous experience, projects, or relevant skills..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resume Upload *
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                            <span>Upload a file</span>
                            <input
                              type="file"
                              name="resume"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx"
                              className="sr-only"
                              required
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                        {formData.resume && (
                          <p className="text-sm text-green-600 mt-2">
                            ✓ {(formData.resume as File).name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Motivation */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Yourself</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join Viziopath? *
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Share your motivation, career goals, and what you hope to achieve through this internship..."
                    required
                  />
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Application Review Process:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Applications are reviewed within 2-3 business days</li>
                    <li>• Shortlisted candidates will receive an assessment link</li>
                    <li>• Final selection involves a brief interview</li>
                    <li>• Successful candidates start within 1 week</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handlePrevious}
                className={`px-6 py-3 rounded-lg font-semibold ${
                  currentStep === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                >
                  Next
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center"
                >
                  Submit Application
                  <CheckCircle className="ml-2 h-5 w-5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Application Process</h2>
            <p className="text-xl text-gray-600">Your journey from application to internship</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
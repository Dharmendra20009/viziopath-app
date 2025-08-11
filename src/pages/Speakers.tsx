import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Play, ExternalLink } from 'lucide-react';

const Speakers = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Future of AI in Healthcare',
      speaker: 'Dr. Sarah Johnson',
      speakerRole: 'AI Research Director, Google Health',
      date: '2025-09-05',
      time: '4:00 PM IST',
      venue: 'Virtual Event',
      attendees: 500,
      description: 'Exploring how artificial intelligence is revolutionizing healthcare delivery and patient outcomes.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      registrationOpen: true
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Architecture',
      speaker: 'Michael Chen',
      speakerRole: 'Cloud Architect, Amazon Web Services',
      date: '2025-09-05',
      time: '4:00 PM IST',
      venue: 'Virtual Event',
      attendees: 300,
      description: 'Best practices for designing and implementing scalable cloud solutions for modern applications.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      registrationOpen: true
    },
    {
      id: 3,
      title: 'Product Management in Tech Startups',
      speaker: 'Priya Sharma',
      speakerRole: 'VP Product, Stripe',
      date: '2025-09-05',
      time: '4:00 PM IST',
      venue: 'Virtual Event',
      attendees: 400,
      description: 'Insights into product strategy, user research, and growth metrics in high-growth tech companies.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      registrationOpen: true
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Machine Learning in Production',
      speaker: 'Dr. Raj Patel',
      speakerRole: 'ML Engineer, Tesla',
      date: '2025-09-05',
      attendees: 750,
      recording: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      isOnline: true,
      highlights: ['MLOps best practices', 'Model deployment strategies', 'Monitoring ML systems'],
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      speaker: 'Lisa Wong',
      speakerRole: 'Frontend Architect, Meta',
      date: '2025-09-05',
      attendees: 600,
      recording: '#',
      isOnline: false,
      highlights: ['Next.js 15 features', 'Performance optimization', 'Modern CSS techniques'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends 2025',
      speaker: 'David Kumar',
      speakerRole: 'Security Lead, Microsoft',
      date: '2024-09-05',
      attendees: 450,
      recording: '#',
      isOnline: false,
      highlights: ['Zero-trust architecture', 'AI-powered threat detection', 'Cloud security'],
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Design Systems at Scale',
      speaker: 'Anna Rodriguez',
      speakerRole: 'Design Director, Airbnb',
      date: '2024-09-05',
      attendees: 380,
      recording: '#',
      isOnline: false,
      highlights: ['Component libraries', 'Design tokens', 'Cross-team collaboration'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const [playingEventId, setPlayingEventId] = useState<number | null>(null);
  const [isPaying, setIsPaying] = useState(false);
  const [paidEventIds, setPaidEventIds] = useState<number[]>([]);

  // Load Razorpay script once
  useEffect(() => {
    const scriptId = 'razorpay-checkout-js';
    if (document.getElementById(scriptId)) return;
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Note: Video unlock happens only after successful payment

  // Workshops data
  const shortPrograms = [
    { id: 'excel', name: 'MS Excel', originalPrice: 399, finalPrice: 199, discount: 50 },
    { id: 'word', name: 'MS Word', originalPrice: 399, finalPrice: 199, discount: 50 },
    { id: 'ppt', name: 'MS PowerPoint', originalPrice: 399, finalPrice: 199, discount: 50 },
    { id: 'pbi', name: 'Power BI', originalPrice: 799, finalPrice: 389, discount: 51 },
    { id: 'seo', name: 'SEO', originalPrice: 899, finalPrice: 449, discount: 50 },
    { id: 'mkt', name: 'Marketing', originalPrice: 1299, finalPrice: 649, discount: 50 },
    { id: 'dm', name: 'Digital Marketing', originalPrice: 1999, finalPrice: 999, discount: 50 },
    { id: 'ops', name: 'Operations Management', originalPrice: 1999, finalPrice: 999, discount: 50 },
    { id: 'ent', name: 'Entrepreneurship', originalPrice: 1999, finalPrice: 999, discount: 50 },
    { id: 'bnf', name: 'Banking and finance', originalPrice: 2399, finalPrice: 1199, discount: 50 },
    { id: 'ba', name: 'Business Analytics', originalPrice: 2399, finalPrice: 1199, discount: 50 },
  ];

  const bcaPrograms = [
    { id: 'web', name: 'Web development', originalPrice: 1599, finalPrice: 799, discount: 50 },
    { id: 'dbm', name: 'Database Management', originalPrice: 1399, finalPrice: 699, discount: 50 },
    { id: 'py', name: 'Python', originalPrice: 1399, finalPrice: 699, discount: 50 },
    { id: 'mysql', name: 'MySQL', originalPrice: 1399, finalPrice: 699, discount: 50 },
    { id: 'html', name: 'HTML', originalPrice: 1399, finalPrice: 699, discount: 50 },
    { id: 'da', name: 'Data Analytics', originalPrice: 2399, finalPrice: 1199, discount: 50 },
  ];

  const startWorkshopPayment = async (amountInRupees: number, programName: string) => {
    try {
      setIsPaying(true);
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Math.round(amountInRupees * 100), currency: 'INR', receipt: `ws_${programName}_${Date.now()}` }),
      });
      const order = await orderRes.json();
      const options: any = {
        key: (import.meta as any).env.VITE_RAZORPAY_KEY_ID,
        name: 'Viziopath',
        description: programName,
        order_id: order.id,
        handler: async (response: any) => {
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              order_id: response.razorpay_order_id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              userId: 1,
            }),
          });
          const verify = await verifyRes.json();
          if (verify.ok) {
            alert('Enrollment successful!');
          } else {
            alert('Payment verification failed');
          }
        },
        theme: { color: '#2563eb' },
        prefill: {},
      };
      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (e) {
      alert('Unable to start payment');
    } finally {
      setIsPaying(false);
    }
  };

  const speakers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'AI Research Director',
      company: 'Google Health',
      bio: 'Leading AI research initiatives in healthcare with 15+ years of experience in machine learning and medical applications.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Artificial Intelligence', 'Healthcare Technology', 'Machine Learning']
    },
    {
      name: 'Michael Chen',
      role: 'Cloud Architect',
      company: 'Amazon Web Services',
      bio: 'Expert in cloud infrastructure and scalable system design, helping enterprises migrate to cloud-native architectures.',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design']
    },
    {
      name: 'Priya Sharma',
      role: 'VP Product',
      company: 'Stripe',
      bio: 'Product leader with expertise in fintech, growth strategies, and building products that scale to millions of users.',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Product Management', 'Fintech', 'Growth Strategy']
    },
    {
      name: 'Dr. Raj Patel',
      role: 'ML Engineer',
      company: 'Tesla',
      bio: 'Machine learning expert focusing on autonomous systems and production ML pipelines for self-driving cars.',
      image: 'https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Machine Learning', 'Autonomous Systems', 'MLOps']
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
            <h1 className="text-5xl font-bold mb-6">Speakers & Trainings</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Learn from industry leaders and technology experts through our comprehensive training programs and speaker series.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">1–2 Week Programs</h2>
            <p className="text-gray-600">Short, intensive workshops to quickly upskill</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortPrograms.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 6) * 0.05 }}
                className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-6 flex flex-col"
              >
                <div className="relative">
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {p.discount}% off
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                </div>
                <div className="mt-3 space-y-1">
                  <div className="text-gray-500 line-through text-sm">₹{p.originalPrice}</div>
                  <div className="text-red-600 font-bold text-xl">₹{p.finalPrice}</div>
                </div>
                <div className="mt-auto pt-4">
                  <button
                    disabled={isPaying}
                    onClick={() => startWorkshopPayment(p.finalPrice, p.name)}
                    className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    Enroll
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops for BCA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">For BCA</h2>
            <p className="text-gray-600">Curated programs for BCA students</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bcaPrograms.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 6) * 0.05 }}
                className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow p-6 flex flex-col"
              >
                <div className="relative">
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {p.discount}% off
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                </div>
                <div className="mt-3 space-y-1">
                  <div className="text-gray-500 line-through text-sm">₹{p.originalPrice}</div>
                  <div className="text-red-600 font-bold text-xl">₹{p.finalPrice}</div>
                </div>
                <div className="mt-auto pt-4">
                  <button
                    disabled={isPaying}
                    onClick={() => startWorkshopPayment(p.finalPrice, p.name)}
                    className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    Enroll
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join our next sessions with industry experts</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Upcoming
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{event.speaker}</p>
                  <p className="text-gray-600 text-sm mb-4">{event.speakerRole}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.venue}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees} expected attendees
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{event.description}</p>

                  {event.registrationOpen && (
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Register Now
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Speakers</h2>
            <p className="text-xl text-gray-600">Industry leaders sharing their expertise with our community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{speaker.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{speaker.company}</p>
                  <p className="text-gray-600 text-sm mb-4">{speaker.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses and Workshops */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Workshops & Events</h2>
            <p className="text-xl text-gray-600">Catch up on sessions you might have missed</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    {paidEventIds.includes(event.id) && playingEventId === event.id && event.recording ? (
                      /\.(mp4|webm|ogg)(\?.*)?$/i.test(String(event.recording)) ? (
                        <video
                          controls
                          className="w-full h-48 md:h-full object-cover"
                          src={event.recording}
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <iframe
                          className="w-full h-48 md:h-full"
                          src={event.recording}
                          title={`${event.title} recording`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      )
                    ) : (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6 md:w-1/2">
                    <div className="flex items-center mb-2">
                      <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                        Workshops & Events
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{event.speaker}</p>
                    <p className="text-gray-600 text-sm mb-4">{event.speakerRole}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {event.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{event.attendees} attendees</span>
                      {event.recording ? (
                        <div className="flex items-center gap-4">
                          {paidEventIds.includes(event.id) ? (
                            <button
                              onClick={() => setPlayingEventId(prev => prev === event.id ? null : event.id)}
                              className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                            >
                              <Play className="h-4 w-4 mr-1" />
                              {playingEventId === event.id ? 'Hide Video' : 'Watch Recording'}
                            </button>
                          ) : (
                            <button
                              disabled={isPaying}
                              onClick={async () => {
                                try {
                                  setIsPaying(true);
                                  const orderRes = await fetch('/api/create-order', { method: 'POST' });
                                  const order = await orderRes.json();
                                  const options: any = {
                                    key: (import.meta as any).env.VITE_RAZORPAY_KEY_ID,
                                    name: 'Viziopath',
                                    description: event.title,
                                    order_id: order.id,
                                    handler: async (response: any) => {
                                      const verifyRes = await fetch('/api/verify-payment', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({
                                          order_id: response.razorpay_order_id,
                                          payment_id: response.razorpay_payment_id,
                                          signature: response.razorpay_signature,
                                          userId: 1,
                                        }),
                                      });
                                      const verify = await verifyRes.json();
                                      if (verify.ok) {
                                        setPaidEventIds(prev => Array.from(new Set([...prev, event.id])));
                                        setPlayingEventId(event.id);
                                      } else {
                                        alert('Payment verification failed');
                                      }
                                    },
                                    theme: { color: '#2563eb' },
                                    prefill: {},
                                  };
                                  // @ts-ignore
                                  const rzp = new window.Razorpay(options);
                                  rzp.open();
                                } catch (e) {
                                  alert('Unable to start payment');
                                } finally {
                                  setIsPaying(false);
                                }
                              }}
                              className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm disabled:opacity-50"
                            >
                              Pay & Unlock
                            </button>
                          )}
                          {paidEventIds.includes(event.id) && /^https?:\/\//i.test(String(event.recording)) && (
                            <a
                              href={String(event.recording)}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Open
                            </a>
                          )}
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">Recording coming soon</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Want to Speak at Viziopath?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Share your expertise with our global community of learners and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Become a Speaker
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View All Events
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;
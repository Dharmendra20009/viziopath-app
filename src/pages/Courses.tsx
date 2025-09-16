import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  const isPaying = false;
  const [playingProgramId, setPlayingProgramId] = useState<string | null>(null);

  const shortPrograms = [
    { id: 'excel', name: 'MS Excel', originalPrice: 399, finalPrice: 199, discount: 50, image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Master Excel formulas, pivot tables, and data analysis techniques', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'word', name: 'MS Word', originalPrice: 399, finalPrice: 199, discount: 50, image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Learn advanced document formatting and professional writing skills', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'ppt', name: 'MS PowerPoint', originalPrice: 399, finalPrice: 199, discount: 50, image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Create stunning presentations with advanced design techniques', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'pbi', name: 'Power BI', originalPrice: 799, finalPrice: 389, discount: 51, image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Transform data into interactive visualizations and reports', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
  ];

  const bcaPrograms = [
    { id: 'web', name: 'Web Development', originalPrice: 1599, finalPrice: 799, discount: 50, image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Build modern, responsive websites with latest technologies', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'py', name: 'Python Programming', originalPrice: 1399, finalPrice: 699, discount: 50, image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Learn Python fundamentals and advanced programming concepts', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
  ];

  // 55+ course catalog (tags)
  const allCourses: string[] = [
    'Data Structures & Algorithms (DSA)',
    'Data Analyst',
    'Data Science',
    'Python Programming',
    'SQL',
    'Excel Essentials',
    'Advanced Excel',
    'Power BI',
    'Tableau',
    'Statistics for Data Science',
    'Machine Learning',
    'Deep Learning',
    'NLP Basics',
    'Computer Vision',
    'Big Data Fundamentals',
    'Apache Spark',
    'Hadoop',
    'ETL & Data Warehousing',
    'Data Visualization',
    'Business Analytics',
    'Product Analytics',
    'A/B Testing',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'NoSQL Basics',
    'R Programming',
    'Pandas & NumPy',
    'Scikit-learn',
    'TensorFlow/Keras',
    'Git & GitHub',
    'Linux for Developers',
    'Web Development Basics',
    'HTML & CSS',
    'JavaScript',
    'TypeScript',
    'React Fundamentals',
    'Node.js & Express',
    'REST APIs',
    'Next.js',
    'Docker Basics',
    'Kubernetes Intro',
    'Cloud Fundamentals (AWS)',
    'DevOps Foundations',
    'Microservices Basics',
    'System Design Basics',
    'Cybersecurity Fundamentals',
    'Networking Basics',
    'OOP in Java',
    'C++ Programming',
    'C Programming',
    'Android (Kotlin) Basics',
    'iOS (Swift) Basics',
    'UI/UX Fundamentals',
    'Figma for Beginners',
    'Agile & Scrum',
    'Project Management Basics',
    'Soft Skills for Tech',
    'Interview Preparation',
  ];

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
    }
  ];

  // Optional: past events listing can be added later

  const startWorkshopPayment = (amountInRupees: number, programName: string) => {
    navigate(`/payment?program=${encodeURIComponent(programName)}&amount=${amountInRupees}&id=${Date.now()}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-5xl font-bold mb-6">Courses & Trainings</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Learn from industry experts through our curated courses and workshops.
            </p>
          </motion.div>
        </div>
      </section>

      

      {/* Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Courses</h2>
            <p className="text-gray-600">Intensive workshops to quickly upskill</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {shortPrograms.map((p, idx) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 6) * 0.05 }} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 relative">
                    {playingProgramId === p.id ? (
                      <video controls className="w-full h-48 md:h-full object-cover" src={p.video}>
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img src={p.image} alt={p.name} className="w-full h-48 md:h-full object-cover" />
                    )}
                    <button onClick={() => setPlayingProgramId(prev => prev === p.id ? null : p.id)} className="absolute top-2 right-2 bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-all" title={playingProgramId === p.id ? 'Hide Video' : 'Play Video'}>
                      <Play className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="p-6 md:w-1/2">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">Course</span>
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{p.discount}% off</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                    <div className="mb-4">
                      <div className="space-y-1">
                        <div className="text-gray-500 line-through text-sm">₹{p.originalPrice}</div>
                        <div className="text-red-600 font-bold text-xl">₹{p.finalPrice}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button disabled={isPaying} onClick={() => startWorkshopPayment(p.finalPrice, p.name)} className="bg-blue-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50">Enroll Now</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses for Tech Students */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Courses for Tech Students</h2>
            <p className="text-gray-600">Curated courses for Tech students</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bcaPrograms.map((p, idx) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 6) * 0.05 }} className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 relative">
                    {playingProgramId === p.id ? (
                      <video controls className="w-full h-48 md:h-full object-cover" src={p.video}>
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img src={p.image} alt={p.name} className="w-full h-48 md:h-full object-cover" />
                    )}
                    <button onClick={() => setPlayingProgramId(prev => prev === p.id ? null : p.id)} className="absolute top-2 right-2 bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-all" title={playingProgramId === p.id ? 'Hide Video' : 'Play Video'}>
                      <Play className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="p-6 md:w-1/2">
                    <div className="flex items-center mb-2">
                      <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">Tech Programs</span>
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{p.discount}% off</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                    <div className="mb-4">
                      <div className="space-y-1">
                        <div className="text-gray-500 line-through text-sm">₹{p.originalPrice}</div>
                        <div className="text-red-600 font-bold text-xl">₹{p.finalPrice}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button disabled={isPaying} onClick={() => startWorkshopPayment(p.finalPrice, p.name)} className="bg-teal-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50">Enroll Now</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Course Cards (generated from 55+ list) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">All Courses</h2>
            <p className="text-gray-600">Browse our full catalog and enroll instantly</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((name, idx) => {
              const originalPrice = 999;
              const finalPrice = idx % 5 === 0 ? 489 : idx % 3 === 0 ? 389 : 199;
              const discount = Math.round(((originalPrice - finalPrice) / originalPrice) * 100);
              const imageQuery = encodeURIComponent(name.split(' ')[0]);
              const image = `https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800`;
              const description = `Learn ${name} with hands-on exercises and real-world examples.`;
              return (
                <div key={name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img src={image} alt={name} className="w-full h-48 md:h-full object-cover" />
                    </div>
                    <div className="p-6 md:w-1/2">
                      <div className="flex items-center mb-2">
                        <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">Course</span>
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{discount}% off</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{description}</p>
                      <div className="mb-4">
                        <div className="space-y-1">
                          <div className="text-gray-500 line-through text-sm">₹{originalPrice}</div>
                          <div className="text-red-600 font-bold text-xl">₹{finalPrice}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          disabled={isPaying}
                          onClick={() => startWorkshopPayment(finalPrice, name)}
                          className="bg-indigo-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50"
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events (optional) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join our next sessions with industry experts</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Upcoming</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{event.speaker}</p>
                  <p className="text-gray-600 text-sm mb-4">{event.speakerRole}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600"><Calendar className="h-4 w-4 mr-2" />{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    <div className="flex items-center text-sm text-gray-600"><Clock className="h-4 w-4 mr-2" />{event.time}</div>
                    <div className="flex items-center text-sm text-gray-600"><MapPin className="h-4 w-4 mr-2" />{event.venue}</div>
                    <div className="flex items-center text-sm text-gray-600"><Users className="h-4 w-4 mr-2" />{event.attendees} expected attendees</div>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  {event.registrationOpen && (
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Register Now</button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;



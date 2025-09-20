import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  const isPaying = false;
  const [playingProgramId, setPlayingProgramId] = useState<string | null>(null);

  // B.Tech (Engineering Students) Courses
  const btechCourses = [
    { id: 'ai-ml', name: 'Artificial Intelligence & Machine Learning', originalPrice: 2999, finalPrice: 1499, discount: 50, image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Master AI algorithms, neural networks, and machine learning models', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'data-science', name: 'Data Science & Big Data Analytics', originalPrice: 2799, finalPrice: 1399, discount: 50, image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Learn data analysis, visualization, and big data processing techniques', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'cybersecurity', name: 'Cybersecurity & Ethical Hacking', originalPrice: 2599, finalPrice: 1299, discount: 50, image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Protect systems and networks from cyber threats and vulnerabilities', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'cloud-computing', name: 'Cloud Computing (AWS, Azure, Google Cloud)', originalPrice: 2399, finalPrice: 1199, discount: 50, image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Master cloud platforms and deployment strategies', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'fullstack', name: 'Full-Stack Development (MERN, MEAN, Python-Django)', originalPrice: 2199, finalPrice: 1099, discount: 50, image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Build complete web applications with modern tech stacks', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'iot', name: 'Internet of Things (IoT) & Embedded Systems', originalPrice: 1999, finalPrice: 999, discount: 50, image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Design and develop connected devices and smart systems', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'blockchain', name: 'Blockchain Technology & Web3', originalPrice: 2199, finalPrice: 1099, discount: 50, image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Learn decentralized applications and cryptocurrency development', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'robotics', name: 'Robotics & Automation (RPA, Industrial AI)', originalPrice: 2399, finalPrice: 1199, discount: 50, image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Build intelligent robots and automate business processes', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'arvr', name: 'AR/VR & Metaverse Development', originalPrice: 2599, finalPrice: 1299, discount: 50, image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Create immersive experiences and virtual worlds', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'devops', name: 'DevOps & Software Testing Automation', originalPrice: 1999, finalPrice: 999, discount: 50, image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Streamline development workflows and automate testing', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
  ];

  // BCA (Computer Applications Students) Courses
  const bcaCourses = [
    { id: 'mobile-dev', name: 'Mobile App Development (Flutter, React Native, Kotlin, Swift)', originalPrice: 2199, finalPrice: 1099, discount: 50, image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Build cross-platform mobile applications for iOS and Android', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'ui-ux', name: 'UI/UX Designing & Product Design', originalPrice: 1799, finalPrice: 899, discount: 50, image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Design beautiful and user-friendly interfaces and experiences', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'game-dev', name: 'Game Development (Unity, Unreal Engine)', originalPrice: 2399, finalPrice: 1199, discount: 50, image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Create engaging games using industry-standard engines', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'database', name: 'Database Management (SQL, NoSQL, MongoDB)', originalPrice: 1599, finalPrice: 799, discount: 50, image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Master database design, optimization, and management', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'python-advanced', name: 'Python & Advanced Programming', originalPrice: 1999, finalPrice: 999, discount: 50, image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Advanced Python programming and software development', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'data-analytics', name: 'Data Analytics & Business Intelligence Tools (Power BI, Tableau)', originalPrice: 1799, finalPrice: 899, discount: 50, image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Transform data into actionable business insights', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'cloud-virtualization', name: 'Cloud Computing & Virtualization', originalPrice: 1999, finalPrice: 999, discount: 50, image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Learn cloud platforms and virtualization technologies', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'digital-marketing', name: 'Digital Marketing for IT Products', originalPrice: 1399, finalPrice: 699, discount: 50, image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Market and promote technology products effectively', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'ai-chatbot', name: 'AI Chatbot & Automation Development', originalPrice: 1799, finalPrice: 899, discount: 50, image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Build intelligent chatbots and automation solutions', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'project-management', name: 'Software Project Management (Agile, Scrum, Jira)', originalPrice: 1599, finalPrice: 799, discount: 50, image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Manage software projects using industry best practices', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
  ];

  // MBA/BBA (Management Students) Courses
  const mbaCourses = [
    { id: 'digital-marketing-mba', name: 'Digital Marketing & Growth Hacking', originalPrice: 1799, finalPrice: 899, discount: 50, image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Master digital marketing strategies and growth hacking techniques', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'business-analytics', name: 'Business Analytics & Data-Driven Decision Making', originalPrice: 1999, finalPrice: 999, discount: 50, image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Make informed business decisions using data analytics', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'financial-modeling', name: 'Financial Modeling & Investment Banking', originalPrice: 2199, finalPrice: 1099, discount: 50, image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Build financial models and understand investment strategies', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'entrepreneurship', name: 'Entrepreneurship & Startup Management', originalPrice: 1999, finalPrice: 999, discount: 50, image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Launch and manage successful startups and businesses', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'hr-analytics', name: 'Human Resource Analytics & People Management', originalPrice: 1799, finalPrice: 899, discount: 50, image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Manage people and analyze HR data for better decisions', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'international-business', name: 'International Business & Global Trade', originalPrice: 1999, finalPrice: 999, discount: 50, image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Navigate global markets and international trade', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'operations-supply', name: 'Operations & Supply Chain Management (with ERP tools like SAP)', originalPrice: 2199, finalPrice: 1099, discount: 50, image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Optimize operations and supply chains using ERP systems', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'ai-business', name: 'AI in Business Strategy & Decision Making', originalPrice: 1999, finalPrice: 999, discount: 50, image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Integrate AI into business strategies and decision processes', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'product-management', name: 'Product Management & Design Thinking', originalPrice: 1799, finalPrice: 899, discount: 50, image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Lead product development using design thinking principles', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
    { id: 'leadership', name: 'Leadership, Communication & Negotiation Skills', originalPrice: 1599, finalPrice: 799, discount: 50, image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Develop essential leadership and communication skills', video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
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

      

      {/* B.Tech (Engineering Students) Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">For B.Tech (Engineering Students)</h2>
            <p className="text-gray-600">👉 Focus: Technology, Innovation, Future Skills</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {btechCourses.map((p, idx) => (
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
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">B.Tech</span>
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

      {/* BCA (Computer Applications Students) Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">💻 For BCA (Computer Applications Students)</h2>
            <p className="text-gray-600">👉 Focus: Software Development + IT + Product Building</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bcaCourses.map((p, idx) => (
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
                      <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">BCA</span>
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

      {/* MBA/BBA (Management Students) Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">📊 For MBA/BBA (Management Students)</h2>
            <p className="text-gray-600">👉 Focus: Leadership + Strategy + Digital Business</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mbaCourses.map((p, idx) => (
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
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">Management</span>
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
                      <button disabled={isPaying} onClick={() => startWorkshopPayment(p.finalPrice, p.name)} className="bg-purple-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50">Enroll Now</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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



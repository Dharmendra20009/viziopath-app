import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filters = ['All', 'Events', 'Trainings', 'Intern Life', 'Speakers'];

  const images = [
    {
      id: 1,
      src: '/Gupta.JPG',
      title: 'Business Analytics Workshop',
      category: 'Trainings',
      description: 'Students learning modern Business Analytics techniques'
    },
    {
      id: 2,
      src: '/Logo2.0.JPG',
      title: 'Team Collaboration Session',
      category: 'Intern Life',
      description: 'Interns working together on innovative projects'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'AI & Machine Learning Seminar',
      category: 'Events',
      description: 'Industry experts sharing insights on AI trends'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Guest Speaker Session',
      category: 'Speakers',
      description: 'Tech industry leader sharing career insights'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mobile App Development',
      category: 'Trainings',
      description: 'Hands-on mobile application development training'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Graduation Ceremony',
      category: 'Events',
      description: 'Celebrating successful completion of internship programs'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Code Review Session',
      category: 'Intern Life',
      description: 'Mentors guiding interns through code optimization'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Industry Expert Panel',
      category: 'Speakers',
      description: 'Panel discussion with leading technology professionals'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Data Science Bootcamp',
      category: 'Trainings',
      description: 'Intensive data science and analytics training program'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Networking Event',
      category: 'Events',
      description: 'Connecting interns with industry professionals'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Project Showcase',
      category: 'Intern Life',
      description: 'Interns presenting their innovative project solutions'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tech Talk Series',
      category: 'Speakers',
      description: 'Weekly tech talks by industry veterans'
    }
  ];

  const filteredImages = selectedFilter === 'All' 
    ? images 
    : images.filter(image => image.category === selectedFilter);

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
            <h1 className="text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore moments from our training sessions, events, and the vibrant life of our intern community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mr-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                      <span className="inline-block bg-blue-600 text-xs px-2 py-1 rounded-full mt-2">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-lg opacity-90 mb-2">{selectedImage.description}</p>
              <span className="inline-block bg-blue-600 text-sm px-3 py-1 rounded-full">
                {selectedImage.category}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
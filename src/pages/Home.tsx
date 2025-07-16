
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scale, Users, BookOpen, Award, Target, Shield, Lightbulb,  ArrowRight, CheckCircle } from 'lucide-react';
import HeroSlideshow from '../components/HeroSlideshow';

const Home = () => {
  const stats = [
    { number: '2024', label: 'Established' },
    { number: '50+', label: 'Students Enrolled' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Online Support' },
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Complete LAT, LL.B, and LAW-GAT preparation with modern teaching methods.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from experienced advocates and legal professionals.',
    },
    {
      icon: Award,
      title: 'HEC Recognized',
      description: 'All our programs are recognized by Higher Education Commission.',
    },
    {
      icon: Scale,
      title: 'Practical Training',
      description: 'Court visits, moot courts, and real-world legal experience.',
    },
  ];

  const values = [
    {
      icon: Scale,
      title: 'Justice',
      description: 'Upholding fairness and equality in all our endeavors.',
      color: 'bg-blue-500',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in legal education.',
      color: 'bg-amber-500',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Maintaining ethical principles and moral character.',
      color: 'bg-green-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and technology.',
      color: 'bg-purple-500',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      program: 'LL.B Graduate',
      text: 'Jinnah Law Academy By Wasif Mateen provided me with excellent foundation in law. The faculty is outstanding.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Fatima Khan',
      program: 'LAT Preparation',
      text: 'The LAT preparation course helped me secure admission in top law universities.',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Muhammad Ali',
      program: 'LAW-GAT Student',
      text: 'Best academy for law entrance preparation. Highly recommend to all law aspirants.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <HeroSlideshow />

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-slate-800 font-serif">
                  {stat.number}
                </div>
                <div className="text-slate-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber-100 rounded-full opacity-50"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 font-serif relative">
                Founded on the Principles of Justice
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Established in 2024 by Mian Wasif Mateen, Advocate High Court, Jinnah Law Academy By Wasif Mateen
                stands as a beacon of legal education in Pakistan. We are dedicated to nurturing 
                future legal professionals with comprehensive knowledge and ethical grounding.
              </p>
              <blockquote className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-xl border-l-4 border-amber-500 mb-8 shadow-lg">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-700 italic text-lg leading-relaxed mb-4">
                  "Law is more than a profession — it's the foundation of justice, dignity, and social change. 
                  With this vision, I founded Jinnah Law Academy By Wasif Mateen — a place where aspiring legal minds grow 
                  with discipline and purpose."
                    </p>
                    <footer className="text-slate-600 font-semibold">
                      — Mian Wasif Mateen, Advocate High Court
                    </footer>
                  </div>
                </div>
              </blockquote>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src='justice_scale13.jpg'
                alt="Law Academy"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-lg">Excellence</div>
                    <div className="text-slate-600 text-sm">Since 2024</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-slate-200 rounded-full opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
              Why Choose Jinnah Law Academy By Wasif Mateen?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover what sets us apart as Pakistan's premier destination for legal education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The principles that guide our mission of legal education excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
              Our Programs
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive legal education programs designed to prepare you for a successful career in law.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'LAT Preparation',
                description: 'Complete preparation for Law Admission Test with expert guidance.',
                features: ['Mock Tests', 'Study Material', 'Expert Tips', 'Performance Analysis'],
                image: 'LAW_Book.jpg',
              },
              {
                title: 'LL.B Program',
                description: 'Comprehensive 4-year and 5-year LL.B programs with practical training.',
                features: ['Court Visits', 'Moot Courts', 'Internships', 'Research Projects'],
                image: 'scale_of_justice.jpg',
              },
              {
                title: 'LAW-GAT Preparation',
                description: 'Specialized preparation for Law Graduate Assessment Test.',
                features: ['Complete Coverage', 'Mock Exams', 'Expert Faculty', 'Result Tracking'],
                image: '333.webp',
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{course.title}</h3>
                  <p className="text-slate-600 mb-4">{course.description}</p>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/courses"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              View All Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
    <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
              Student Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Outstanding results from our dedicated students who achieved excellence in their legal education journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((student, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-800">{student.name}</h4>
                    <p className="text-sm text-slate-600">{student.program}</p>
                  </div>
                </div>
                <div className="text-slate-600 text-sm leading-relaxed italic">
                  “{student.text}”
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
              Ready to Begin Your Legal Journey?
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful law students who chose Jinnah Law Academy By Wasif Mateen for their legal education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admission"
                className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg transition-colors duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
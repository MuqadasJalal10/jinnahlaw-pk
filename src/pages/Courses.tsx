
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Star,
  Globe,
  MapPin,
  Calendar,
  ArrowRight,
  Target,
  FileText,
  Video,
  
} from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 'lat',
      title: 'LAT – Law Admission Test',
      subtitle: 'Your Gateway to Legal Education',
      description: 'Comprehensive preparation for the Law Admission Test with expert guidance and proven strategies.',
      image: 'LAW_Book.jpg',
      eligibility: 'Intermediate / A-Level',
      duration: 'Short-Term (3-6 Months)',
      mode: 'Online + Physical',
      features: [
        'Free Preparatory Material',
        'Comprehensive Study Material',
        'Regular Mock Tests',
        'Expert Tips & Strategies',
        'Performance Analysis',
        'Doubt Clearing Sessions',
        'Current Affairs Updates',
        'Time Management Training'
      ],
      highlights: [
        { icon: Target, text: 'Mock Test Series' },
        { icon: Users, text: 'Expert Guidance' },
        { icon: Star, text: '95% Success Rate' },
        { icon: BookOpen, text: 'Complete Coverage' }
      ],
      color: 'bg-slate-600'
    },
    {
      id: 'llb-4',
      title: 'LL.B – 4-Year Program',
      subtitle: 'Postgraduate Legal Education',
      description: 'Intensive 4-year LL.B program for graduates seeking to build a career in law.',
      image: 'Admission.jpg',
      eligibility: 'Bachelor\'s Degree + LAT',
      duration: '4 Years',
      mode: 'On-Campus + Online Support',
      features: [
        'HEC Recognized Program',
        'Court Visits & Practical Training',
        'Legal Internship Opportunities',
        'Moot Court Competitions',
        'Research Projects',
        'Industry Expert Sessions',
        'Career Guidance',
        'Professional Development'
      ],
      highlights: [
        { icon: Award, text: 'HEC Recognized' },
        { icon: FileText, text: 'Court Visits' },
        { icon: Users, text: 'Legal Training' },
        { icon: Target, text: 'Internships' }
      ],
      color: 'bg-slate-700'
    },
    {
      id: 'llb-5',
      title: 'LL.B – 5-Year Program',
      subtitle: 'Complete Legal Foundation',
      description: 'Comprehensive 5-year LL.B program for intermediate students with complete legal foundation.',
      image: 'book3.jpg',
      eligibility: 'Intermediate + LAT',
      duration: '5 Years',
      mode: 'On-Campus + Online Support',
      features: [
        'Complete Legal Foundation',
        'Moot Court Training',
        'Research & Thesis Projects',
        'Practical Legal Training',
        'Court Observation Programs',
        'Legal Writing Workshops',
        'Professional Ethics Training',
        'Career Placement Support'
      ],
      highlights: [
        { icon: BookOpen, text: 'Full Foundation' },
        { icon: Award, text: 'Moot Court' },
        { icon: FileText, text: 'Research Projects' },
        { icon: Users, text: 'Practical Training' }
      ],
      color: 'bg-slate-800'
    },
    {
      id: 'law-gat',
      title: 'LAW-GAT Preparation',
      subtitle: 'Graduate Assessment Excellence',
      description: 'Specialized preparation for Law Graduate Assessment Test covering all major legal subjects.',
      image: 'law_justice.jpeg',
      eligibility: 'LL.B Graduates',
      duration: '6-12 Months',
      mode: 'Online + Physical',
      features: [
        'Civil Law Coverage',
        'Criminal Law Preparation',
        'Constitutional Law',
        'Jurisprudence & Legal Theory',
        'Regular Mock Examinations',
        'Complete Syllabus Coverage',
        'Performance Feedback',
        'Result Analysis & Improvement'
      ],
      highlights: [
        { icon: BookOpen, text: 'Complete Coverage' },
        { icon: Target, text: 'Mock Exams' },
        { icon: Users, text: 'Expert Faculty' },
        { icon: Star, text: 'Result Tracking' }
      ],
      color: 'bg-slate-800'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <img
            src='law_s4.jpg'
            alt="Courses"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
              Our Programs
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              Empowering tomorrow's legal minds through structured, career-driven education 
              in LAT, LL.B, and LAW-GAT preparation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-white">
                <Globe className="w-5 h-5 mr-2" />
                <span>Online + On-Campus</span>
              </div>
              <div className="flex items-center text-white">
                <Award className="w-5 h-5 mr-2" />
                <span>HEC Recognized</span>
              </div>
              <div className="flex items-center text-white">
                <Users className="w-5 h-5 mr-2" />
                <span>Expert Faculty</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative`}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="rounded-lg shadow-2xl w-full h-64 md:h-80 object-cover"
                  />
                  <div className={`absolute top-6 left-6 px-4 py-2 ${course.color} text-white rounded-full font-semibold`}>
                    {course.title.split(' – ')[0]}
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
                    {course.title}
                  </h2>
                  <p className="text-lg text-amber-600 font-semibold mb-4">
                    {course.subtitle}
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Users className="w-5 h-5 text-slate-600 mr-2" />
                        <span className="font-semibold text-slate-800">Eligibility</span>
                      </div>
                      <p className="text-slate-600 text-sm">{course.eligibility}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 text-slate-600 mr-2" />
                        <span className="font-semibold text-slate-800">Duration</span>
                      </div>
                      <p className="text-slate-600 text-sm">{course.duration}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <MapPin className="w-5 h-5 text-slate-600 mr-2" />
                        <span className="font-semibold text-slate-800">Mode</span>
                      </div>
                      <p className="text-slate-600 text-sm">{course.mode}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {course.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center">
                        <div className={`w-8 h-8 ${course.color} rounded-full flex items-center justify-center mr-3`}>
                          <highlight.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 text-sm font-medium">{highlight.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {course.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/admission"
                      className={`inline-flex items-center justify-center px-6 py-3 ${course.color} hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300`}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 text-slate-700 hover:border-slate-400 font-semibold rounded-lg transition-all duration-300"
                    >
                      Get Info
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
              Why Choose Our Programs?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive benefits that make our programs stand out in legal education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: 'Online Learning Platform',
                description: 'Access lectures, materials, and tests from anywhere with our advanced LMS.',
              },
              {
                icon: Users,
                title: 'Small Class Sizes',
                description: 'Personalized attention with limited students per batch for better learning.',
              },
              {
                icon: Calendar,
                title: 'Flexible Scheduling',
                description: 'Multiple batch timings to accommodate working professionals and students.',
              },
              {
                icon: Award,
                title: 'Certification',
                description: 'Recognized certificates and completion credentials for all programs.',
              },
              {
                icon: Target,
                title: 'Career Guidance',
                description: 'Professional counseling and career placement assistance.',
              },
              {
                icon: BookOpen,
                title: 'Updated Curriculum',
                description: 'Latest syllabus aligned with current legal education requirements.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
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
              Ready to Start Your Legal Education?
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Choose from our comprehensive programs and take the first step towards a successful legal career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admission"
                className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Apply for Admission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg transition-colors duration-300"
              >
                Contact for Details
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Courses;
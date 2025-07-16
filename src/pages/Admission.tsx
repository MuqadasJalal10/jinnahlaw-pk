  import  { useState } from 'react';
  import { motion } from 'framer-motion';
  import { useForm } from 'react-hook-form';
  import { 
    User, 
    Mail, 
    Phone, 
    MapPin, 
    GraduationCap, 
    BookOpen,
    CheckCircle,
    AlertCircle,
    FileText,
    Calendar,
    Clock,
    Users,
    Award
  } from 'lucide-react';

  const Admission = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();

    const selectedCourse = watch('course') as keyof typeof subCourses | '';


    const onSubmit = async (data: any) => {
  setIsSubmitting(true);

  // Clean optional fields to avoid sending undefined or empty strings
  const cleanedData = {
    ...data,
    subcourse: data.subcourse?.trim() || null,
    address: data.address?.trim() || null
  };

  console.log('Submitting data:', cleanedData); // Optional: Debug log

  try {
    const response = await fetch('/api/admission', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cleanedData)
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setShowSuccess(true);
      reset();
    } else {
      throw new Error(result.error || 'Failed to submit admission application');
    }
  } catch (error) {
    console.error('Admission form submission error:', error);
    alert('Failed to submit application. Please try again or contact us directly.');
  } finally {
    setIsSubmitting(false);
  }
};


  const courses = [
    { 
      value: 'lat', 
      label: 'LAT - Law Admission Test',
      duration: '3-6 Months',
      eligibility: 'Intermediate/A-Level'
    },
    { 
      value: 'llb-4', 
      label: 'LL.B - 4 Year Program',
      duration: '4 Years',
      eligibility: 'Bachelor\'s + LAT'
    },
    { 
      value: 'llb-5', 
      label: 'LL.B - 5 Year Program',
      duration: '5 Years',
      eligibility: 'Intermediate + LAT'
    },
    { 
      value: 'law-gat', 
      label: 'LAW-GAT Preparation',
      duration: '6-12 Months',
      eligibility: 'LL.B Graduate'
    }
  ];

  const subCourses = {
    'llb-4': ['Part 1', 'Part 2', 'Part 3', 'Part 4'],
    'llb-5': ['Part 1', 'Part 2', 'Part 3', 'Part 4', 'Part 5']
  };

  const requirements = [
    {
      icon: FileText,
      title: 'Documentation',
      items: [
        'Educational certificates and transcripts',
        'CNIC copy',
        'Passport-size photographs',
        'Character certificate'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Academic Requirements',
      items: [
        'Minimum 50% marks in qualifying exam',
        'LAT qualification (for LL.B programs)',
        'English proficiency',
        'No age restrictions'
      ]
    },
    {
      icon: Calendar,
      title: 'Application Process',
      items: [
        'Submit online application',
        'Document verification',
        'Entrance interview (if required)',
        'Fee payment and enrollment'
      ]
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
            src="law_s4.jpg"
            alt="Admission"
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
              Admission Inquiry
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Take the first step towards your legal education journey. Apply now for our comprehensive law programs.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-2xl"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6 font-serif">
                  Application Form
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
                        <User className="w-4 h-4 mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                         {errors.name && (
  <p className="...">
    <AlertCircle className="..." />
    {errors.name?.message?.toString()}
  </p>
)}

                        </p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.email && <p className="...">{errors.email?.message as string}</p>}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register('phone', { required: 'Phone number is required' })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="03XX-XXXXXXX"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.phone && <p className="...">{errors.phone?.message as string}</p>}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Education Level *
                      </label>
                      <select
                        {...register('education', { required: 'Education level is required' })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      >
                        <option value="">Select education level</option>
                        <option value="intermediate">Intermediate/A-Level</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="llb">LL.B</option>
                        <option value="master">Master's Degree</option>
                      </select>
                      {errors.education && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.education && <p className="...">{errors.education?.message as string}</p>}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      Address
                    </label>
                    <textarea
                      {...register('address')}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                      placeholder="Enter your complete address"
                    />
                  </div>

                  {/* Course Selection */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Select Course *
                      </label>
                      <select
                        {...register('course', { required: 'Course selection is required' })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      >
                        <option value="">Choose a program</option>
                        {courses.map((course) => (
                          <option key={course.value} value={course.value}>
                            {course.label}
                          </option>
                        ))}
                      </select>
                      {errors.course && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.course && <p className="...">{errors.course?.message as string}</p>}
                        </p>
                      )}
                    </div>

                    {selectedCourse && subCourses[selectedCourse] && (
                      <div>
                        <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
                          <FileText className="w-4 h-4 mr-2" />
                          Select Part
                        </label>
                        <select
                          {...register('subcourse')}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        >
                          <option value="">Select part</option>
                          {subCourses[selectedCourse]?.map((sub: string) => (
  <option key={sub} value={sub}>
    {sub}
  </option>
))}

                        </select>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
                      <Users className="w-4 h-4 mr-2" />
                      Preferred Mode *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center p-4 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                        <input
                          type="radio"
                          {...register('mode', { required: 'Mode selection is required' })}
                          value="online"
                          className="mr-3 text-amber-500 focus:ring-amber-500"
                        />
                        <div>
                          <div className="font-medium text-slate-800">Online</div>
                          <div className="text-sm text-slate-600">Study from home</div>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                        <input
                          type="radio"
                          {...register('mode', { required: 'Mode selection is required' })}
                          value="on-campus"
                          className="mr-3 text-amber-500 focus:ring-amber-500"
                        />
                        <div>
                          <div className="font-medium text-slate-800">On-Campus</div>
                          <div className="text-sm text-slate-600">Physical classes</div>
                        </div>
                      </label>
                    </div>
                    {errors.mode && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                       {errors.mode && <p className="...">{errors.mode?.message as string}</p>}
                      </p>
                    )}
                  </div>

                  {/* Terms & Conditions */}
                  <div>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        {...register('terms', { required: 'You must accept terms and conditions' })}
                        className="mt-1 mr-3 text-amber-500 focus:ring-amber-500"
                      />
                      <span className="text-sm text-slate-600">
                        I agree to the <a href="/terms-conditions" className="text-amber-600 hover:text-amber-700">Terms & Conditions</a> and 
                        <a href="/privacy-policy" className="text-amber-600 hover:text-amber-700"> Privacy Policy</a>
                      </span>
                    </label>
                    {errors.terms && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.terms && <p className="...">{errors.terms?.message as string}</p>}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Course Info */}
              {selectedCourse && (
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Selected Course</h3>
                  {courses
                    .filter(course => course.value === selectedCourse)
                    .map(course => (
                      <div key={course.value} className="space-y-3">
                        <h4 className="font-medium text-slate-800">{course.label}</h4>
                        <div className="flex items-center text-sm text-slate-600">
                          <Clock className="w-4 h-4 mr-2" />
                          Duration: {course.duration}
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          Eligibility: {course.eligibility}
                        </div>
                      </div>
                    ))}
                </motion.div>
              )}

              {/* Contact Help */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-lg text-white"
              >
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <p className="mb-4 text-amber-100">
                  Our admission counselors are here to assist you with your application.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    0300-1186473
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    admission@jinnahlawacademy.edu.pk
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Mon-Fri (9-6), Sat (9-2)
                  </div>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-amber-500 mr-3" />
                    <span className="text-slate-600">HEC Recognized Programs</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-amber-500 mr-3" />
                    <span className="text-slate-600">Expert Faculty</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    <span className="text-slate-600">95% Success Rate</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-amber-500 mr-3" />
                    <span className="text-slate-600">Flexible Timings</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Admission Requirements */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center font-serif">
              Admission Requirements
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {requirements.map((req, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <req.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{req.title}</h3>
                  <ul className="space-y-2">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-8 rounded-lg shadow-2xl max-w-md mx-4"
          >
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Application Submitted!</h3>
              <p className="text-slate-600 mb-6">
                Thank you for your interest in Jinnah Law Academy. We'll contact you within 24 hours.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Admission;
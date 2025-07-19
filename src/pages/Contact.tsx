import  { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  User,
  Send,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

type ContactDetail = {
  text: string;
  action?: string;
  icon?: LucideIcon | IconType;
};

type ContactSection = {
  icon: LucideIcon;
  title: string;
  details: ContactDetail[];
};


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data: any) => {
  setIsSubmitting(true);

    

  try {
      
   const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setShowSuccess(true);
      reset();
    } else {
      throw new Error(result.error || 'Failed to send message.');
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    alert('Failed to send message. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo: ContactSection[] = [
  {
    icon: Phone,
    title: 'Phone & WhatsApp',
    details: [
      { text: '0300-1186473', action: 'tel:03001186473', icon: Phone },
      { text: '03014686473', action: 'https://wa.me/923014686473', icon: FaWhatsapp }
    ]
  },
  {
    icon: Mail,
    title: 'Email',
    details: [
      { text: 'info@jinnahlaw.pk', action: 'mailto:info@jinnahlaw.pk' }
    ]
  },
  {
    icon: MapPin,
    title: 'Address',
    details: [
      { text: 'Near Bank Islami, Opp. Sports Hall' },
      { text: 'Mattu Bhaike Rd, Tehsil Nowshera Virkan, District Gujranwala' },
      
    ]
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: [
      { text: 'Mon-Fri: 9:00 AM - 6:00 PM' },
      { text: 'Saturday: 9:00 AM - 2:00 PM' },
      { text: 'Sunday: Closed' }
    ]
  }
];

  const faqs = [
    {
      question: 'What are the admission requirements for LL.B programs?',
      answer: 'For the 4-year LL.B program, you need a bachelor\'s degree with minimum 50% marks and LAT qualification. For the 5-year program, intermediate education with LAT qualification is required.'
    },
    {
      question: 'Do you offer online classes?',
      answer: 'Yes, we offer both online and on-campus classes. Our online platform provides live lectures, recorded sessions, study materials, and interactive sessions with faculty.'
    },
    {
      question: 'What is the fee structure for different programs?',
      answer: 'Fee structure varies by program. LAT preparation starts from PKR 15,000, LL.B programs range from PKR 25,000-40,000 per semester. Contact us for detailed fee information and payment plans.'
    },
    {
      question: 'When do new batches start?',
      answer: 'New batches start quarterly - January, April, July, and October. LAT preparation batches start monthly based on upcoming test dates.'
    },
    {
      question: 'Do you offer trial classes?',
      answer: 'Yes, we offer free trial classes for all programs. You can attend one week of classes to experience our teaching methodology before enrollment.'
    },
    {
      question: 'Can I get one-on-one support?',
      answer: 'Absolutely! We provide personalized mentorship, doubt-clearing sessions, and individual guidance for career planning and academic support.'
    },
    {
      question: 'Are your instructors qualified?',
      answer: 'All our faculty members are qualified advocates, practicing lawyers, and legal experts with extensive experience in their respective fields.'
    },
    {
      question: 'Is hostel facility available?',
      answer: 'We don\'t provide hostel facilities directly, but we assist students in finding suitable accommodation near our campus through our partner networks.'
    },
    {
      question: 'Are your programs HEC recognized?',
      answer: 'Yes, our LL.B programs are fully recognized by the Higher Education Commission (HEC) of Pakistan and meet all regulatory requirements.'
    },
    {
      question: 'Can I switch from online to on-campus classes later?',
      answer: 'Yes, you can switch between online and on-campus modes during your studies, subject to seat availability and program requirements.'
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
            alt="Contact Us"
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
              Contact Us
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Get in touch with our admissions team for any questions about our programs, 
              enrollment process, or academic guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We're here to help you start your legal education journey. Contact us through any of the following methods.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-slate-600 text-sm">
                      {detail.action ? (
                        <a
                          href={detail.action}
                          target={detail.action.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="flex items-center hover:text-amber-600 transition-colors duration-200"
                        >
                          {detail.icon && <detail.icon className="w-4 h-4 mr-2" />}
                          {detail.text}
                        </a>
                      ) : (
                        <span>{detail.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                        {errors.subject?.message && (
                         <p className="...">
                           <AlertCircle className="..." />
                          {String(errors.subject.message)}
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
                        {errors.subject?.message && (
  <p className="...">
    <AlertCircle className="..." />
    {String(errors.subject.message)}
  </p>
)}

                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
                      <Phone className="w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="03XX-XXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Subject *
                    </label>
                    <select
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="courses">Course Information</option>
                      <option value="fees">Fee Structure</option>
                      <option value="schedules">Class Schedules</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Student Support</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subject?.message && (
  <p className="...">
    <AlertCircle className="..." />
    {String(errors.subject.message)}
  </p>
)}


                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                    placeholder="Write your message here..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject?.message && (
  <p className="...">
    <AlertCircle className="..." />
    {String(errors.subject.message)}
  </p>
)}

                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-2xl overflow-hidden"
            >
              <div className="p-6 bg-slate-50 border-b">
                <h3 className="text-xl font-bold text-slate-800 font-serif">Visit Our Campus</h3>
                <p className="text-slate-600">Near Bank Islami, Opp. Sports Hall, Mattu Bhaike Rd, Tehsil Nowshera Virkan District Gujranwala</p>
              </div>
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.7584!2d73.2426!3d32.0234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDAxJzI0LjIiTiA3M8KwMTQnMzMuNCJF!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jinnah Law Academy By Wasif Mateen Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Find answers to common questions about our programs, admission process, and academy policies.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-slate-800">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
              <p className="text-slate-600 mb-6">
                Thank you for contacting us. We'll get back to you within 24 hours.
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

export default Contact;
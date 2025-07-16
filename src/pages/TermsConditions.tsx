
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Scale, GraduationCap, CreditCard, Users } from 'lucide-react';

const TermsConditions = () => {
  const sections = [
    {
      icon: GraduationCap,
      title: 'Enrollment and Admission',
      content: [
        'All applications are subject to verification and approval by the academy',
        'Students must meet the eligibility criteria for their chosen program',
        'Admission is confirmed only after payment of required fees',
        'The academy reserves the right to refuse admission without stating reasons',
        'False information in applications may result in immediate termination'
      ]
    },
    {
      icon: CreditCard,
      title: 'Fees and Payment',
      content: [
        'All fees must be paid according to the schedule provided',
        'Late payment may result in suspension of services',
        'Refunds are subject to the academy\'s refund policy',
        'Fee structure may be revised with prior notice',
        'Additional charges may apply for extra services or materials'
      ]
    },
    {
      icon: Users,
      title: 'Student Conduct',
      content: [
        'Students must maintain respectful behavior with faculty and peers',
        'Academic integrity and honesty are strictly required',
        'Attendance requirements must be met as per program guidelines',
        'Disruptive behavior may result in disciplinary action',
        'Students are responsible for their personal belongings'
      ]
    },
    {
      icon: Scale,
      title: 'Academic Policies',
      content: [
        'Regular assessment and evaluation will be conducted',
        'Minimum performance standards must be maintained',
        'Plagiarism or cheating will result in severe penalties',
        'Course completion certificates are issued upon meeting requirements',
        'The academy reserves the right to modify curriculum as needed'
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
      {/* Hero Section with Background Image */}
<section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900">
  <div className="absolute inset-0">
    <img
      src='law_s4.jpg' // 🔁 Replace this with your actual hero image path
      alt="Terms and Conditions"
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
      <FileText className="w-16 h-16 text-amber-400 mx-auto mb-6" />
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
        Terms & Conditions
      </h1>
      <p className="text-xl text-slate-200 max-w-3xl mx-auto">
        Please read these terms and conditions carefully before using our services or enrolling in our programs.
      </p>
    </motion.div>
  </div>
</section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none mb-12"
          >
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-slate-700 leading-relaxed">
                <strong>Effective Date:</strong> January 2024
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                These Terms and Conditions ("Terms") govern your relationship with Jinnah Law Academy By Wasif Mateen
                ("Academy," "we," "our," or "us"). By enrolling in our programs, using our services, 
                or accessing our website, you agree to be bound by these Terms.
              </p>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 font-serif">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Terms */}
          <div className="space-y-8 mt-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 font-serif">Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                All course materials, content, and resources provided by the academy are protected by 
                intellectual property laws. Students may use these materials solely for educational purposes 
                during their enrollment period.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Reproduction or distribution of materials is prohibited</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Commercial use of academy content is strictly forbidden</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Violation may result in legal action and termination</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 font-serif">Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                While we strive to provide quality education, the academy shall not be liable for any 
                indirect, incidental, or consequential damages arising from the use of our services.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700 text-sm">
                    <strong>Important:</strong> The academy's total liability shall not exceed the fees 
                    paid by the student for the specific program in question.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 font-serif">Privacy and Data Protection</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Your privacy is important to us. Personal information collected during enrollment and 
                throughout your studies will be handled in accordance with our Privacy Policy.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Student records are kept confidential and secure</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Information may be shared with regulatory bodies as required</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Students have rights regarding their personal data</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 font-serif">Termination</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Either party may terminate the educational relationship under certain circumstances:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">By the Academy:</h3>
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>• Non-payment of fees</li>
                    <li>• Violation of conduct policies</li>
                    <li>• Academic dishonesty</li>
                    <li>• Failure to meet requirements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">By the Student:</h3>
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>• Voluntary withdrawal</li>
                    <li>• Subject to refund policy</li>
                    <li>• Written notice required</li>
                    <li>• Outstanding fees must be cleared</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 font-serif">Governing Law</h2>
              <p className="text-slate-600 leading-relaxed">
                These Terms are governed by the laws of Pakistan. Any disputes arising from these Terms 
                or your relationship with the academy shall be subject to the exclusive jurisdiction of 
                the courts in Punjab, Pakistan.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 font-serif">Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective 
                immediately upon posting on our website. Continued use of our services after changes 
                constitutes acceptance of the modified Terms.
              </p>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-lg text-white mt-12"
          >
            <div className="flex items-center mb-4">
              <Scale className="w-6 h-6 mr-3" />
              <h2 className="text-2xl font-bold font-serif">Questions About Terms?</h2>
            </div>
            <p className="text-blue-100 mb-4">
              If you have any questions about these terms and conditions, please contact us:
            </p>
            <div className="space-y-2 text-blue-100">
              <p><strong>Email:</strong> legal@jinnahlawacademy.edu.pk</p>
              <p><strong>Phone:</strong> 0300-1186473</p>
              <p><strong>Address:</strong> Near Bank Islami, Opp. Sports Hall, Mattu Bhaike Rd, Nowshera Virkan</p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default TermsConditions;
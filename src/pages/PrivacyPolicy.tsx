
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, UserCheck, Database, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal identification information (Name, email address, phone number)',
        'Educational background and qualifications',
        'Course preferences and academic interests',
        'Communication records and correspondence',
        'Website usage data and analytics'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Process applications and provide educational services',
        'Communicate about courses, schedules, and academic matters',
        'Improve our services and educational offerings',
        'Send important updates and notifications',
        'Comply with legal and regulatory requirements'
      ]
    },
    {
      icon: Lock,
      title: 'Information Security',
      content: [
        'Secure encryption for all data transmission',
        'Regular security audits and updates',
        'Limited access to authorized personnel only',
        'Secure storage systems with backup protocols',
        'Compliance with international security standards'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Access your personal information',
        'Request corrections or updates',
        'Delete your data (subject to legal requirements)',
        'Opt-out of marketing communications',
        'File complaints with relevant authorities'
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
      src='law_s4.jpg' // 🔁 Replace with your actual image name
      alt="Privacy Policy"
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
      <Shield className="w-16 h-16 text-amber-400 mx-auto mb-6" />
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
        Privacy Policy
      </h1>
      <p className="text-xl text-slate-200 max-w-3xl mx-auto">
        Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <p className="text-slate-700 leading-relaxed">
                <strong>Last Updated:</strong> January 2024
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                Jinnah Law Academy By Wasif Mateen ("we," "our," or "us") is committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website, use our services, or 
                interact with us.
              </p>
            </div>
          </motion.div>

          {/* Policy Sections */}
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
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 font-serif">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-slate-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="space-y-8 mt-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 font-serif">Third-Party Services</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may use third-party services to enhance our educational offerings and improve user experience. 
                These services may include:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Google Analytics for website traffic analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Email service providers for communication</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Payment processors for fee collection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Learning management systems for online education</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 font-serif">Cookies and Tracking</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to improve your browsing experience and 
                understand how you interact with our website. You can control cookie settings through 
                your browser preferences.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-600 text-sm">
                  <strong>Note:</strong> Disabling cookies may affect the functionality of certain features 
                  on our website, including the application process and user dashboard.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 font-serif">Data Retention</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this privacy policy, unless a longer retention period is required by law. 
                Student records are maintained according to educational regulations and accreditation requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 font-serif">Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this privacy policy from time to time to reflect changes in our practices 
                or legal requirements. We will notify you of any material changes by posting the updated 
                policy on our website and updating the "Last Updated" date.
              </p>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 rounded-lg text-white mt-12"
          >
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 mr-3" />
              <h2 className="text-2xl font-bold font-serif">Questions About Privacy?</h2>
            </div>
            <p className="text-amber-100 mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-amber-100">
              <p><strong>Email:</strong> privacy@jinnahlawacademy.edu.pk</p>
              <p><strong>Phone:</strong> 0300-1186473</p>
              <p><strong>Address:</strong> Near Bank Islami, Opp. Sports Hall, Mattu Bhaike Rd, Nowshera Virkan</p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;
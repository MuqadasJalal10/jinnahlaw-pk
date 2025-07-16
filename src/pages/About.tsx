
import { motion } from 'framer-motion';
import { Scale, Award, Users, Target, Shield, Lightbulb, BookOpen, Building2 } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Scale,
      title: 'Justice',
      description: 'Upholding fairness and equality in all our educational endeavors.',
      color: 'bg-blue-500',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in legal education and training.',
      color: 'bg-amber-500',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Maintaining ethical principles and moral character in all aspects.',
      color: 'bg-green-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and educational technology.',
      color: 'bg-purple-500',
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'HEC Recognition',
      description: 'All our programs are recognized by Higher Education Commission of Pakistan.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Qualified advocates and legal professionals with extensive courtroom experience.',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Complete coverage of LAT, LL.B, and LAW-GAT with modern teaching methods.',
    },
    {
      icon: Building2,
      title: 'Modern Facilities',
      description: 'State-of-the-art classrooms and library with latest legal resources.',
    },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Foundation',
      description: 'Jinnah Law Academy established by Mian Wasif Mateen, Advocate High Court.',
    },
    {
      year: '2024',
      title: 'First Batch',
      description: 'Enrolled our first batch of students for LAT and LL.B preparation.',
    },
    {
      year: '2024',
      title: 'Online Platform',
      description: 'Launched comprehensive online learning platform for remote students.',
    },
    {
      year: '2024',
      title: 'Recognition',
      description: 'Received HEC recognition for our LL.B programs.',
    },
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
            alt="About Us"
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
              Who We Are
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Empowering the next generation of legal minds through comprehensive education, 
              practical training, and unwavering commitment to justice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-amber-50 to-white p-10 rounded-2xl shadow-2xl border border-amber-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-6 font-serif">Our Mission</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    To provide exceptional legal education that combines theoretical knowledge with practical skills, 
                    preparing students to become competent, ethical, and socially responsible legal professionals 
                    who contribute positively to society and the justice system.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-2xl border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 -translate-x-16 opacity-30"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-6 font-serif">Our Vision</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    To be Pakistan's leading law academy, recognized for excellence in legal education, 
                    innovation in teaching methodologies, and producing graduates who uphold the highest 
                    standards of professional integrity and contribute to the advancement of justice.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src='founder.jpeg'
                alt="Mian Wasif Mateen"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 font-serif">
                Founder's Message
              </h2>
              <blockquote className="text-lg text-slate-600 italic mb-6 leading-relaxed">
                "Law is more than a profession — it's the foundation of justice, dignity, and social change. 
                With this vision, I founded Jinnah Law Academy By Wasif Mateen — a place where aspiring legal minds grow 
                with discipline and purpose.
              </blockquote>
              <blockquote className="text-lg text-slate-600 italic mb-6 leading-relaxed">
                Our commitment extends beyond textbooks and examinations. We strive to instill in our 
                students a deep understanding of legal principles, ethical responsibility, and the courage 
                to stand for what is right. Every student who walks through our doors is not just pursuing 
                a career — they are preparing to become guardians of justice."
              </blockquote>
              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-xl font-semibold text-slate-800">Mian Wasif Mateen</h3> 
<p className="text-slate-500 text-sm mt-1">LL.B (Hons), LL.M</p> 
<p className="text-slate-600">Advocate High Court</p> 
<p className="founder-role mt-1">Founder – Jinnah Law Academy By Wasif Mateen</p> 


                

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              The fundamental principles that guide our approach to legal education and shape our academy's culture.
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

      {/* Achievements */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
              Our Achievements
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Milestones that reflect our commitment to excellence in legal education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <achievement.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{achievement.title}</h3>
                <p className="text-slate-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Key milestones in our academy's growth and development.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-amber-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academy Stats */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
              Academy by Numbers
            </h2>
            <p className="text-lg text-slate-200 max-w-3xl mx-auto">
              Our impact in numbers reflects our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Students Enrolled' },
              { number: '95%', label: 'Success Rate' },
              { number: '15+', label: 'Expert Faculty Members' },
              { number: '24/7', label: 'Student Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-slate-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
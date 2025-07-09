import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
        }
      });
    });

    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout 
      title="Jinnah Law Academy By Wasif Mateen - Learn Law, Lead Justice"
      description="Welcome to Jinnah Law Academy by Wasif Mateen — the first and only law-focused institute in Nowshera Virkan. Get expert guidance in LAT, LL.B and LAW-GAT."
    >
      <Hero 
        title="Learn Law, Lead Justice" 
        subtitle="Welcome to Jinnah Law Academy by Wasif Mateen — the first and only law-focused institute in Nowshera Virkan. Get expert guidance in LAT, LL.B and LAW-GAT — available both online and on-campus."
        ctaText="Explore Courses"
        ctaLink="/courses"
        backgroundImage='/law_justice.jpeg'
      />

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Jinnah Law Academy By Wasif Mateen?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎓', title: 'Only Law Academy in Nowshera Virkan', desc: 'The first and only specialized law academy in the region, providing focused legal education.' },
              { icon: '📚', title: 'Online + Physical Classes', desc: 'Flexible learning options with both online and on-campus classes to suit your schedule.' },
              { icon: '👨‍🏫', title: 'Qualified Legal Instructors', desc: 'Learn from experienced legal professionals and qualified instructors with proven expertise.' },
              { icon: '🏛️', title: 'University-Affiliated Exam Prep', desc: 'Comprehensive preparation for LAT, LL.B, and LAW-GAT exams with university-standard curriculum.' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'LAT - Law Admission Test',
                badge: 'Entrance Exam',
                desc: 'Comprehensive preparation for Law Admission Test covering Essay Writing, Legal Reasoning, and General Knowledge.',
                features: ['✓ Free LAT Test Preparation', '✓ Comprehensive Study Material', '✓ Mock Tests'],
                link: '/courses#lat',
                duration: 'Short-Term Intensive',
              },
              {
                title: 'LL.B - Bachelor of Laws',
                badge: 'Degree Program',
                desc: 'Complete law degree programs with both 4-year and 5-year options available for different educational backgrounds.',
                features: ['✓ University Syllabus', '✓ Expert Faculty', '✓ HEC Recognized'],
                link: '/courses#llb',
                duration: '4-5 Years',
              },
              {
                title: 'LAW-GAT',
                badge: 'Graduate Test',
                desc: 'Advanced preparation for Law Graduate Assessment Test covering Jurisprudence, Constitutional, Civil, and Criminal Law.',
                features: ['✓ Practice Tests', '✓ Expert Guidance', '✓ Comprehensive Coverage'],
                link: '/courses#law-gat',
                duration: 'Intensive Course',
              },
            ].map((course, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium inline-block">{course.badge}</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{course.desc}</p>
                  <ul className="text-gray-700 text-sm mb-4 space-y-1">
                    {course.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600 font-medium">{course.duration}</span>
                  <Link
                    to={course.link}
                    className="bg-blue-700 text-white text-sm px-4 py-2 rounded hover:bg-blue-800"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You can convert the Stats and CTA sections next similarly */}

    </Layout>
  );
};

export default Home;
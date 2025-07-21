import { motion, Variants } from 'framer-motion';

const students = [
  { name: 'Muhammad Azhar', program: '73/100', text: 'Scored an impressive 73 through dedication and guidance from expert faculty.', image: '/azhar.jpeg' },
  { name: 'Syed Noman', program: '66/100', text: 'Achieved 66 marks with consistent effort and expert guidance.', image: '/syed_noman.jpeg' },
  { name: 'Awais Ahmad', program: '66/100', text: 'Consistent effort and structured preparation helped secure 66 marks.', image: '/awais.jpeg' },
  { name: 'M. Abubakar', program: '59/100', text: 'Strong foundation in concepts led to a solid score of 59.', image: '/abubakar.jpeg' },
  { name: 'Waseem Munir', program: '59/100', text: 'Grateful for the academic support that led to success with 59 marks.', image: '' },
  { name: 'Rana Anas Intizar', program: '58/100', text: 'With proper guidance and mock testing, scored 58.', image: '' },
  { name: 'Junaid Mohsin', program: '57/100', text: 'Focused practice sessions and test simulations helped me achieve 57 marks.', image: '/junaid_mohsin.jpeg' },
  { name: 'Hamad UL Hassan', program: '57/100', text: 'Scored 57/100 thanks to the academy’s expert preparation strategy.', image: '' },
  { name: 'Salman Hanif', program: '56/100', text: 'Confidently cleared the test with 56 marks thanks to the structured syllabus.', image: '' },
  { name: 'Ghulam Mustafa', program: '55/100', text: 'Effective coaching and revision helped me score 55.', image: '' },
  { name: 'Ali Hamza', program: '55/100', text: 'Thankful to the academy for the support that led to my 55 marks.', image: '' },
 
  {
    name: 'Sobai Hafeez',
    program: '66/100',
    text: 'Proud to have achieved 66 marks with the help of mock tests and materials.',
    image:
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><circle cx="24" cy="24" r="24" fill="%23f1f5f9" /></svg>',
  },
  {
    name: 'Hajra Asif',
    program: '65/100',
    text: 'With discipline and academy support, I successfully scored 65.',
    image:
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><circle cx="24" cy="24" r="24" fill="%23f1f5f9" /></svg>',
  },
  {
    name: 'Huma Kanwal',
    program: '64/100',
    text: 'Scored 64 marks through focused study and valuable academy support.',
    image:
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><circle cx="24" cy="24" r="24" fill="%23f1f5f9" /></svg>',
  },
  {
    name: 'Ayesha Yaqoob',
    program: '56/100',
    text: 'Happy to be part of the academy – scored 56 successfully.',
    image:
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><circle cx="24" cy="24" r="24" fill="%23f1f5f9" /></svg>',
  },
];



const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Testimonials = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-slate-800 to-slate-900 mt-20">
        <div className="absolute inset-0">
          <img
            src="law_s4.jpg"
            alt="Testimonials"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
              Journey to Excellence
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Hear what our students have to say about their learning journey and academic progress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ✅ Testimonials Grid with staggered animation */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Achievements That Inspire</h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Discover how students excelled with guidance, dedication, and structured preparation.
            </p>
          </motion.div>

          {/* 👉 Animate cards one by one */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {students.map((student, index) => (
              <motion.div
                key={index}
                variants={itemVariants} // ✅ fixed name
                className="relative group bg-indigo-50 p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex items-center mb-4">
                  <img
                    src={student.image || 'https://via.placeholder.com/48'}
                    alt={student.name}
                    className="w-12 h-12 rounded-full object-cover bg-slate-200 border border-slate-300 shadow-sm"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-800">{student.name}</h4>
                    <span className="inline-block mt-1 text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                      Score: {student.program}
                    </span>
                  </div>
                </div>

                <div className="text-slate-700 text-sm leading-relaxed italic relative z-10">
                  {student.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

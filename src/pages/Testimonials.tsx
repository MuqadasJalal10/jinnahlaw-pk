import { motion } from 'framer-motion';

const students = [
  {
    name: 'Muhammad Azhar',
    program: 'LAT 2025 – 73/100',
    text: 'Scored an impressive 73 in LAT 2025 through dedication and guidance from expert faculty.',
    image: '',
  },
  {
    name: 'Awais Ahmad',
    program: 'LAT 2025 – 66/100',
    text: 'Consistent effort and structured preparation helped secure 66 marks in LAT.',
    image: '',
  },
  {
    name: 'M. Abubakar',
    program: 'LAT 2025 – 59/100',
    text: 'Strong foundation in law concepts led to a solid score of 59 in LAT.',
    image: '',
  },
  {
    name: 'Waseem Munir',
    program: 'LAT 2025 – 59/100',
    text: 'Grateful for the academic support that led to success in LAT with 59 marks.',
    image: '',
  },
  {
    name: 'Rana Anas Intizar',
    program: 'LAT 2025 – 58/100',
    text: 'With proper guidance and mock testing, scored 58 in LAT 2025.',
    image: '',
  },
  {
    name: 'Junaid Mohsin',
    program: 'LAT 2025 – 57/100',
    text: 'Focused practice sessions and test simulations helped me achieve 57 marks.',
    image: '',
  },
  {
    name: 'Hamad UL Hassan',
    program: 'LAT 2025 – 57/100',
    text: 'Scored 57/100 thanks to the academy’s expert preparation strategy.',
    image: '',
  },
  {
    name: 'Salman Hanif',
    program: 'LAT 2025 – 56/100',
    text: 'Confidently cleared LAT with 56 marks thanks to the structured syllabus.',
    image: '',
  },
  {
    name: 'Ghulam Mustafa',
    program: 'LAT 2025 – 55/100',
    text: 'Effective coaching and revision helped me score 55 in LAT.',
    image: '',
  },
  {
    name: 'Ali Hamza',
    program: 'LAT 2025 – 55/100',
    text: 'Thankful to the academy for the support that led to my 55 marks in LAT.',
    image: '',
  },
  {
    name: 'Sobai Hafeez',
    program: 'LAT 2025 – 66/100',
    text: 'Proud to have achieved 66 marks with the help of LAT mock tests and materials.',
    image: '',
  },
  {
    name: 'Hajra Asif',
    program: 'LAT 2025 – 65/100',
    text: 'With discipline and academy support, I successfully scored 65 in LAT.',
    image: '',
  },
  {
    name: 'Ayesha Yaqoob',
    program: 'LAT 2025 – 56/100',
    text: 'Happy to be part of Jinnah Law Academy – scored 56 in LAT 2025.',
    image: '',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-serif mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Celebrating the achievements of our dedicated students from 2024 to 2025.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-12 h-12 rounded-full object-cover bg-slate-200"
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
  );
};

export default Testimonials;

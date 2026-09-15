import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-3xl p-10 max-w-2xl text-center shadow-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Knowledge</span>
        </h1>
        <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
          The ultimate platform to test your skills, compete with friends, and track your learning progress through gamified quizzes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/login" className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Get Started
          </Link>
          <Link to="/home" className="px-8 py-4 bg-indigo-700/50 text-white font-bold rounded-full shadow-lg hover:bg-indigo-600/50 transition-all border border-indigo-400/30">
            View Quizzes
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

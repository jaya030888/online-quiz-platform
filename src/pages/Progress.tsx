import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Progress() {
  const recentResults = [
    { id: 1, quiz: "JavaScript Fundamentals", score: 85, date: "Today", time: "08:45" },
    { id: 2, quiz: "World History Trivia", score: 100, date: "Yesterday", time: "04:12" },
    { id: 3, quiz: "Advanced CSS Layouts", score: 60, date: "2 days ago", time: "14:30" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white p-6 shadow-sm flex justify-between items-center">
        <Link to="/home" className="text-gray-500 hover:text-indigo-600 transition flex items-center gap-2 font-medium">
          <ArrowLeft size={20} /> Back to Dashboard
        </Link>
        <Link to="/feedback" className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-medium hover:bg-indigo-200 transition">
          Give Feedback
        </Link>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Your Progress</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-black text-indigo-600 mb-2">24</div>
            <div className="text-gray-500 font-medium">Quizzes Completed</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-black text-green-500 mb-2">82%</div>
            <div className="text-gray-500 font-medium">Average Score</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-black text-amber-500 mb-2">7</div>
            <div className="text-gray-500 font-medium">Day Streak</div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Results</h2>
        <div className="space-y-4">
          {recentResults.map((res, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={res.id} 
              className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{res.quiz}</h3>
                <div className="text-sm text-gray-500 flex items-center gap-4 mt-1">
                  <span>{res.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14}/> {res.time}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className={`text-2xl font-bold ${res.score >= 80 ? 'text-green-500' : res.score >= 60 ? 'text-yellow-500' : 'text-red-500'}`}>
                    {res.score}%
                  </div>
                </div>
                {res.score >= 80 ? <CheckCircle2 className="text-green-500" size={32} /> : <XCircle className="text-red-500" size={32} />}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

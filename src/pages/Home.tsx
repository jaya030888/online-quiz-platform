import { Link } from 'react-router-dom';
import { Play, Trophy, BarChart2, MessageSquare, Plus, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const quizzes = [
    { id: 1, title: 'JavaScript Fundamentals', category: 'Programming', difficulty: 'Medium', questions: 15, time: '10m' },
    { id: 2, title: 'World History Trivia', category: 'History', difficulty: 'Easy', questions: 10, time: '5m' },
    { id: 3, title: 'Advanced CSS Layouts', category: 'Web Design', difficulty: 'Hard', questions: 20, time: '15m' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="text-xl font-bold text-indigo-700 tracking-tight">QuizPlatform</div>
        <div className="flex gap-4">
          <Link to="/leaderboard" className="p-2 text-gray-500 hover:text-indigo-600 transition-colors">
            <Trophy size={20} />
          </Link>
          <Link to="/progress" className="p-2 text-gray-500 hover:text-indigo-600 transition-colors">
            <BarChart2 size={20} />
          </Link>
          <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold ml-2">
            J
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Quizzes */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Available Quizzes</h2>
            <button className="flex items-center gap-2 text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
              <Plus size={16} /> Filter
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quizzes.map((quiz, i) => {
              let diffBg = "bg-red-100 text-red-700";
              if (quiz.difficulty === "Easy") diffBg = "bg-green-100 text-green-700";
              else if (quiz.difficulty === "Medium") diffBg = "bg-yellow-100 text-yellow-700";
              
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={quiz.id} 
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                      {quiz.category}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${diffBg}`}>
                      {quiz.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{quiz.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1"><Play size={14} /> {quiz.questions} Qs</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {quiz.time}</span>
                  </div>
                  <Link to="/quiz" className="block w-full py-2.5 bg-indigo-50 text-indigo-700 text-center font-semibold rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    Start Quiz
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column - Stats / Gamification */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 text-white shadow-lg">
            <h3 className="text-lg font-semibold mb-1">Your Progress</h3>
            <p className="text-indigo-100 text-sm mb-6">Keep it up! You're in the top 20% this week.</p>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-4xl font-extrabold">2,450</div>
                <div className="text-indigo-200 text-sm font-medium">Total XP</div>
              </div>
              <Trophy size={48} className="text-yellow-400 opacity-80" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/leaderboard" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                <div className="p-2 bg-amber-100 text-amber-600 rounded-lg"><Trophy size={18} /></div>
                Global Leaderboard
              </Link>
              <Link to="/progress" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><BarChart2 size={18} /></div>
                Detailed Statistics
              </Link>
              <Link to="/feedback" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg"><MessageSquare size={18} /></div>
                Provide Feedback
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

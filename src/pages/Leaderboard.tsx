import { Link } from 'react-router-dom';
import { Trophy, Medal, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Leaderboard() {
  const leaders = [
    { rank: 1, name: 'Alex Johnson', score: 9850, avatar: 'A' },
    { rank: 2, name: 'Sarah Miller', score: 9200, avatar: 'S' },
    { rank: 3, name: 'David Chen', score: 8940, avatar: 'D' },
    { rank: 4, name: 'Emma Wilson', score: 8100, avatar: 'E' },
    { rank: 5, name: 'Michael Brown', score: 7850, avatar: 'M' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white p-6 shadow-sm flex items-center">
        <Link to="/home" className="text-gray-500 hover:text-indigo-600 transition flex items-center gap-2 font-medium">
          <ArrowLeft size={20} /> Back to Dashboard
        </Link>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-6 flex flex-col items-center">
        <div className="w-16 h-16 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mb-4">
          <Trophy size={32} />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Global Leaderboard</h1>
        <p className="text-gray-500 mb-10">See how you stack up against the best minds.</p>

        <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {leaders.map((leader, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={leader.rank} 
              className={`flex items-center p-5 border-b border-gray-50 ${leader.rank <= 3 ? 'bg-amber-50/30' : ''}`}
            >
              <div className="w-10 text-center font-bold text-gray-400">
                {leader.rank === 1 ? <Medal className="text-yellow-500 mx-auto" /> : 
                 leader.rank === 2 ? <Medal className="text-gray-400 mx-auto" /> : 
                 leader.rank === 3 ? <Medal className="text-amber-600 mx-auto" /> : 
                 `#${leader.rank}`}
              </div>
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold ml-4">
                {leader.avatar}
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-gray-900">{leader.name}</h3>
              </div>
              <div className="font-mono font-bold text-indigo-600">
                {leader.score.toLocaleString()} XP
              </div>
            </motion.div>
          ))}
          
          <div className="p-5 bg-gray-50 text-center text-sm font-medium text-gray-500">
            You are currently ranked #1,245. Keep playing to climb the ranks!
          </div>
        </div>
      </main>
    </div>
  );
}

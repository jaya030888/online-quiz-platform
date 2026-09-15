import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Quiz() {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      q: "What is the output of 'typeof null' in JavaScript?",
      options: ["'object'", "'null'", "'undefined'", "'boolean'"],
    },
    {
      q: "Which company developed React?",
      options: ["Google", "Facebook", "Microsoft", "Twitter"],
    },
    {
      q: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      navigate('/progress'); // Finish quiz
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white p-4 flex justify-between items-center shadow-sm sticky top-0 z-10">
        <button onClick={() => navigate('/home')} className="text-gray-500 font-medium hover:text-gray-800">Exit Quiz</button>
        <div className="flex items-center gap-2 font-bold text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full">
          <Clock size={18} /> {formatTime(timeLeft)}
        </div>
      </header>

      <main className="flex-1 max-w-3xl w-full mx-auto p-6 flex flex-col justify-center">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-semibold text-gray-500 mb-2">
            <span>Question {currentQ + 1} of {questions.length}</span>
            <span>{Math.round(((currentQ + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div 
              className="bg-indigo-600 h-2.5 rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
              {questions[currentQ].q}
            </h2>
            
            <div className="space-y-3">
              {questions[currentQ].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedAnswer(i)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium ${
                    selectedAnswer === i 
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-800' 
                      : 'border-gray-100 bg-white hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <span className="inline-block w-8 text-gray-400">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Actions */}
        <div className="flex justify-between items-center mt-auto pb-4">
          <div className="text-gray-400 flex items-center gap-2 text-sm">
            <AlertCircle size={16} /> Choose the most accurate answer
          </div>
          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 disabled:opacity-50 disabled:shadow-none transition-all"
          >
            {currentQ === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>

      </main>
    </div>
  );
}

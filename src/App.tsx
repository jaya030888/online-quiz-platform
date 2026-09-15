import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.tsx';
import Login from './pages/Login.tsx';
import Home from './pages/Home.tsx';
import Quiz from './pages/Quiz.tsx';
import Leaderboard from './pages/Leaderboard.tsx';
import Progress from './pages/Progress.tsx';
import Feedback from './pages/Feedback.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

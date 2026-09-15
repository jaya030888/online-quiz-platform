import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Send } from 'lucide-react';

export default function Feedback() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white p-6 shadow-sm flex items-center">
        <Link to="/home" className="text-gray-500 hover:text-indigo-600 transition flex items-center gap-2 font-medium">
          <ArrowLeft size={20} /> Back to Dashboard
        </Link>
      </header>

      <main className="flex-1 max-w-2xl w-full mx-auto p-6 flex flex-col justify-center">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6">
            <MessageSquare size={32} />
          </div>
          
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">We value your feedback</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Help us improve the platform. Did you find a bug? Have a feature request? Let us know below!
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What type of feedback is this?
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
                <option>General Suggestion</option>
                <option>Bug Report</option>
                <option>Quiz Content Error</option>
                <option>Feature Request</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your message
              </label>
              <textarea 
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
                placeholder="Tell us what you think..."
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-md shadow-indigo-200 transition-colors flex justify-center items-center gap-2"
            >
              <Send size={18} /> Submit Feedback
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

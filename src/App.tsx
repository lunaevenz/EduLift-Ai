import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Layout from './components/Layout';
import LessonPlanGenerator from './components/LessonPlanGenerator';
import ParentCommunicationAssistant from './components/ParentCommunicationAssistant';
import IEPInterventionSupport from './components/IEPInterventionSupport';

// Dynamic dashboard component with full-fidelity launch cards for our workspace suite
const Dashboard = () => (
  <div className="p-8 animate-in fade-in duration-300">
    <h1 className="text-3xl font-extrabold mb-2 tracking-tight text-slate-950 font-sans">Teacher Dashboard</h1>
    <p className="text-slate-600 font-sans">Welcome back, Sarah! Select an AI-powered assistant from the workspace to get started.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* Lesson planner */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider">WORKSPACE</span>
          <h3 className="font-extrabold text-lg text-slate-900 mt-3 mb-1 font-sans">Lesson Planner</h3>
          <p className="text-sm text-slate-500 font-sans leading-relaxed">Generate standards-aligned 7-step lesson plans with multi-tier differentiation guides.</p>
        </div>
        <div className="mt-6 flex justify-end">
          <a href="#/lesson-planner" className="bg-indigo-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-indigo-700 transition">Open Workspace</a>
        </div>
      </div>

      {/* Parent assistant */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-200 transition-all flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full uppercase tracking-wider">COMMUNICATION</span>
          <h3 className="font-extrabold text-lg text-slate-900 mt-3 mb-1 font-sans">Parent Assistant</h3>
          <p className="text-sm text-slate-500 font-sans leading-relaxed">Draft empathetic, 5-tone translated outreach messages for families in Spanish, Vietnamese, or Arabic.</p>
        </div>
        <div className="mt-6 flex justify-end">
          <a href="#/parent-assistant" className="bg-teal-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-teal-700 transition">Open Workspace</a>
        </div>
      </div>

      {/* IEP & Intervention Support */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-violet-200 transition-all flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full uppercase tracking-wider">COMPLIANCE</span>
          <h3 className="font-extrabold text-lg text-slate-900 mt-3 mb-1 font-sans">IEP & MTSS Support</h3>
          <p className="text-sm text-slate-500 font-sans leading-relaxed">Construct legally compliant SMART IEP goal drafts, accommodations, and CRA-model MTSS tier plans.</p>
        </div>
        <div className="mt-6 flex justify-end">
          <a href="#/iep-docs" className="bg-violet-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-violet-700 transition">Open Workspace</a>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* App Routes wrapped in Layout */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/lesson-planner" element={<Layout><LessonPlanGenerator /></Layout>} />
        <Route path="/parent-assistant" element={<Layout><ParentCommunicationAssistant /></Layout>} />
        <Route path="/iep-docs" element={<Layout><IEPInterventionSupport /></Layout>} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

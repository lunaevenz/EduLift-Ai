import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Layout from './components/Layout';
import LessonPlanGenerator from './components/LessonPlanGenerator';

// Dummy components for other routes
const Dashboard = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    <p className="text-slate-600">Welcome back, Sarah! Select a tool from the sidebar to get started.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="font-bold mb-2">Recent Lessons</h3>
        <p className="text-sm text-slate-500 italic">No recent lessons found.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="font-bold mb-2">Upcoming IEPs</h3>
        <p className="text-sm text-slate-500 italic">None scheduled for this week.</p>
      </div>
    </div>
  </div>
);

const ParentAssistant = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">Parent Communication Assistant</h1>
    <p className="text-slate-600">Coming soon in the next task!</p>
  </div>
);

const IEPDocs = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">IEP Documentation</h1>
    <p className="text-slate-600">Simplify your compliance workflow.</p>
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
        <Route path="/parent-assistant" element={<Layout><ParentAssistant /></Layout>} />
        <Route path="/iep-docs" element={<Layout><IEPDocs /></Layout>} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

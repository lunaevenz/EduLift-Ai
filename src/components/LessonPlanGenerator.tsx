import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  BookMarked
} from 'lucide-react';

const LessonPlanGenerator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    grade: '4',
    subject: 'Science',
    topic: '',
    duration: '45',
    standardsSystem: 'NGSS Next Gen',
    standardCode: '',
    needs: {
      iep: true,
      ell: true,
      gifted: false,
      remedial: false
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  /*
  const handleCheckboxChange = (id: string) => {
    setFormData(prev => ({
      ...prev,
      needs: {
        ...prev.needs,
        [id as keyof typeof prev.needs]: !prev.needs[id as keyof typeof prev.needs]
      }
    }));
  };
  */

  return (
    <div className="flex flex-col h-full overflow-hidden bg-edulift-canvas">
      {/* Top Header */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-3">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition" title="Back">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-slate-900 font-sans">Standard-Aligned Lesson Planner</h1>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-50 text-edulift-indigo border border-indigo-100">
            Professional Plan: Unlimited
          </span>
        </div>
      </header>

      {/* Two-Pane Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Form Pane */}
        <section className="w-96 bg-white border-r border-slate-200 p-6 flex-shrink-0 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">Lesson Parameters</h2>
              <div className="flex space-x-1">
                {[1, 2, 3, 4].map(s => (
                  <div key={s} className={`w-2 h-2 rounded-full ${s === step ? 'bg-edulift-indigo' : 'bg-slate-200'}`} />
                ))}
              </div>
            </div>

            {/* STEP 1: Grade & Subject */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-tight">Grade Level</label>
                    <select 
                      id="grade" 
                      value={formData.grade}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-edulift-indigo bg-white"
                    >
                      <option value="TK">Transitional Kindergarten (TK)</option>
                      <option value="K">Kindergarten</option>
                      <option value="1">1st Grade</option>
                      <option value="2">2nd Grade</option>
                      <option value="3">3rd Grade</option>
                      <option value="4">4th Grade</option>
                      <option value="5">5th Grade</option>
                      <option value="6">6th Grade</option>
                      <option value="MS">Middle School (6-8)</option>
                      <option value="HS">High School (9-12)</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-tight">Subject Area</label>
                    <select 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-edulift-indigo bg-white"
                    >
                      <optgroup label="Elementary">
                        <option value="ELA">English Language Arts</option>
                        <option value="Math">Mathematics</option>
                        <option value="Science">Science (NGSS)</option>
                        <option value="History">History-Social Science</option>
                        <option value="Arts">Visual & Performing Arts</option>
                      </optgroup>
                      <optgroup label="Secondary">
                        <option value="Algebra">Algebra I</option>
                        <option value="Biology">Biology</option>
                        <option value="WorldHistory">World History</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-white bg-edulift-indigo hover:bg-indigo-700 active:scale-95 transition font-semibold shadow-md shadow-indigo-600/15 group"
                  >
                    <span>Next: Lesson Topic</span>
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Topic & Objective */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-tight">Lesson Topic / Core Concept</label>
                  <div className="relative">
                    <input 
                      id="topic" 
                      type="text" 
                      value={formData.topic}
                      onChange={handleInputChange}
                      placeholder="e.g., 'Fractions on a number line'"
                      className="block w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-edulift-indigo transition"
                    />
                    <Sparkles className="absolute right-3 top-3 w-4 h-4 text-slate-300" />
                  </div>
                  <p className="text-[10px] text-slate-400">Pro-tip: You can use natural language like "Teach my 3rd graders how to multiply"</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-tight">Duration</label>
                      <select 
                        id="duration" 
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-edulift-indigo bg-white"
                      >
                        <option value="30">30 Mins</option>
                        <option value="45">45 Mins</option>
                        <option value="60">60 Mins</option>
                        <option value="90">90 Mins</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-tight">Standards</label>
                      <select 
                        id="standardsSystem"
                        value={formData.standardsSystem}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-edulift-indigo bg-white"
                      >
                        <option>NGSS Next Gen</option>
                        <option>Common Core</option>
                        <option>State Standards</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button 
                    onClick={() => setStep(1)}
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 active:scale-95 transition font-semibold"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => setStep(3)}
                    className="flex-[2] inline-flex items-center justify-center px-5 py-3 rounded-xl text-white bg-edulift-indigo hover:bg-indigo-700 active:scale-95 transition font-semibold shadow-md shadow-indigo-600/15 group"
                  >
                    <span>Confirm Parameters</span>
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 Placeholder (Differentiated Needs) */}
            {step >= 3 && (
              <div className="space-y-6 opacity-50 pointer-events-none">
                 <h3 className="text-sm font-bold text-slate-700">Additional Options</h3>
                 {/* This would be step 3 and 4 in a real implementation */}
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-slate-100">
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
              <div className="flex items-start space-x-3 text-indigo-700">
                <BookMarked className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-xs space-y-1 leading-relaxed">
                  <p className="font-bold uppercase tracking-tight">AI Strategy</p>
                  <p>Selecting the right grade and topic allows EduLift to pull from our verified standards database for accuracy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Preview Pane (Empty State for now) */}
        <section className="flex-1 bg-slate-50 p-12 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="max-w-md space-y-6 animate-pulse">
            <div className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto">
              <Sparkles className="w-10 h-10 text-indigo-200" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-400 underline decoration-indigo-200 decoration-4 underline-offset-8">Preview will appear here</h3>
              <p className="text-sm text-slate-400">Complete the parameters on the left to begin generating your high-quality lesson plan.</p>
            </div>
            <div className="pt-8 space-y-3">
               <div className="h-4 bg-slate-200 rounded-full w-3/4 mx-auto opacity-40"></div>
               <div className="h-4 bg-slate-200 rounded-full w-1/2 mx-auto opacity-30"></div>
               <div className="h-20 bg-slate-200 rounded-2xl w-full mx-auto opacity-20"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LessonPlanGenerator;

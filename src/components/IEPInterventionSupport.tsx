import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle,
  Printer, 
  ShieldCheck, 
  HelpCircle,
  Copy,
  Plus,
  Trash2
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Spec types
type ComponentType = 'goals' | 'accommodations' | 'mtss';
type DisabilityCategory = 'SLD' | 'AUT' | 'SLI' | 'OHI' | 'ED';
type NeedArea = 'math' | 'reading' | 'writing' | 'behavior';

interface Benchmark {
  step: number;
  description: string;
  targetDate: string;
}

const IEPInterventionSupport: React.FC = () => {
  // Student Context State
  const [studentName, setStudentName] = useState('Liam');
  const [studentGrade, setStudentGrade] = useState('4');
  const [disability, setDisability] = useState<DisabilityCategory>('SLD');
  const [placement, setPlacement] = useState('Gen Ed (≥80% in Gen Ed)');
  const [serviceProvider, setServiceProvider] = useState('SPED Teacher');
  
  // Active component tab
  const [activeTab, setActiveTab] = useState<ComponentType>('goals');

  // Need Parameters
  const [needArea, setNeedArea] = useState<NeedArea>('math');
  const [specificSkill, setSpecificSkill] = useState('Multi-digit multiplication with regrouping');
  const [currentBaseline, setCurrentBaseline] = useState(
    'Student solves 2-digit × 1-digit with 60% accuracy (6/10 correct). Drops to 30% accuracy (3/10 correct) when both numbers are 2-digit. Knows basic facts but inconsistent with regrouping algorithm.'
  );
  const [observableBehavior, setObservableBehavior] = useState('Skips regrouping step when multiplying tens place');
  
  // Accommodations parameters
  const [supportMath, setSupportMath] = useState(true);
  const [supportELA, setSupportELA] = useState(true);
  const [supportScience, setSupportScience] = useState(false);
  const [supportTesting, setSupportTesting] = useState(true);
  const [excludeModifications, setExcludeModifications] = useState(false);

  // MTSS Parameters
  const [mtssTier, setMtssTier] = useState<'2' | '3'>('2');
  const [mtssFreq, setMtssFreq] = useState('30 minutes, 4x per week in small group');

  // AI Loading & Simulated results states
  const [isGenerating, setIsGenerating] = useState(false);
  const [loaderText, setLoaderText] = useState('EduLift AI is executing California Ed Code check...');
  const [generatedGoal, setGeneratedGoal] = useState('');
  const [goalCondition, setGoalCondition] = useState('');
  const [goalBehavior, setGoalBehavior] = useState('');
  const [goalCriterion, setGoalCriterion] = useState('');
  const [goalTimeline, setGoalTimeline] = useState('');
  const [benchmarks, setBenchmarks] = useState<Benchmark[]>([]);
  const [copied, setCopied] = useState(false);

  // Auto-update need area defaults when need area changes to make UX extremely intuitive
  useEffect(() => {
    if (needArea === 'math') {
      setSpecificSkill('Multi-digit multiplication with regrouping');
      setCurrentBaseline('Student solves 2-digit × 1-digit with 60% accuracy (6/10 correct). Drops to 30% accuracy (3/10 correct) when both numbers are 2-digit. Knows basic facts but inconsistent with regrouping algorithm.');
      setObservableBehavior('Skips regrouping step when multiplying tens place');
    } else if (needArea === 'reading') {
      setSpecificSkill('Recalling key details and identifying main idea');
      setCurrentBaseline('Student reads grade-level passages with 90% decoding accuracy but struggles to recall details. Answers main-idea questions with 40% accuracy (2 of 5 correct on weekly benchmark).');
      setObservableBehavior('Becomes distracted during silent reading, cannot identify key keywords');
    } else if (needArea === 'writing') {
      setSpecificSkill('Constructing compound sentences with punctuation');
      setCurrentBaseline('Student drafts simple sentences independently but struggles to link ideas. Paragraph essays contain only simple structures, with 50% capitalization/punctuation accuracy on portfolio tests.');
      setObservableBehavior('Omits commas, run-on structures occur when linking ideas');
    } else if (needArea === 'behavior') {
      setSpecificSkill('Requesting breaks and self-regulating frustrations');
      setCurrentBaseline('Student becomes anxious during independent math work, crumbles paper or shuts down. Currently requests help/breaks appropriately in only 20% of frustrating opportunities (1 of 5 occurrences).');
      setObservableBehavior('Crumbles paper, makes task avoidance statements, shuts down');
    }
  }, [needArea]);

  // Goal Generator Model Logic (Interactive Client Simulation)
  const compileDraftContent = () => {
    let baseGoal = '';
    let condition = '';
    let behavior = '';
    let criterion = '';
    let timeline = 'by June 2027';

    if (needArea === 'math') {
      condition = `Given 10 two-digit by two-digit multiplication problems`;
      behavior = `${studentName} will accurately solve them using the standard algorithm with regrouping`;
      criterion = `achieving 80% accuracy (8/10 correct) on 3 consecutive weekly math probes`;
      baseGoal = `${condition}, ${studentName} will accurately solve them using the standard algorithm with regrouping, ${criterion} ${timeline}.`;
      
      setBenchmarks([
        { step: 1, description: `${studentName} will solve 2-digit × 1-digit problems with regrouping with 80% accuracy on 2 consecutive weekly probes.`, targetDate: '2026-10-15' },
        { step: 2, description: `${studentName} will solve 2-digit × 2-digit problems without regrouping with 80% accuracy on 2 consecutive weekly probes.`, targetDate: '2027-01-15' },
        { step: 3, description: `${studentName} will solve 2-digit × 2-digit problems with regrouping once with 80% accuracy on 2 consecutive weekly probes.`, targetDate: '2027-04-15' }
      ]);
    } else if (needArea === 'reading') {
      condition = `Given a grade-level reading passage`;
      behavior = `${studentName} will accurately read and orally identify the main idea and recall 3 supporting details`;
      criterion = `with 80% accuracy on 4 of 5 weekly comprehension checks`;
      baseGoal = `${condition}, ${studentName} will accurately read and orally identify the main idea and recall 3 supporting details, ${criterion} ${timeline}.`;

      setBenchmarks([
        { step: 1, description: `${studentName} will identify the main idea of a short paragraph with 80% accuracy on 3 consecutive probes.`, targetDate: '2026-10-15' },
        { step: 2, description: `${studentName} will locate and list 2 key supporting details from a grade-level passage with 80% accuracy on 3 consecutive probes.`, targetDate: '2027-01-15' },
        { step: 3, description: `${studentName} will identify both main idea and 3 details with 80% accuracy on 2 consecutive checks.`, targetDate: '2027-04-15' }
      ]);
    } else if (needArea === 'writing') {
      condition = `Given a standard writing prompt`;
      behavior = `${studentName} will independently draft a 5-sentence paragraph containing at least 2 compound sentences with correct capitalization and punctuation`;
      criterion = `with 80% accuracy (4/5 sentences correct) on 3 consecutive writing portfolios`;
      baseGoal = `${condition}, ${studentName} will independently draft a 5-sentence paragraph containing at least 2 compound sentences with correct capitalization and punctuation, ${criterion} ${timeline}.`;

      setBenchmarks([
        { step: 1, description: `${studentName} will write simple sentences starting with capital letters and ending with periods with 90% accuracy on 3 consecutive samples.`, targetDate: '2026-10-15' },
        { step: 2, description: `${studentName} will combine 2 simple sentences using conjunctions (and, but, or) with 80% accuracy on 2 consecutive samples.`, targetDate: '2027-01-15' },
        { step: 3, description: `${studentName} will draft a 3-sentence passage containing at least 1 compound sentence with 80% correct mechanics on 2 consecutive samples.`, targetDate: '2027-04-15' }
      ]);
    } else if (needArea === 'behavior') {
      condition = `When feeling overwhelmed or frustrated during independent academic work`;
      behavior = `${studentName} will independently utilize a learned sensory coping strategy or request a break using a visual break card`;
      criterion = `in 4 of 5 opportunities over 3 consecutive weeks of observation`;
      baseGoal = `${condition}, ${studentName} will independently utilize a learned sensory coping strategy or request a break using a visual break card, ${criterion} ${timeline}.`;

      setBenchmarks([
        { step: 1, description: `With verbal prompt, ${studentName} will identify feeling frustrated and select a calming strategy in 80% of opportunities.`, targetDate: '2026-10-15' },
        { step: 2, description: `With a visual desk prompt, ${studentName} will request a 3-minute break before behavior escalates in 80% of opportunities.`, targetDate: '2027-01-15' },
        { step: 3, description: `Independently, ${studentName} will utilize a designated safe-space cool-down break in 70% of irritating opportunities.`, targetDate: '2027-04-15' }
      ]);
    }

    setGeneratedGoal(baseGoal);
    setGoalCondition(condition);
    setGoalBehavior(behavior);
    setGoalCriterion(criterion);
    setGoalTimeline(timeline);
  };

  // Compile on initial render
  useEffect(() => {
    compileDraftContent();
  }, [studentName, needArea]);

  // Simulated AI Generation Cycle with Multi-Stage Loader Texts
  const handleGenerate = () => {
    setIsGenerating(true);
    setLoaderText('EduLift AI is executing California Ed Code §56345 check...');
    
    setTimeout(() => {
      setLoaderText('Auditing IDEA SMART criteria compliance...');
    }, 500);

    setTimeout(() => {
      setIsGenerating(false);
      compileDraftContent();
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `Student Name: ${studentName}\nDisability: ${disability}\nComponent: ${activeTab.toUpperCase()}\n\nDraft Content:\n${generatedGoal}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddBenchmark = () => {
    const nextStep = benchmarks.length + 1;
    setBenchmarks([
      ...benchmarks,
      {
        step: nextStep,
        description: `${studentName} will demonstrate step ${nextStep} competency with 80% accuracy.`,
        targetDate: '2027-05-15'
      }
    ]);
  };

  const handleDeleteBenchmark = (step: number) => {
    setBenchmarks(benchmarks.filter(b => b.step !== step).map((b, i) => ({ ...b, step: i + 1 })));
  };

  // Compliance calculations based on inputs
  const calculateComplianceScore = () => {
    let score = 70;
    if (studentName.length > 2) score += 10;
    if (currentBaseline.length > 30) score += 10;
    if (observableBehavior.length > 10) score += 10;
    return score;
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-edulift-canvas">
      
      {/* Top Header */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-3">
          <Link to="/dashboard" className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition" title="Back to Dashboard">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-bold text-slate-900 font-sans">IEP & Intervention Support Specialist</h1>
        </div>
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-edulift-teal border border-teal-200 animate-pulse">
            <ShieldCheck className="w-4 h-4 mr-1 text-edulift-teal" />
            MTSS & IDEA Compliance Engine
          </span>
        </div>
      </header>

      {/* Main Workspace split */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT CONFIGURATION PANE */}
        <section className="w-[420px] bg-white border-r border-slate-200 p-6 overflow-y-auto flex flex-col justify-between flex-shrink-0">
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Student Profiles & Criteria</h2>
              <p className="text-xs text-slate-500">Construct legal, baseline-driven, or tier-focused goals and supports.</p>
            </div>

            {/* Student Context */}
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-3">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between">
                <span>1. Student Context</span>
                <span className="text-xs text-emerald-600 lowercase font-bold">FERPA Secure</span>
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold text-slate-600">Student Name</label>
                  <input 
                    type="text" 
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="block w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-edulift-indigo bg-white font-medium" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold text-slate-600">Grade / Age</label>
                  <select 
                    value={studentGrade}
                    onChange={(e) => setStudentGrade(e.target.value)}
                    className="block w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none font-medium"
                  >
                    <option value="K">Kindergarten (Age 5)</option>
                    <option value="1">1st Grade (Age 6)</option>
                    <option value="2">2nd Grade (Age 7)</option>
                    <option value="3">3rd Grade (Age 8)</option>
                    <option value="4">4th Grade (Age 9)</option>
                    <option value="5">5th Grade (Age 10)</option>
                    <option value="6">6th Grade (Age 11)</option>
                    <option value="7">7th Grade (Age 12)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-slate-600">Disability Category (California Eligibility)</label>
                <select 
                  value={disability}
                  onChange={(e) => setDisability(e.target.value as DisabilityCategory)}
                  className="block w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none font-medium"
                >
                  <option value="SLD">Specific Learning Disability (SLD)</option>
                  <option value="AUT">Autism (AUT)</option>
                  <option value="SLI">Speech or Language Impairment (SLI)</option>
                  <option value="OHI">Other Health Impairment (OHI)</option>
                  <option value="ED">Emotional Disturbance (ED)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold text-slate-600">Current Placement</label>
                  <select 
                    value={placement}
                    onChange={(e) => setPlacement(e.target.value)}
                    className="block w-full px-2 py-1.5 text-[11px] rounded-lg border border-slate-200 bg-white focus:outline-none font-medium"
                  >
                    <option>Gen Ed (≥80% in Gen Ed)</option>
                    <option>Resource Specialist (Pullout 40-79%)</option>
                    <option>Special Day Class (&lt;40%)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold text-slate-600">Primary Provider</label>
                  <select 
                    value={serviceProvider}
                    onChange={(e) => setServiceProvider(e.target.value)}
                    className="block w-full px-2 py-1.5 text-[11px] rounded-lg border border-slate-200 bg-white focus:outline-none font-medium"
                  >
                    <option>SPED Teacher</option>
                    <option>Speech Therapist (SLP)</option>
                    <option>Occupational Therapist (OT)</option>
                    <option>Behavior Specialist</option>
                  </select>
                </div>
              </div>
            </div>

            {/* IEP/MTSS Component tab switcher */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase">2. IEP/MTSS Component Type</label>
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl">
                <button 
                  onClick={() => setActiveTab('goals')}
                  className={`py-1.5 px-2 text-center text-xs font-bold rounded-lg transition ${
                    activeTab === 'goals' ? 'bg-white text-slate-900 shadow' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  SMART Goals
                </button>
                <button 
                  onClick={() => setActiveTab('accommodations')}
                  className={`py-1.5 px-2 text-center text-xs font-bold rounded-lg transition ${
                    activeTab === 'accommodations' ? 'bg-white text-slate-900 shadow' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Accomms
                </button>
                <button 
                  onClick={() => setActiveTab('mtss')}
                  className={`py-1.5 px-2 text-center text-xs font-bold rounded-lg transition ${
                    activeTab === 'mtss' ? 'bg-white text-slate-900 shadow' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  MTSS Plan
                </button>
              </div>
            </div>

            {/* Step 3: Specific Inputs per active tab */}
            <div className="space-y-4">
              
              {/* GOALS FIELDS */}
              {activeTab === 'goals' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase">Area of Need & Domain</label>
                    <select 
                      value={needArea}
                      onChange={(e) => setNeedArea(e.target.value as NeedArea)}
                      className="block w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-edulift-indigo font-medium"
                    >
                      <option value="math">Academic: Math calculation & computation</option>
                      <option value="reading">Academic: Reading Comprehension & details</option>
                      <option value="writing">Academic: Written Language & sentence mechanics</option>
                      <option value="behavior">Behavioral: Task Focus & self-regulation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase">Specific Skill Focused</label>
                    <input 
                      type="text" 
                      value={specificSkill}
                      onChange={(e) => setSpecificSkill(e.target.value)}
                      className="block w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-edulift-indigo font-medium" 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase">Current Performance (Baseline Data)</label>
                    <textarea 
                      rows={4}
                      value={currentBaseline}
                      onChange={(e) => setCurrentBaseline(e.target.value)}
                      className="block w-full p-3 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-edulift-indigo font-sans leading-relaxed" 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase">Observable Behavior Breakdown</label>
                    <input 
                      type="text" 
                      value={observableBehavior}
                      onChange={(e) => setObservableBehavior(e.target.value)}
                      className="block w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-edulift-indigo font-medium" 
                    />
                  </div>
                </div>
              )}

              {/* ACCOMMODATIONS FIELDS */}
              {activeTab === 'accommodations' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase">Target Support Subject Areas</label>
                    <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <label className="flex items-center space-x-2 font-medium">
                        <input 
                          type="checkbox" 
                          checked={supportMath} 
                          onChange={() => setSupportMath(!supportMath)} 
                          className="rounded text-edulift-teal focus:ring-edulift-teal" 
                        />
                        <span>Mathematics</span>
                      </label>
                      <label className="flex items-center space-x-2 font-medium">
                        <input 
                          type="checkbox" 
                          checked={supportELA} 
                          onChange={() => setSupportELA(!supportELA)} 
                          className="rounded text-edulift-teal focus:ring-edulift-teal" 
                        />
                        <span>English Language Arts</span>
                      </label>
                      <label className="flex items-center space-x-2 font-medium">
                        <input 
                          type="checkbox" 
                          checked={supportScience} 
                          onChange={() => setSupportScience(!supportScience)} 
                          className="rounded text-edulift-teal focus:ring-edulift-teal" 
                        />
                        <span>Science (NGSS)</span>
                      </label>
                      <label className="flex items-center space-x-2 font-medium">
                        <input 
                          type="checkbox" 
                          checked={supportTesting} 
                          onChange={() => setSupportTesting(!supportTesting)} 
                          className="rounded text-edulift-teal focus:ring-edulift-teal" 
                        />
                        <span>Testing / Assessments</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase">Exclude Modifications? (Impact on Standards)</label>
                    <label className="flex items-start space-x-2.5 text-xs bg-amber-50/40 p-3 rounded-xl border border-amber-100/50">
                      <input 
                        type="checkbox" 
                        checked={excludeModifications} 
                        onChange={() => setExcludeModifications(!excludeModifications)} 
                        className="rounded mt-0.5" 
                      />
                      <span className="text-slate-600 font-medium">Show ONLY Accommodations (No changes to grade-level curriculum standards)</span>
                    </label>
                  </div>
                </div>
              )}

              {/* MTSS FIELDS */}
              {activeTab === 'mtss' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase">MTSS Intervention Tier</label>
                    <select 
                      value={mtssTier}
                      onChange={(e) => setMtssTier(e.target.value as '2' | '3')}
                      className="block w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-edulift-indigo font-medium"
                    >
                      <option value="2">Tier 2 — Targeted Small Group (6-8 Weeks)</option>
                      <option value="3">Tier 3 — Intensive Individualized Intervention</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase">Intervention Duration & Frequency</label>
                    <input 
                      type="text" 
                      value={mtssFreq}
                      onChange={(e) => setMtssFreq(e.target.value)}
                      className="block w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none font-medium text-slate-800" 
                    />
                  </div>
                </div>
              )}

            </div>

            {/* Generate Trigger */}
            <button 
              onClick={handleGenerate}
              className="w-full inline-flex items-center justify-center py-3.5 rounded-xl text-white bg-edulift-indigo hover:bg-indigo-700 transition font-bold text-sm shadow-md shadow-indigo-600/10 active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Generate Aligned Support Draft
            </button>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <p>Local Sandbox Sync Active</p>
            <p className="font-bold text-emerald-600">FERPA Compliant</p>
          </div>
        </section>

        {/* RIGHT DISPLAY VIEWPORT & RESULTS */}
        <section className="flex-1 bg-slate-100 p-6 overflow-hidden flex flex-col justify-between relative">
          
          {/* Active Loading Overlay */}
          {isGenerating && (
            <div className="absolute inset-0 bg-slate-100/90 flex flex-col items-center justify-center space-y-4 z-40">
              <div className="w-16 h-16 rounded-full border-4 border-indigo-200 border-t-edulift-indigo animate-spin"></div>
              <p className="font-bold text-sm text-slate-900 animate-pulse">{loaderText}</p>
            </div>
          )}

          {/* Master Result Card Wrapper */}
          <div className="flex-1 bg-white rounded-2xl border border-slate-200/80 shadow-lg flex flex-col overflow-hidden">
            
            {/* Header Client Controls */}
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center space-x-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Teacher-In-The-Loop Draft Review</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-edulift-indigo border border-indigo-100">
                  {activeTab === 'goals' && 'IEP Goals & Benchmarks'}
                  {activeTab === 'accommodations' && 'IEP Accommodations'}
                  {activeTab === 'mtss' && 'MTSS Tier 2/3 Strategy'}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-xs font-bold transition flex items-center space-x-1"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied Draft!' : 'Copy Plain Text'}</span>
                </button>
                <button 
                  onClick={() => alert(`Simulating PDF Export of ${studentName}'s draft...`)}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-xs font-bold transition flex items-center space-x-1"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print PDF</span>
                </button>
              </div>
            </div>

            {/* Non-Negotiable Compliance Banner */}
            <div className="px-6 py-3.5 bg-amber-50 border-b border-amber-200 text-slate-700 flex items-start space-x-2.5 flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-extrabold text-slate-900 block">⚠️ AI-GENERATED DRAFT — TEACHER REVIEW REQUIRED</span>
                This draft is prepared to assist the IEP team. All content must be verified, customized, and approved by qualified professionals (IDEA §300.320 & CA Ed Code §56345). The AI does not make educational decisions.
              </div>
            </div>

            {/* Split layout inside the output area */}
            <div className="flex-1 flex overflow-hidden">
              
              {/* Dynamic Content Sheet */}
              <div className="flex-1 p-8 overflow-y-auto border-r border-slate-100" id="sheet-viewport">
                
                {/* 1. GOALS TAB */}
                {activeTab === 'goals' && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-100 pb-4 flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900">Annual SMART IEP Goal Suggestions</h3>
                        <p className="text-xs text-slate-500 font-medium">
                          Prepared for: <strong className="text-slate-800">{studentName}</strong> • Category: <strong className="text-slate-800">{disability} ({needArea.toUpperCase()})</strong>
                        </p>
                      </div>
                      <div>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          Compliant Draft
                        </span>
                      </div>
                    </div>

                    {/* Annual Goal Card */}
                    <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ANNUAL GOAL STATEMENT</span>
                        <span className="text-[10px] text-edulift-indigo font-bold bg-indigo-50 px-2.5 py-1 rounded border border-indigo-100">
                          IDEA §300.320(a)(2)
                        </span>
                      </div>
                      
                      <textarea 
                        rows={3} 
                        value={generatedGoal}
                        onChange={(e) => setGeneratedGoal(e.target.value)}
                        className="w-full text-sm font-medium text-slate-800 leading-relaxed p-3 rounded-xl border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-2 focus:ring-indigo-500/10" 
                      />

                      {/* SMART components parsed */}
                      <div className="grid grid-cols-2 gap-3.5 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div>
                          <span className="font-extrabold text-slate-500 block uppercase tracking-wider text-[10px] mb-1">Condition</span> 
                          <span className="text-slate-700 font-medium">"{goalCondition}"</span>
                        </div>
                        <div>
                          <span className="font-extrabold text-slate-500 block uppercase tracking-wider text-[10px] mb-1">Observable Behavior</span> 
                          <span className="text-slate-700 font-medium">"{goalBehavior}"</span>
                        </div>
                        <div className="mt-2">
                          <span className="font-extrabold text-slate-500 block uppercase tracking-wider text-[10px] mb-1">Criterion</span> 
                          <span className="text-slate-700 font-medium">"{goalCriterion}"</span>
                        </div>
                        <div className="mt-2">
                          <span className="font-extrabold text-slate-500 block uppercase tracking-wider text-[10px] mb-1">Timeline</span> 
                          <span className="text-slate-700 font-medium">"{goalTimeline}."</span>
                        </div>
                      </div>
                    </div>

                    {/* Incremental Benchmarks */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Incremental Benchmarks / Objectives</h4>
                        <button 
                          onClick={handleAddBenchmark}
                          className="text-xs text-edulift-indigo font-bold hover:text-indigo-800 flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" /> Add Objective
                        </button>
                      </div>

                      {benchmarks.map((bench) => (
                        <div key={bench.step} className="p-4 rounded-xl border border-slate-200 bg-white flex items-start justify-between gap-3 shadow-sm hover:border-slate-300 transition-colors">
                          <div className="space-y-1.5 flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">Step {bench.step}</span>
                              <span className="text-[11px] text-slate-400 font-bold">Target: {bench.targetDate}</span>
                            </div>
                            <input 
                              type="text" 
                              value={bench.description}
                              onChange={(e) => {
                                const val = e.target.value;
                                setBenchmarks(benchmarks.map(b => b.step === bench.step ? { ...b, description: val } : b));
                              }}
                              className="w-full text-xs font-medium text-slate-700 bg-transparent border-b border-dashed border-slate-200 pb-1 focus:outline-none focus:border-indigo-500" 
                            />
                          </div>
                          <button 
                            onClick={() => handleDeleteBenchmark(bench.step)}
                            className="text-slate-300 hover:text-red-500 p-1 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. ACCOMMODATIONS TAB */}
                {activeTab === 'accommodations' && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-100 pb-4">
                      <h3 className="text-xl font-extrabold text-slate-900">IEP Accommodations & Modifications</h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Categorized suggestions for: <strong className="text-slate-800">{studentName}</strong> • Category: <strong className="text-slate-800">{disability}</strong>
                      </p>
                    </div>

                    {/* Accommodation List */}
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2.5 shadow-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 uppercase">Presentation Support</span>
                          <span className="text-[10px] text-slate-400 font-bold">Difficulty: Low</span>
                        </div>
                        <h5 className="text-sm font-bold text-slate-950">
                          {needArea === 'math' && 'Provide step-by-step visual cue cards for multi-step math algorithms'}
                          {needArea === 'reading' && 'Provide text-to-speech option or audiobooks alongside print materials'}
                          {needArea === 'writing' && 'Provide color-coded sentence frame checklists and paragraph templates'}
                          {needArea === 'behavior' && 'Provide visual schedules and check-in / check-out tracker templates'}
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed font-sans">
                          <strong>Rationale:</strong> Removes working memory and cognitive barriers to ensure true focus, preventing processing-speed fatigue.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2.5 shadow-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700 uppercase">Response Support</span>
                          <span className="text-[10px] text-slate-400 font-bold">Difficulty: Medium</span>
                        </div>
                        <h5 className="text-sm font-bold text-slate-950">
                          {needArea === 'math' && 'Allow verbal explanation of problem-solving process as alternative to written work'}
                          {needArea === 'reading' && 'Allow student to point to picture choices or dictate answers verbally'}
                          {needArea === 'writing' && 'Allow speech-to-text typing or predictive word processing software'}
                          {needArea === 'behavior' && 'Provide a nonverbal break card system or desk visual safety scale'}
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed font-sans">
                          <strong>Rationale:</strong> Minimizes mechanical motor blocks to allow student to showcase conceptual mastery accurately.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2.5 shadow-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 uppercase">Setting / Environment</span>
                          <span className="text-[10px] text-slate-400 font-bold">Difficulty: Low</span>
                        </div>
                        <h5 className="text-sm font-bold text-slate-950">
                          Preferential seating near instructor, away from high-traffic doorways or distraction sources.
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed font-sans">
                          <strong>Rationale:</strong> Promotes prolonged attentiveness, auditory focus, and safe physical regulation in the classroom setting.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. MTSS INTERVENTION PLAN TAB */}
                {activeTab === 'mtss' && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-100 pb-4">
                      <h3 className="text-xl font-extrabold text-slate-900">MTSS Tier {mtssTier === '2' ? '2' : '3'} Intervention Strategy Plan</h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Focused skill interventions, strategies, and progression criteria for student support.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Strategy Card */}
                      <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-100/80 space-y-3.5 shadow-sm">
                        <h4 className="text-xs font-bold text-teal-800 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-teal-600" />
                          Concrete-Representational-Abstract (CRA) Model Sequencing
                        </h4>
                        <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
                          <p className="font-bold">Proposed Action Steps:</p>
                          <ol className="list-decimal pl-5 space-y-1">
                            <li><strong className="text-slate-900">Concrete Phase:</strong> Introduce physical manipulatives (e.g., place value blocks, colored tiles) to manually model multi-digit arithmetic or physical concepts.</li>
                            <li><strong className="text-slate-900">Representational Phase:</strong> Transition to drawing pictures, grid maps, and visual representation organizers.</li>
                            <li><strong className="text-slate-900">Abstract Phase:</strong> Introduce pure numerical computation algorithms, using step-by-step visual guides as memory anchors.</li>
                          </ol>
                        </div>
                      </div>

                      {/* Intervention Details */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-sm">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">FREQUENCY & DURATION</span>
                          <p className="text-xs font-bold text-slate-800">{mtssFreq}</p>
                          <p className="text-[10px] text-slate-500">Scheduled for 6-8 weeks standard block cycle.</p>
                        </div>
                        <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-sm">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">DATA COLLECTION TOOL</span>
                          <p className="text-xs font-bold text-slate-800">Weekly skill probe data sheets</p>
                          <p className="text-[10px] text-slate-500">Plotted on progress charts before team review.</p>
                        </div>
                      </div>

                      {/* Decision rules / Progression Gates */}
                      <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3.5 shadow-sm">
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">MTSS Progression Gates & Exit Rules</span>
                        
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="p-3.5 rounded-lg bg-emerald-50 text-slate-700 space-y-1 border border-emerald-100">
                            <span className="font-extrabold text-emerald-800 block text-[10px] uppercase">Fading Support (Exit to Tier 1)</span>
                            <p className="text-[11px] leading-relaxed">Achieves 80% accuracy or higher on 3 consecutive probes without physical manipulative scaffolds.</p>
                          </div>
                          <div className="p-3.5 rounded-lg bg-rose-50 text-slate-700 space-y-1 border border-rose-100">
                            <span className="font-extrabold text-rose-800 block text-[10px] uppercase">Intensifying Support (Tier 3 / Refer)</span>
                            <p className="text-[11px] leading-relaxed">Flat progress line remains below 40% over 4 weeks of continuous daily small-group modeling.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* SIDEBAR AUDIT WIDGET */}
              <div className="w-72 p-6 bg-slate-50 flex-shrink-0 flex flex-col justify-between">
                <div className="space-y-6">
                  
                  {/* Score Indicator */}
                  <div className="text-center space-y-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Compliance Audit Score</span>
                    
                    {/* Visual Gauge */}
                    <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        {/* Outer track */}
                        <circle cx="50" cy="50" r="40" stroke="#E2E8F0" strokeWidth="8" fill="transparent" />
                        {/* Progress */}
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="40" 
                          stroke="#4F46E5" 
                          strokeWidth="8" 
                          fill="transparent" 
                          strokeDasharray={251.2}
                          strokeDashoffset={251.2 - (251.2 * calculateComplianceScore()) / 100}
                        />
                      </svg>
                      <div className="absolute text-center">
                        <span className="text-3xl font-extrabold text-slate-900">{calculateComplianceScore()}%</span>
                        <p className="text-[9px] text-slate-400 font-bold uppercase mt-0.5">High Integrity</p>
                      </div>
                    </div>

                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
                      Meets standards specified in CA Education Code §56345.
                    </p>
                  </div>

                  {/* Checklist audit items */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Audit Components Checked</span>
                    
                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center space-x-2 font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Condition component exists</span>
                      </div>
                      <div className="flex items-center space-x-2 font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Measurable Behavior defined</span>
                      </div>
                      <div className="flex items-center space-x-2 font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Clear assessment criteria</span>
                      </div>
                      <div className="flex items-center space-x-2 font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Timebound boundary phase</span>
                      </div>
                    </div>
                  </div>

                  {/* Legal Citations references */}
                  <div className="p-3.5 rounded-xl border border-slate-100 bg-white space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block tracking-wider">CA LEGAL CODES GUIDES</span>
                    <ul className="text-[10px] text-slate-500 space-y-1.5 leading-relaxed list-disc pl-3">
                      <li><strong>CA Ed Code §56345(b):</strong> Measurable objectives checklist</li>
                      <li><strong>IDEA §300.320(a):</strong> Academic and functional goals</li>
                    </ul>
                  </div>

                </div>

                <div className="p-3.5 bg-indigo-50 border border-indigo-100/50 rounded-xl">
                  <div className="flex items-start space-x-2 text-indigo-700">
                    <HelpCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p className="text-[10px] leading-relaxed">
                      Draft goals align with individual standards from California SELPA goal warehouses.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom tips */}
          <div className="mt-4 text-center text-xs text-slate-400">
            Pro Tip: Review each generated draft carefully with your IEP committee members before copying into SEIS or IEP Direct.
          </div>
        </section>

      </div>

    </div>
  );
};

export default IEPInterventionSupport;

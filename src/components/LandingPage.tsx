import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoPrimary from '../assets/logo-primary.svg';
import heroImage from '../assets/landing-hero.png';
import { 
  FileText, 
  MessageSquare, 
  TrendingUp, 
  ChevronRight, 
  CheckCircle2,
  Calendar,
  Zap,
  ShieldCheck,
  Sparkles,
  Mail,
  Send
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <img src={logoPrimary} alt="EduLift AI Logo" className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-primary-600 transition-colors">Features</a>
              <a href="#beta-waitlist" className="hover:text-primary-600 transition-colors">Beta Access</a>
              <Link to="/dashboard" className="bg-edulift-indigo text-white px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200">
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-edulift-indigo text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>The Teacher Career Operating System</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
              Focus on Teaching, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-edulift-indigo to-indigo-400">We'll Handle the Rest.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              EduLift AI is your all-in-one assistant designed specifically for educators. 
              Save 10+ hours a week on lesson plans, IEPs, and parent emails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#beta-waitlist" className="bg-edulift-indigo text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group">
                Join Beta Waitlist
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/dashboard" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Explore Dashboard
              </Link>
            </div>
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
              <img 
                src={heroImage} 
                alt="EduLift AI Dashboard" 
                className="rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - 3 High Impact Cards */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Everything you need to thrive.</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Generic AI tools don't understand the classroom. EduLift is built by teachers, for teachers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 group-hover:bg-indigo-100 transition-colors"></div>
              <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-edulift-indigo group-hover:text-white transition-all text-edulift-indigo relative z-10">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Lesson Planner</h3>
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                Generate standards-aligned lesson plans in seconds. 7-step guided workflow with CA CCSS/NGSS alignment and differentiation.
              </p>
              <div className="flex items-center text-edulift-indigo font-semibold gap-2 group-hover:gap-3 transition-all relative z-10">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 group-hover:bg-teal-100 transition-colors"></div>
              <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-600 group-hover:text-white transition-all text-teal-600 relative z-10">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Parent Assistant</h3>
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                Turn quick notes into professional emails. 5-tone model hub with multi-lingual support for Spanish, Vietnamese, and Arabic.
              </p>
              <div className="flex items-center text-teal-600 font-semibold gap-2 group-hover:gap-3 transition-all relative z-10">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50 rounded-full -mr-16 -mt-16 group-hover:bg-violet-100 transition-colors"></div>
              <div className="bg-violet-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-violet-600 group-hover:text-white transition-all text-violet-600 relative z-10">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">IEP Specialist</h3>
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                IDEA-compliant SMART goals and real-time compliance validation against California Ed Code. MTSS Tier 2/3 planning.
              </p>
              <div className="flex items-center text-violet-600 font-semibold gap-2 group-hover:gap-3 transition-all relative z-10">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Waitlist Section */}
      <section id="beta-waitlist" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mt-32"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mb-48"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500 text-white text-sm font-bold mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Beta Launch Coming Soon</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8">
                Be the first to experience the future of teaching.
              </h2>
              <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
                We're rolling out access to our beta cohorts. Join the waitlist today to get early access, 
                exclusive features, and special founding-member pricing.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input 
                      type="email" 
                      placeholder="Enter your school email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 focus:ring-4 focus:ring-indigo-300 text-slate-900 font-medium"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                  >
                    Join Waitlist
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                  <p className="text-indigo-100">Check your inbox for a welcome message and more details.</p>
                </div>
              )}
              
              <p className="mt-8 text-indigo-200 text-sm font-medium">
                No spam. Only updates about your beta access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career OS Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 skew-x-12 -translate-y-12"></div>
            <div className="relative z-10 grid lg:grid-cols-2 items-center">
              <div className="p-12 lg:p-20">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                  Stop the burnout. <br /> Start the ascent.
                </h2>
                <div className="space-y-6">
                  {[
                    "Built specifically for first-year & student teachers",
                    "FERPA & COPPA compliant security",
                    "Export directly to Google Classroom & Canvas",
                    "Shared resource libraries for school districts"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="text-indigo-400 w-6 h-6 flex-shrink-0" />
                      <span className="text-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#beta-waitlist" className="mt-10 bg-edulift-indigo text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-900/40 inline-block">
                  Ready to transform your career?
                </a>
              </div>
              <div className="hidden lg:block relative p-12">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-slate-700 rounded w-1/2 animate-pulse"></div>
                    <div className="h-32 bg-slate-800 rounded animate-pulse"></div>
                    <div className="flex justify-end">
                      <div className="h-10 bg-edulift-indigo rounded-lg w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src={logoPrimary} alt="EduLift AI Logo" className="h-8 w-auto" />
              </div>
              <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                The comprehensive productivity suite for the modern educator. Empowering teachers to focus on what matters most: their students.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-slate-600">
                <li><Link to="/lesson-planner" className="hover:text-primary-600">Lesson Planner</Link></li>
                <li><Link to="/iep-docs" className="hover:text-primary-600">IEP Builder</Link></li>
                <li><Link to="/parent-assistant" className="hover:text-primary-600">Parent Portal</Link></li>
                <li><a href="#" className="hover:text-primary-600">Career Tools</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-slate-600">
                <li><a href="#" className="hover:text-primary-600">About Us</a></li>
                <li><a href="#" className="hover:text-primary-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-600">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary-600">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} EduLift AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

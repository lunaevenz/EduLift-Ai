import React from 'react';
import { 
  BookOpen, 
  FileText, 
  MessageSquare, 
  TrendingUp, 
  ChevronRight, 
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Zap
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary-900">EduLift <span className="text-primary-600">AI</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-primary-600 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-primary-600 transition-colors">Pricing</a>
              <button className="bg-primary-600 text-white px-5 py-2.5 rounded-full hover:bg-primary-700 transition-all shadow-md shadow-primary-200">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6 animate-fade-in">
              <Zap className="w-4 h-4" />
              <span>The Teacher Career Operating System</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
              Focus on Teaching, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">We'll Handle the Rest.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              EduLift AI is your all-in-one assistant designed specifically for educators. 
              Save 10+ hours a week on lesson plans, IEPs, and parent emails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-200 flex items-center justify-center gap-2 group">
                Start Your Free Trial
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                View Demo
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-60">
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-400">Trusted by teachers from</span>
              {/* Placeholder for school district logos */}
              <div className="flex gap-6 font-bold text-slate-500 text-xl italic">
                <span>Unified Schools</span>
                <span>Metro Academy</span>
                <span>Blue Ridge District</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-100/50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Everything you need to thrive.</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Generic AI tools don't understand the classroom. EduLift is built by teachers, for teachers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lesson Planning</h3>
              <p className="text-slate-600 leading-relaxed">
                Generate standards-aligned lesson plans in seconds. Fully customizable to your teaching style.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="bg-indigo-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">IEP Documentation</h3>
              <p className="text-slate-600 leading-relaxed">
                Draft professional IEP summaries and progress reports while ensuring compliance and accuracy.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="bg-sky-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Parent Comms</h3>
              <p className="text-slate-600 leading-relaxed">
                Turn quick notes into empathetic, professional emails. Support for multi-language translation.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="bg-violet-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Growth</h3>
              <p className="text-slate-600 leading-relaxed">
                Build your professional portfolio and prepare for observations with AI-powered coaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career OS Value Proposition */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/10 skew-x-12 -translate-y-12"></div>
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
                      <CheckCircle2 className="text-primary-400 w-6 h-6 flex-shrink-0" />
                      <span className="text-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-10 bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-900/40">
                  Ready to transform your career?
                </button>
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
                      <div className="h-10 bg-primary-600 rounded-lg w-1/3"></div>
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
                <div className="bg-primary-600 p-2 rounded-lg">
                  <BookOpen className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold tracking-tight">EduLift AI</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                The comprehensive productivity suite for the modern educator. Empowering teachers to focus on what matters most: their students.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-slate-600">
                <li><a href="#" className="hover:text-primary-600">Lesson Planner</a></li>
                <li><a href="#" className="hover:text-primary-600">IEP Builder</a></li>
                <li><a href="#" className="hover:text-primary-600">Parent Portal</a></li>
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
}

export default App;

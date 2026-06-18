import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  MessageSquare, 
  FileText, 
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import logoWhite from '../assets/logo-white.svg';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Lesson Planner', icon: BookOpen, path: '/lesson-planner' },
    { name: 'Parent Assistant', icon: MessageSquare, path: '/parent-assistant' },
    { name: 'IEP Documentation', icon: FileText, path: '/iep-docs' },
  ];

  return (
    <div className="bg-edulift-canvas text-edulift-darkslate min-h-screen flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-edulift-navy text-slate-300 flex-shrink-0 flex flex-col justify-between hidden md:flex border-r border-indigo-950">
        <div className="p-6 space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src={logoWhite} alt="EduLift AI Logo" className="h-9" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="space-y-1.5">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2 text-xs">Workspace</p>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition group ${
                  location.pathname === item.path
                    ? 'bg-indigo-900/40 text-white font-semibold'
                    : 'hover:bg-slate-800/60 hover:text-white text-slate-400'
                }`}
              >
                <item.icon className={`w-5 h-5 ${location.pathname === item.path ? 'text-cyan-400' : 'group-hover:text-cyan-400 transition'}`} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-indigo-950 bg-indigo-950/40">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-edulift-teal text-white flex items-center justify-center font-bold">
              SJ
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">Sarah Jenkins</p>
              <p className="text-xs text-slate-400 truncate">4th Grade • Lincoln El</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 flex flex-col h-screen overflow-hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout;

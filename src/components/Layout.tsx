import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Cat, Heart, Leaf, BookOpen, Home as HomeIcon, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: "/", label: "Home", icon: HomeIcon },
    { to: "/care", label: "True Nature", icon: Cat },
    { to: "/nutrition", label: "Nutrition", icon: Leaf },
    { to: "/breeds", label: "Breeds", icon: BookOpen },
    { to: "/rescue", label: "Rescue", icon: Heart },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-sage-800 selection:text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#4b5e4b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 group z-50">
            <div className="w-10 h-10 rounded-full bg-sage-800 text-stone-50 flex items-center justify-center group-hover:bg-sage-700 transition-all duration-300 transform group-hover:rotate-12">
              <Cat size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-medium tracking-tight text-stone-800 leading-none">
                Conscious Cat
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sage-800 mt-1">
                Guardianship
              </span>
            </div>
          </NavLink>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2",
                    isActive
                      ? "bg-stone-200 text-stone-900"
                      : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
                  )
                }
              >
                <item.icon size={16} />
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-stone-600 z-50 hover:bg-stone-200 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-stone-50 pt-24 px-6 flex flex-col gap-4 border-b border-stone-200">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "p-4 rounded-2xl text-lg font-medium transition-all duration-200 flex items-center gap-4",
                    isActive
                      ? "bg-stone-200 text-stone-900"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  )
                }
              >
                <item.icon size={24} />
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-stone-200 bg-stone-100 py-12 mt-auto">
        <div className="max-w-5xl mx-auto px-6 text-center text-stone-500 text-sm">
          <p className="font-serif italic mb-4">"Time spent with cats is never wasted."</p>
          <p>Advocating for the deep understanding and holistic care of our feline companions.</p>
        </div>
      </footer>
    </div>
  );
}

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/catalog', label: 'Курсы' },
    { path: '/knowledge-base', label: 'База знаний' },
    { path: '/course-selection', label: 'Подбор курса' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="./images/logo2.png" alt="Logo" className="w-8 h-8" />
            <span className="text-sm font-medium text-[#3B82F6] leading-tight">Академия<br/>Знаний</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-[#3B82F6] font-medium'
                    : 'text-[#1A1F2E] hover:text-[#3B82F6]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/course-selection">
              <button className="login-btn px-5 py-2 text-sm font-medium text-[#1A1F2E] hover:bg-[rgba(59,130,246,0.2)]">
                Войти
              </button>
            </Link>
            <Link to="/course-selection">
              <button className="btn-primary px-6 py-2.5 bg-[#3B82F6] text-white text-sm font-medium rounded-full hover:bg-[#2563EB] active:bg-[#1E40AF]">
                Начать обучение
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-[#1A1F2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#F0F4FF] animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm ${
                    isActive(link.path)
                      ? 'text-[#3B82F6] font-medium'
                      : 'text-[#1A1F2E]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Link to="/course-selection">
                  <button className="login-btn w-full px-5 py-2 text-sm font-medium text-[#1A1F2E] hover:bg-[rgba(59,130,246,0.2)]">
                    Войти
                  </button>
                </Link>
                <Link to="/course-selection">
                  <button className="btn-primary w-full px-6 py-2.5 bg-[#3B82F6] text-white text-sm font-medium rounded-full hover:bg-[#2563EB] active:bg-[#1E40AF]">
                    Начать обучение
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

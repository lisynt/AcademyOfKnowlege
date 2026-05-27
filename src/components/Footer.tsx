import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1A1F2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="./images/logo3.png" alt="Logo" className="w-8 h-8" />
              <span className="text-sm font-medium leading-tight">Академия<br/>Знаний</span>
            </Link>
            <p className="text-sm text-gray-300 max-w-xs">
              Современная образовательная платформа с государственной аккредитацией. Получайте качественное образование 24/7 в удобном формате.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-medium mb-4">Навигация</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/catalog" className="text-sm text-gray-300 hover:text-white transition-colors">
                Каталог курсов
              </Link>
              <Link to="/knowledge-base" className="text-sm text-gray-300 hover:text-white transition-colors">
                База знаний
              </Link>
              <Link to="/course-selection" className="text-sm text-gray-300 hover:text-white transition-colors">
                Подбор программы
              </Link>
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-300">
              <a href="tel:+79461234567" className="flex items-center space-x-2 hover:text-[#3B82F6] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+7 (946) 123-45-67</span>
              </a>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>AcademyofKnowledge@mail.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>г. Самара, Московское шоссе, 125А</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex justify-center">
          <p className="text-sm text-gray-400">
            © 2026 Академия Знаний. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

const navItems = [
  { name: 'TRANG CHỦ', path: '/home', active: true },
  { name: 'VỀ CHÚNG TÔI', path: '#', hasDropdown: true },
  { name: 'KHÓA HỌC', path: '#courses-section', hasDropdown: true },
  { name: 'HUẤN LUYỆN VIÊN', path: '#coaches-section' },
  { name: 'CƠ SỞ VẬT CHẤT', path: '#facilities-section' },
  { name: 'TUYỂN SINH', path: '#' },
];

export default function Header() {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const coursesElem = document.getElementById('courses-section');
      const coachesElem = document.getElementById('coaches-section');

      const isInside = (elem) => {
        if (!elem) return false;
        const rect = elem.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      };

      // Trong suốt ở Hero Banner, CoursesSection và CoachesSection
      if (scrollY <= 50 || isInside(coursesElem) || isInside(coachesElem)) {
        setIsHeaderTransparent(true);
      } else {
        // Chuyển nền trắng cho FacilitiesSection và các phần còn lại
        setIsHeaderTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHardReloadHome = (e, path) => {
    if (path === '/home') {
      e.preventDefault();
      window.location.href = '/home';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isHeaderTransparent
          ? 'bg-transparent py-4 text-white'
          : 'bg-white shadow-md py-3 text-gray-800'
      }`}
    >
      <div className="flex items-center justify-between w-full px-6 md:px-12 mx-auto">
        <a
          href="/home"
          onClick={(e) => handleHardReloadHome(e, '/home')}
          className="flex items-center space-x-2.5 cursor-pointer group shrink-0"
        >
          <img
            src={logoImg}
            alt="AnhDuy Sport Logo"
            className={`w-auto object-contain transition-all duration-300 filter drop-shadow-lg ${
              isHeaderTransparent ? 'h-12 md:h-14' : 'h-10 md:h-12'
            }`}
          />
          <div className="flex items-center font-black italic tracking-wider text-xl md:text-2xl uppercase transition-colors duration-300 select-none">
            <span
              className={`transition-colors duration-300 ${
                isHeaderTransparent ? 'text-white drop-shadow-md' : 'text-gray-900'
              }`}
            >
              AnhDuy
            </span>
            <span className="text-[#e31b23] ml-1.5 drop-shadow-md">
              Sport
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              onClick={(e) => handleHardReloadHome(e, item.path)}
              className={`group relative overflow-hidden px-3.5 py-2 text-xs xl:text-sm font-bold tracking-wider transition-colors duration-300 whitespace-nowrap ${
                isHeaderTransparent
                  ? 'text-white/90 hover:text-white'
                  : item.active
                  ? 'text-[#e31b23]'
                  : 'text-gray-800 hover:text-[#e31b23]'
              }`}
            >
              {isHeaderTransparent && (
                <span
                  className={`absolute inset-0 bg-[#e31b23] transition-transform duration-300 ease-out origin-left -z-10 ${
                    item.active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              )}

              <span className="relative z-10 flex items-center gap-1">
                {item.name}
                {item.hasDropdown && (
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover:translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
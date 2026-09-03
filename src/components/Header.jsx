import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#cursos', label: 'Cursos' },
    { href: '#unidades', label: 'Unidades' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="w-full h-20 px-5 md:px-12 lg:px-24 left-0 top-0 fixed bg-white/95 backdrop-blur-sm border-b border-slate-200 flex justify-between items-center z-50 transition-colors duration-300">
      {/* Logo */}
      <a href="#" className="flex justify-start items-center gap-2.5 shrink-0" onClick={() => setIsMenuOpen(false)}>
        <div className="size-10 bg-slate-900 rounded-lg flex justify-center items-center transition-transform duration-300 hover:scale-105">
          <span className="text-white text-xl font-extrabold font-['Outfit']">F</span>
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-0.5">
          <span className="text-slate-900 text-xl font-extrabold font-['Outfit'] leading-none">FACULDADE</span>
          <span className="text-amber-600 text-[9px] font-bold font-['Manrope'] uppercase tracking-wider">MEC NOTA MÁXIMA 5</span>
        </div>
      </a>

      {/* Navegação Desktop */}
      <nav className="hidden lg:flex justify-start items-center gap-8">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="text-slate-800 text-base font-semibold font-['Manrope'] transition-colors duration-200 hover:text-amber-600">
            {link.label}
          </a>
        ))}
      </nav>

      {/* Botões e Toggle Mobile */}
      <div className="flex justify-end items-center gap-3 md:gap-4 shrink-0">
        <a href="#" className="hidden md:inline text-slate-600 text-sm font-semibold font-['Manrope'] transition-colors duration-200 hover:text-slate-900">
          Área do Candidato
        </a>
        <a href="#contato" className="px-4 md:px-7 py-2.5 md:py-3.5 bg-amber-600 hover:bg-amber-700 active:scale-[0.98] rounded-lg flex justify-center items-center transition-all duration-300 shadow-sm hover:shadow-md">
          <span className="text-white text-sm md:text-base font-bold font-['Manrope']">Inscreva-se</span>
        </a>

        {/* Botão Hambúrguer (Mobile) */}
        <button
          className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Alternar menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      <div className={`lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
        <nav className="flex flex-col p-5 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-800 text-lg font-semibold font-['Manrope'] hover:text-amber-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="h-px bg-slate-100 my-2"></div>
          <a
            href="#"
            className="text-slate-600 text-lg font-semibold font-['Manrope'] hover:text-slate-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Área do Candidato
          </a>
        </nav>
      </div>
    </header>
  );
}

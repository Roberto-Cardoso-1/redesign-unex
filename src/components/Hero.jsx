import useScrollReveal from '../hooks/useScrollReveal';

export default function Hero() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="w-full min-h-[480px] md:min-h-[540px] bg-[url('/hero-novo.png')] bg-cover bg-center bg-slate-900/70 bg-blend-overlay pt-28 md:pt-32 pb-16 md:pb-20 px-5 md:px-12 lg:px-24 flex flex-col justify-center items-start">
      <div className="w-full max-w-4xl flex flex-col justify-start items-start gap-8">
        
        <div className="reveal px-3.5 py-1.5 bg-amber-100 rounded-full inline-flex items-center gap-2">
          <img src="/star.png" alt="Estrela" className="w-4 h-4 object-contain" />
          <span className="text-amber-700 text-xs font-bold font-['Manrope']">Vestibular 2026 • Inscrições Abertas</span>
        </div>
        
        <div className="reveal reveal-delay-1 flex flex-col gap-4 md:gap-5">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Outfit'] leading-tight">
            Sua Vocação em Movimento
          </h1>
          <p className="text-slate-50 text-base md:text-lg font-normal font-['Manrope'] leading-relaxed max-w-2xl">
            Construa uma carreira extraordinária com ensino de excelência, infraestrutura de ponta e as melhores conexões com o mercado de trabalho nacional e internacional.
          </p>
        </div>

        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a href="#contato" className="px-7 py-3.5 bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white text-base font-bold font-['Manrope'] rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl">
            Vestibular 2026
          </a>
          <a href="#contato" className="px-7 py-3.5 bg-transparent border-2 border-white text-white text-base font-bold font-['Manrope'] rounded-lg hover:bg-white/10 active:scale-[0.98] transition-all duration-300 text-center">
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
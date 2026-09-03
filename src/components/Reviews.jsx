import useScrollReveal from '../hooks/useScrollReveal';

export default function Reviews() {
  const sectionRef = useScrollReveal();

  const testimonials = [
    { img: "/Frame4.png", name: "Ana Clara", course: "Administração", text: "“A faculdade me deu uma base sólida e projetos reais que já usei no meu primeiro emprego.”" },
    { img: "/Frame5.png", name: "Bruno Mendes", course: "Direito", text: "“A infraestrutura e os professores práticos foram fundamentais para minha formação.”" },
    { img: "/Frame6.png", name: "Camila Souza", course: "Psicologia", text: "“O ambiente é acolhedor e as atividades práticas me ajudaram a decidir meu caminho profissional.”" },
  ];

  return (
    <section ref={sectionRef} id="sobre" className="w-full px-5 md:px-12 lg:px-24 py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 md:gap-14">
        <div className="reveal text-center flex flex-col items-center gap-3 max-w-2xl">
          <span className="text-amber-600 text-xs font-bold font-['Manrope'] uppercase tracking-widest">Depoimentos</span>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight md:leading-[48px]">O que nossos alunos dizem</h2>
          <p className="text-slate-600 text-sm md:text-base font-normal font-['Manrope'] leading-relaxed">
            Histórias reais de crescimento profissional, networking e aprendizado prático.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className={`reveal reveal-delay-${index + 1} group p-6 md:p-8 bg-white rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-md flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1`}>
              <div className="flex items-center gap-4">
                <img className="w-14 h-14 rounded-full object-cover" src={item.img} alt={item.name} loading="lazy" />
                <div>
                  <h4 className="text-slate-900 text-base font-bold font-['Outfit']">{item.name}</h4>
                  <span className="text-amber-600 text-xs font-bold font-['Manrope'] uppercase tracking-widest">{item.course}</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm font-normal font-['Manrope'] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
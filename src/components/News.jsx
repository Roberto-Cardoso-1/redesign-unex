import useScrollReveal from '../hooks/useScrollReveal';

export default function News() {
  const sectionRef = useScrollReveal();

  const articles = [
    { img: "/Frame1.png", tag: "Eventos", title: "Feira de Carreiras: confira as oportunidades com nossos parceiros", desc: "Uma edição especial com palestras, mentorias e vagas em aberto para estudantes e recém-formados." },
    { img: "/Frame2.png", tag: "Tecnologia", title: "Como a inteligência artificial está mudando o mercado de trabalho", desc: "Um guia prático para entender as habilidades que mais valem no curto prazo e como se preparar." },
    { img: "/Frame3.png", tag: "Carreira", title: "5 dicas para construir um networking efetivo ainda na faculdade", desc: "Aprenda a participar de eventos, se apresentar com confiança e transformar contatos em oportunidades." },
  ];

  return (
    <section ref={sectionRef} className="w-full px-5 md:px-12 lg:px-24 py-20 md:py-24 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 md:gap-14">
        <div className="reveal text-center flex flex-col items-center gap-3 max-w-2xl">
          <span className="text-amber-600 text-xs font-bold font-['Manrope'] uppercase tracking-widest">Notícias e Blog</span>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight md:leading-[48px]">O que está acontecendo na Faculdade</h2>
          <p className="text-slate-600 text-sm md:text-base font-normal font-['Manrope'] leading-relaxed">
            Artigos, eventos, parcerias e dicas para sua carreira acadêmica e profissional.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art, index) => (
            <div key={index} className={`reveal reveal-delay-${index + 1} group p-5 md:p-6 bg-white rounded-xl border border-slate-200 hover:border-amber-200 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}>
              <div className="overflow-hidden rounded-lg">
                <img className="w-full h-40 md:h-44 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" src={art.img} alt={art.title} loading="lazy" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-amber-600 text-xs font-bold font-['Manrope'] uppercase tracking-widest">{art.tag}</span>
                <h3 className="text-slate-900 text-lg font-bold font-['Outfit'] leading-snug">{art.title}</h3>
                <p className="text-slate-600 text-sm font-normal font-['Manrope'] leading-relaxed">{art.desc}</p>
                <a href="#" className="text-amber-600 text-sm font-bold font-['Manrope'] mt-2 hover:text-amber-700 hover:underline transition-colors duration-200">Leia mais →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import useScrollReveal from '../hooks/useScrollReveal';

export default function Campuses() {
  const sectionRef = useScrollReveal();

  const campuses = [
    { name: 'Feira de Santana', address: 'Av. Paulista, 1000 - Bela Vista • Tel: (11) 3254-0000' },
    { name: 'Itabuna', address: 'Av. Rio Branco, 450 - Centro • Tel: (21) 2243-0000' },
    { name: 'Jequié', address: 'Av. Afonso Pena, 890 - Centro • Tel: (31) 3412-0000' },
    { name: 'Vitória da Conquista', address: 'Rua XV de Novembro, 1200 - Centro • Tel: (41) 3224-0000' },
  ];

  return (
    <div ref={sectionRef} id="unidades" className="w-full px-5 md:px-12 lg:px-24 py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col justify-start items-start gap-10 md:gap-14">
        <div className="reveal self-stretch flex flex-col justify-start items-center gap-3">
          <div className="self-stretch text-center text-amber-600 text-xs font-bold font-['Manrope'] uppercase tracking-widest">Onde Estamos</div>
          <div className="self-stretch text-center text-slate-900 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight md:leading-[48px]">Nossos Campus</div>
          <div className="w-full max-w-[680px] text-center text-slate-600 text-base font-normal font-['Manrope'] leading-7">Unidades estratégicas preparadas para oferecer a melhor infraestrutura física e digital do país.</div>
        </div>
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {campuses.map((campus, i) => (
            <div key={campus.name} className={`reveal reveal-delay-${i + 1} group p-6 md:p-8 bg-white rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-md flex flex-col justify-start items-start gap-4 transition-all duration-300 hover:-translate-y-1`}>
              <div className="inline-flex justify-start items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-amber-600 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <div className="text-slate-900 text-xl font-bold font-['Outfit']">{campus.name}</div>
              </div>
              <div className="self-stretch text-slate-600 text-sm font-normal font-['Manrope'] leading-5">{campus.address}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

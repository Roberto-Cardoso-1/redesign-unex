import useScrollReveal from '../hooks/useScrollReveal';

export default function Admission() {
  const sectionRef = useScrollReveal();

  const items = [
    {
      title: 'Vestibular',
      description: 'Prova online simplificada com agendamento flexível ou uso da nota de redações anteriores.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-amber-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
      ),
    },
    {
      title: 'ENEM',
      description: 'Utilize sua nota do ENEM e garanta bolsas de estudos parciais ou integrais de acordo com seu desempenho.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-amber-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ),
    },
    {
      title: 'Transferência',
      description: 'Mude para uma instituição nota máxima sem burocracia e aproveite as matérias que já cursou.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-amber-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
    {
      title: '2ª Graduação',
      description: 'Quem já é graduado ingressa sem realizar vestibular e garante descontos exclusivos durante o curso todo.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-amber-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} id="ingresso" className="w-full px-5 md:px-12 lg:px-24 py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col justify-start items-start gap-10 md:gap-14">
        <header className="reveal self-stretch flex flex-col justify-start items-center gap-3 text-center">
          <span className="text-amber-600 text-xs font-bold font-['Manrope'] uppercase tracking-widest">Ingresso</span>
          <h2 className="self-stretch text-slate-900 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight md:leading-[48px]">Escolha como iniciar sua jornada</h2>
          <p className="w-full max-w-[680px] text-slate-600 text-base font-normal font-['Manrope'] leading-7">Facilitamos seu acesso ao ensino superior. Descubra qual das nossas formas de ingresso melhor se adapta ao seu momento.</p>
        </header>

        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <article key={item.title} className={`reveal reveal-delay-${i + 1} group p-6 md:p-8 bg-white rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-md transition-all duration-300 flex flex-col justify-start items-start gap-4 hover:-translate-y-1`}>
              <div className="size-12 bg-slate-50 group-hover:bg-amber-50 rounded-2xl inline-flex justify-center items-center transition-colors duration-300">
                {item.icon}
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <h3 className="self-stretch text-slate-900 text-xl font-bold font-['Outfit']">{item.title}</h3>
                <p className="self-stretch text-slate-600 text-sm font-normal font-['Manrope'] leading-6">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

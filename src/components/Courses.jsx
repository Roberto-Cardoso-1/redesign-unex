import useScrollReveal from '../hooks/useScrollReveal';

export default function Courses() {
  const sectionRef = useScrollReveal();

  const courses = [
    { category: 'Negócios', name: 'Administração', img: '/Frame7.png' },
    { category: 'Humanas', name: 'Direito', img: '/Frame8.png' },
    { category: 'Exatas', name: 'Engenharia Civil', img: '/Frame9.png' },
    { category: 'Saúde', name: 'Medicina', img: '/Frame10.png' },
    { category: 'Saúde / Humanas', name: 'Psicologia', img: '/Frame11.png' },
    { category: 'Tecnologia', name: 'Ciência da Computação', img: '/Frame12.png' },
  ];

  return (
    <section ref={sectionRef} id="cursos" className="w-full px-5 md:px-12 lg:px-24 py-20 md:py-24 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col justify-start items-start gap-10 md:gap-14">
        <header className="reveal self-stretch flex flex-col justify-start items-center gap-3 text-center">
          <span className="text-amber-600 text-xs font-bold font-['Manrope'] uppercase tracking-widest">Graduação</span>
          <h2 className="self-stretch text-slate-900 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight md:leading-[48px]">Formação orientada para o mercado</h2>
          <p className="w-full max-w-[680px] text-slate-600 text-base font-normal font-['Manrope'] leading-7">Nossos programas combinam forte embasamento teórico com vivência prática e laboratórios de última geração.</p>
        </header>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <article key={course.name} className={`reveal reveal-delay-${i + 1} group relative h-72 md:h-80 rounded-2xl flex flex-col justify-end items-start overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer`}>
              <img src={course.img} alt={course.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 group-hover:to-black/70 transition-all duration-500" aria-hidden="true" />
              <div className="relative p-6 md:p-7 self-stretch flex flex-col justify-start items-start gap-1.5">
                <span className="text-amber-400 text-xs font-bold font-['Manrope'] uppercase tracking-widest">{course.category}</span>
                <h3 className="self-stretch text-white text-xl md:text-2xl font-bold font-['Outfit'] leading-tight">{course.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

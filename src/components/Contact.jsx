import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef} id="contato" className="w-full px-5 md:px-12 lg:px-24 py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col justify-start items-start gap-10 md:gap-14">
        <div className="reveal self-stretch flex flex-col justify-start items-center gap-3">
          <div className="self-stretch text-center text-amber-600 text-xs font-bold font-['Manrope'] uppercase tracking-widest">Contato</div>
          <div className="self-stretch text-center text-slate-900 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight md:leading-[48px]">Fale conosco</div>
          <div className="w-full max-w-[680px] text-center text-slate-600 text-base font-normal font-['Manrope'] leading-7">Deixe seus dados e nossa equipe entrará em contato para te orientar sobre o curso e o processo de ingresso.</div>
        </div>
        <div className="reveal reveal-delay-1 self-stretch flex flex-col lg:flex-row justify-start items-stretch gap-8 lg:gap-16">
          <form className="flex-1 p-6 md:p-8 bg-white rounded-xl border border-slate-200 flex flex-col justify-start items-start gap-4" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="nome" className="text-slate-600 text-sm font-bold font-['Manrope']">Nome</label>
            <input 
              id="nome"
              type="text" 
              placeholder="Seu nome completo"
              className="self-stretch h-12 px-4 bg-white rounded-lg border border-slate-200 hover:border-slate-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all duration-200 w-full text-slate-900 text-sm font-normal font-['Manrope'] placeholder:text-slate-400"
            />
            
            <label htmlFor="email" className="text-slate-600 text-sm font-bold font-['Manrope']">E-mail</label>
            <input 
              id="email"
              type="email" 
              placeholder="seu@email.com"
              className="self-stretch h-12 px-4 bg-white rounded-lg border border-slate-200 hover:border-slate-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all duration-200 w-full text-slate-900 text-sm font-normal font-['Manrope'] placeholder:text-slate-400"
            />
            
            <label htmlFor="telefone" className="text-slate-600 text-sm font-bold font-['Manrope']">Telefone</label>
            <input 
              id="telefone"
              type="tel" 
              placeholder="(00) 00000-0000"
              className="self-stretch h-12 px-4 bg-white rounded-lg border border-slate-200 hover:border-slate-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all duration-200 w-full text-slate-900 text-sm font-normal font-['Manrope'] placeholder:text-slate-400"
            />
            
            <label htmlFor="curso" className="text-slate-600 text-sm font-bold font-['Manrope']">Curso de interesse</label>
            <div className="relative self-stretch">
              <select 
                id="curso"
                defaultValue=""
                className="w-full h-12 px-4 bg-white rounded-lg border border-slate-200 hover:border-slate-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all duration-200 text-slate-900 text-sm font-normal font-['Manrope'] appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-slate-400">Selecione um curso</option>
                <option value="administracao">Administração</option>
                <option value="direito">Direito</option>
                <option value="engenharia">Engenharia Civil</option>
                <option value="medicina">Medicina</option>
                <option value="psicologia">Psicologia</option>
                <option value="computacao">Ciência da Computação</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 text-slate-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>

            <div className="self-stretch pt-2 flex flex-col justify-start items-start gap-3">
              <button type="submit" className="w-full sm:w-auto px-7 py-3.5 bg-amber-600 hover:bg-amber-700 active:scale-[0.98] rounded-lg inline-flex justify-center items-center transition-all duration-300 shadow-sm hover:shadow-md outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600">
                <span className="text-white text-base font-bold font-['Manrope']">Enviar</span>
              </button>
              <div className="self-stretch text-slate-600 text-xs font-normal font-['Manrope'] leading-5">Ao enviar, você concorda em receber informações sobre os cursos e processos de ingresso.</div>
            </div>
          </form>
          <div className="reveal reveal-delay-2 w-full lg:w-96 p-6 md:p-8 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-start items-start gap-4">
            <div className="text-slate-900 text-xl font-bold font-['Outfit']">Atendimento</div>
            <div className="self-stretch text-slate-600 text-sm font-normal font-['Manrope'] leading-6">Horário: 08h às 20h (segunda a sexta)</div>
            <div className="self-stretch text-slate-600 text-sm font-normal font-['Manrope'] leading-6">E-mail: atendimento@faculdade.com.br</div>
            <div className="self-stretch text-slate-600 text-sm font-normal font-['Manrope'] leading-6">WhatsApp: (00) 00000-0000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const columns = [
  {
    title: 'Institucional',
    items: ['Sobre Nós', 'Trabalhe Conosco', 'Notícias', 'Parceiros'],
  },
  {
    title: 'Cursos',
    items: ['Graduação', 'Pós-Graduação', 'Extensão', 'EAD'],
  },
  {
    title: 'Contato',
    items: ['Fale Conosco', 'Ouvidoria', 'Suporte', 'WhatsApp'],
  },
  {
    title: 'Redes Sociais',
    items: ['Instagram', 'LinkedIn', 'YouTube', 'Facebook'],
  },
];

export default function Footer() {
  return (
    <div className="w-full px-5 md:px-12 lg:px-24 pt-16 md:pt-20 pb-8 md:pb-10 bg-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col justify-start items-start gap-12 md:gap-16">
        <div className="self-stretch flex flex-col lg:flex-row gap-12 lg:gap-0 lg:justify-between items-start">
          <div className="w-full lg:w-72 max-w-sm flex flex-col justify-start items-start gap-5">
            <div className="inline-flex justify-start items-center gap-2.5">
              <div className="size-8 bg-amber-600 rounded-md flex justify-center items-center">
                <div className="text-white text-lg font-extrabold font-['Outfit']">F</div>
              </div>
              <div className="text-white text-xl font-extrabold font-['Outfit']">FACULDADE</div>
            </div>
            <div className="self-stretch text-slate-50 text-sm font-normal font-['Manrope'] leading-6">Líder em inovação acadêmica, preparando profissionais éticos e inovadores para os desafios globais do mercado.</div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-16">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col justify-start items-start gap-4">
                <div className="text-amber-600 text-sm font-bold font-['Outfit'] uppercase">{col.title}</div>
                {col.items.map((item) => (
                  <div key={item} className="text-slate-50 text-sm font-normal font-['Manrope'] hover:text-white cursor-pointer transition-colors duration-200">{item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="self-stretch pt-8 border-t border-slate-800 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between items-start sm:items-center">
          <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex justify-start items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-amber-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <div className="text-white text-xs font-bold font-['Manrope']">MEC Credenciada Nota 5</div>
            </div>
            <div className="text-slate-400 text-xs font-normal font-['Manrope']">© 2026 Faculdade. Todos os direitos reservados.</div>
          </div>
          <div className="flex justify-start items-center gap-6">
            <div className="text-slate-400 text-xs font-normal font-['Manrope'] hover:text-slate-200 cursor-pointer transition-colors duration-200">Política de Privacidade</div>
            <div className="text-slate-400 text-xs font-normal font-['Manrope'] hover:text-slate-200 cursor-pointer transition-colors duration-200">Termos de Uso</div>
          </div>
        </div>
      </div>
    </div>
  );
}

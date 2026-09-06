export default function AboutPage() {
  const rows = [
    ["Стил", "Топли земни цветове, слънчогледови акценти и естествена, спокойна композиция."],
    ["Фокус", "Оригинални картини, серии и отделни творби, представени без визуален шум."],
    ["Галерия", "Текущите плейсхолдъри са подготвени за директна замяна с реални изображения на картините."],
  ];

  return (
    <section className="min-h-[68vh] bg-[#fffdf7] py-[92px] pt-[104px] max-[820px]:min-h-0 max-[820px]:pt-[76px] max-[620px]:py-[54px]">
      <div className="mx-auto w-[min(820px,calc(100%_-_40px))] max-[620px]:w-[min(820px,calc(100%_-_28px))]">
        <span className="mb-[18px] inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#8a6a25]">За автора</span>
        <h1 className="mb-6 font-serif text-[clamp(52px,7vw,88px)] leading-[0.98] tracking-[-0.04em] text-[#2d2a22] max-[620px]:text-[clamp(42px,13vw,62px)]">GabiCraft</h1>
        <p className="mb-8 max-w-[760px] text-[clamp(18px,2vw,21px)] leading-[1.7] text-[#736b5d] max-[620px]:text-base">
          Арт портфолио, създадено да поставя картините на първо място — с топла цветова палитра, въздух между елементите и усещане за ръчна, лична работа.
        </p>

        <div className="mt-[52px] border-t border-[#e4d9c7] max-[620px]:mt-9">
          {rows.map(([label, copy]) => (
            <div key={label} className="grid grid-cols-[180px_minmax(0,1fr)] gap-7 border-b border-[#e4d9c7] py-6 max-[820px]:grid-cols-1 max-[820px]:gap-2">
              <strong className="font-semibold text-[#795b21]">{label}</strong>
              <span className="leading-[1.7] text-[#756d61]">{copy}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

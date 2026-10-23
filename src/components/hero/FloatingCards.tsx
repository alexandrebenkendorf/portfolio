import { useTranslation } from 'react-i18next';

/** "I DESIGN" / "I DEVELOP" — scattered floating mockup cards, parallax on scroll (see useFloatCardEffects). */
export function FloatingCards() {
  const { t } = useTranslation();

  return (
    <div
      className="-mr-14 flex flex-[0_0_340px] flex-col justify-center overflow-visible pt-6"
      data-aos="fade-up"
      style={{ perspective: '900px' }}
      aria-hidden="true"
    >
      <div className="parallax-design w-fit">
        <div className="float-card design w-60">
          <span
            className="spotlight"
            aria-hidden="true"
          />
          <div className="flex items-center gap-1.5 border-b border-[rgba(17,22,27,0.06)] px-3.5 py-2.5">
            <span className="inline-block h-2.25 w-2.25 rounded-full bg-[#FF5F57]" />
            <span className="inline-block h-2.25 w-2.25 rounded-full bg-[#FFBD2E]" />
            <span className="inline-block h-2.25 w-2.25 rounded-full bg-[#28C840]" />
            <span className="text-slate-300 ml-auto font-mono text-xs">{t('hero.designLabel')}</span>
          </div>
          <div className="flex flex-col gap-2.5 p-4.5">
            <div className="h-2.75 w-3/5 rounded-[3px] bg-[#E3E6E8]" />
            <div className="h-1.75 w-[85%] rounded-[3px] bg-[#EEF0F1]" />
            <div className="mt-1 flex gap-2.5">
              <div className="h-12 w-12 rounded-[7px] bg-[#E3E6E8]" />
              <div className="flex flex-1 flex-col justify-center gap-1.75">
                <div className="h-1.75 w-9/10 rounded-[3px] bg-[#EEF0F1]" />
                <div className="h-1.75 w-3/5 rounded-[3px] bg-[#EEF0F1]" />
              </div>
            </div>
            <div className="bg-accent mt-1.5 h-6 w-20 rounded-[7px]" />
          </div>
        </div>
      </div>
      <div className="parallax-develop w-fit">
        <div className="float-card develop w-60">
          <span
            className="spotlight"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-1.75 px-4.5 py-4 font-mono text-xs leading-[1.7] text-[#D7DEE3]">
            <span className="text-xs tracking-[0.08em] text-[#5EEAD4]">{t('hero.developLabel')}</span>
            <div>
              <span className="text-[#93C5FD]">function</span> <span className="text-accent-300">Product</span>()
              {'{'}
            </div>
            <div className="pl-2.5">
              <span className="text-[#93C5FD]">return</span> (
            </div>
            <div className="pl-5">
              &lt;<span className="text-[#5EEAD4]">Card</span>&gt;
            </div>
            <div className="pl-7.5">
              &lt;<span className="text-[#5EEAD4]">Card.Header</span> /&gt;
            </div>
            <div className="pl-7.5">
              &lt;<span className="text-[#5EEAD4]">Card.Content</span> /&gt;
            </div>
            <div className="pl-7.5">
              &lt;<span className="text-[#5EEAD4]">Card.Footer</span> /&gt;
            </div>
            <div className="pl-5">
              &lt;/<span className="text-[#5EEAD4]">Card</span>&gt;
            </div>
            <div className="pl-2.5">)</div>
            <div>{'}'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

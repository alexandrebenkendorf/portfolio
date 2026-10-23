import { companies } from './companies.data';
import { logoImages } from './logoImages';

export function LogoMarquee() {
  return (
    <div
      className="w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      data-aos="fade-left"
      data-aos-offset="0"
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-16 pr-16"
          >
            {companies.map(({ id, alt }) => (
              <img
                key={id}
                className="logo-img"
                src={logoImages[id]}
                alt={alt}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

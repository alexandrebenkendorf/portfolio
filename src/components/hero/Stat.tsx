interface StatProps {
  target: number;
  suffix?: string;
  label: string;
}

export function Stat({ target, suffix = '', label }: StatProps) {
  return (
    <div className="flex flex-col gap-1 px-7 first:pl-0 last:pr-0">
      <span
        className="stat-num text-text text-3xl font-bold"
        data-aos="fade-in"
        data-target={target}
        data-suffix={suffix}
      >
        0{suffix}
      </span>
      <span className="text-slate-500 font-mono text-xs">{label}</span>
    </div>
  );
}

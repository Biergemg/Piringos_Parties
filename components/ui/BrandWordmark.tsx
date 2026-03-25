interface BrandWordmarkProps {
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  subtitle?: string;
}

export function BrandWordmark({
  containerClassName = '',
  titleClassName = '',
  subtitleClassName = '',
  subtitle = 'Parties',
}: BrandWordmarkProps) {
  return (
    <div className={`flex flex-col ${containerClassName}`.trim()}>
      <span
        className={`font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-brand-pink via-brand-pink to-brand-cta leading-none drop-shadow-sm ${titleClassName}`.trim()}
      >
        Piringos
      </span>
      <span className={`font-extrabold text-brand-text uppercase opacity-60 ${subtitleClassName}`.trim()}>
        {subtitle}
      </span>
    </div>
  );
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  status?: 'online' | 'secure' | null;
}

export const PageHero = ({ title, subtitle, description, status }: PageHeroProps) => (
  <div className="mb-16 border-b border-white/10 pb-12">
    {status && (
      <div className="flex items-center space-x-4 mb-6">
        {status === 'online' ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">System Status: Online</span>
          </>
        ) : (
          <>
            <span className="animate-pulse w-2 h-2 bg-white"></span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Secure Channel Open</span>
          </>
        )}
      </div>
    )}
    <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-6">
      {title} <br />
      <span className="text-neutral-600">{subtitle}</span>
    </h1>
    {description && <p className="text-neutral-400 font-light leading-relaxed">{description}</p>}
  </div>
);

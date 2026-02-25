export default function Footer() {
  return (
    <footer className="py-8 border-t border-emerald-500/10 text-center bg-emerald-950/20 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-lg font-display font-bold tracking-tighter uppercase text-emerald-100">
          NEXUS<span className="text-emerald-500">_</span>
        </p>
        <p className="text-[10px] text-emerald-300/60 font-mono font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} Nexus Creator. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Twitter', 'ArtStation', 'LinkedIn', 'GitHub'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-[10px] font-mono font-bold text-emerald-300/60 hover:text-emerald-100 transition-colors uppercase tracking-widest"
            >
              [{social}]
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

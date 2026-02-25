import { motion } from 'motion/react';
import { MousePointer2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Viewport Wireframes */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[600px] h-[600px] border-[1px] border-emerald-400/20 rounded-full absolute animate-[spin_60s_linear_infinite]" />
        <div className="w-[400px] h-[400px] border-[1px] border-emerald-400/20 rounded-full absolute animate-[spin_40s_linear_infinite_reverse]" />
        <div className="w-[800px] h-[1px] bg-emerald-400/20 absolute rotate-45" />
        <div className="w-[800px] h-[1px] bg-emerald-400/20 absolute -rotate-45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="w-8 h-[1px] bg-emerald-400"></span>
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-200 uppercase">
            Scene 01 // Initialization
          </span>
          <span className="w-8 h-[1px] bg-emerald-400"></span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.85] mb-6 uppercase text-emerald-50"
        >
          Game <br />
          <span className="text-transparent text-stroke-accent">Designer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto mb-12 font-medium"
        >
          Architecting interactive systems and training neural networks to build the next generation of immersive digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#works"
            className="group relative px-8 py-4 bg-emerald-400 text-emerald-950 font-mono text-sm uppercase tracking-widest hover:bg-emerald-950 hover:text-emerald-400 transition-colors flex items-center justify-center gap-3 border border-emerald-400"
          >
            <MousePointer2 size={16} className="group-hover:animate-ping" />
            Explore Works
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-950 group-hover:border-emerald-400 transition-colors" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-950 group-hover:border-emerald-400 transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

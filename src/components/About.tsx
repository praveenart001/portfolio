import { motion } from 'motion/react';
import { Code, Cpu, Gamepad2, Sparkles } from 'lucide-react';

const skills = [
  { name: 'Game Design', icon: Gamepad2, level: '95%' },
  { name: 'AI Generation', icon: Sparkles, level: '90%' },
  { name: 'Creative Coding', icon: Code, level: '85%' },
  { name: 'Procedural Sys', icon: Cpu, level: '88%' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative p-4 border border-emerald-500/20 corner-borders bg-emerald-950/20 backdrop-blur-sm"
          >
            <div className="flex justify-between items-center mb-4 border-b border-emerald-500/10 pb-2">
              <span className="text-[10px] font-mono font-bold text-emerald-300/60">ENTITY_ID: NX-001</span>
              <span className="text-[10px] font-mono font-bold text-emerald-400 animate-pulse">STATUS: ACTIVE</span>
            </div>
            <div className="aspect-[4/5] relative bg-emerald-950 overflow-hidden border border-emerald-500/10">
              <img 
                src="https://picsum.photos/seed/cyberpunk/800/1000" 
                alt="Portrait" 
                className="w-full h-full object-cover opacity-90 mix-blend-screen hover:mix-blend-normal transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(6,78,59,0.4)_50%)] bg-[length:100%_4px] pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column - Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-300 uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 inline-block" />
              Creator Profile
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase tracking-tight text-emerald-50">
              Logic Meets <span className="text-transparent text-stroke-accent">Imagination</span>
            </h3>
            <p className="text-emerald-100/80 text-base mb-10 font-medium leading-relaxed">
              I am a multidisciplinary creator operating at the intersection of game development and artificial intelligence. By leveraging cutting-edge AI tools alongside traditional game design principles, I rapidly prototype, iterate, and build worlds that feel both alien and deeply familiar.
            </p>

            <div className="space-y-6">
              <h4 className="text-xs font-mono font-bold text-emerald-300/60 uppercase tracking-widest border-b border-emerald-500/10 pb-2">
                Core Attributes
              </h4>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold uppercase text-emerald-100">
                    <span className="flex items-center gap-2">
                      <skill.icon size={14} className="text-emerald-400" />
                      {skill.name}
                    </span>
                    <span className="text-emerald-300/70">{skill.level}</span>
                  </div>
                  <div className="h-1 w-full bg-emerald-500/10 relative overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                      className="absolute top-0 left-0 h-full bg-emerald-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ExternalLink, Maximize } from 'lucide-react';

const projects = [
  {
    id: 'PRJ-01',
    title: 'Neon Drift',
    category: 'Game Design',
    image: 'https://picsum.photos/seed/neon/800/600',
    description: 'A cyberpunk racing game with procedurally generated tracks.',
  },
  {
    id: 'PRJ-02',
    title: 'Ethereal Entities',
    category: 'AI Concept Art',
    image: 'https://picsum.photos/seed/ethereal/800/600',
    description: 'A collection of AI-generated character concepts for an upcoming RPG.',
  },
  {
    id: 'PRJ-03',
    title: 'Void Walker',
    category: 'Level Design',
    image: 'https://picsum.photos/seed/void/800/600',
    description: 'Zero-gravity puzzle mechanics in a derelict space station.',
  },
  {
    id: 'PRJ-04',
    title: 'Synthwave Landscapes',
    category: 'AI Environment Art',
    image: 'https://picsum.photos/seed/synthwave/800/600',
    description: 'Using Stable Diffusion to create infinite retro-futuristic horizons.',
  },
];

export default function Works() {
  return (
    <section id="works" className="py-24 relative border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-300 uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 inline-block" />
              Asset Library
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-emerald-50">
              Featured <span className="text-transparent text-stroke-accent">Projects</span>
            </h3>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#"
            className="hidden md:flex items-center gap-2 text-xs font-mono font-bold text-emerald-300/60 hover:text-emerald-100 transition-colors uppercase tracking-widest"
          >
            [ View All Assets ] <ExternalLink size={14} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative border border-emerald-500/20 bg-emerald-950/20 backdrop-blur-sm p-2 corner-borders"
            >
              <div className="flex justify-between items-center px-2 pb-2">
                <span className="text-[10px] font-mono font-bold text-emerald-300/60">{project.id}</span>
                <span className="text-[10px] font-mono font-bold text-emerald-100 uppercase">{project.category}</span>
              </div>
              <div className="aspect-[4/3] overflow-hidden relative bg-emerald-950 border border-emerald-500/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 mix-blend-screen group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 backdrop-blur-sm border border-emerald-500/20 flex items-center justify-center text-emerald-100 shadow-lg">
                    <Maximize size={20} />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="text-xl font-display font-bold mb-2 uppercase tracking-wide text-emerald-50">
                  {project.title}
                </h4>
                <p className="text-emerald-100/80 text-sm font-medium">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

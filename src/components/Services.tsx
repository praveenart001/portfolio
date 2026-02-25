import { motion } from 'motion/react';
import { Layers, PenTool, Terminal, Zap } from 'lucide-react';

const services = [
  {
    id: 'MOD-01',
    icon: Layers,
    title: 'Game & Level Design',
    description: 'Crafting engaging core loops, balanced mechanics, and immersive environments that keep players hooked.',
  },
  {
    id: 'MOD-02',
    icon: PenTool,
    title: 'AI Concept Gen',
    description: 'Rapidly visualizing characters, props, and environments using advanced prompt engineering.',
  },
  {
    id: 'MOD-03',
    icon: Terminal,
    title: 'Tech Prototyping',
    description: 'Building quick, playable prototypes in Unity or Unreal to test mechanics before full production.',
  },
  {
    id: 'MOD-04',
    icon: Zap,
    title: 'Pipeline Opt',
    description: 'Integrating AI tools into traditional art pipelines to speed up texture generation and ideation.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-300 uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 inline-block" />
            System Modules
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-emerald-50">
            Services & <span className="text-transparent text-stroke-accent">Expertise</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-emerald-500/20 bg-emerald-950/20 backdrop-blur-sm p-6 hover:bg-emerald-900/40 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 text-[10px] font-mono font-bold text-emerald-300/40 group-hover:text-emerald-100 transition-colors">
                {service.id}
              </div>
              <service.icon className="w-8 h-8 text-emerald-400 mb-6" strokeWidth={1.5} />
              <h4 className="text-lg font-display font-bold mb-3 uppercase tracking-wide text-emerald-100">{service.title}</h4>
              <p className="text-emerald-100/80 text-sm font-medium leading-relaxed">
                {service.description}
              </p>
              
              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-emerald-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

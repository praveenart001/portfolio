import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-300 uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 inline-block" />
              Communication Link
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase tracking-tight text-emerald-50">
              Initiate <span className="text-transparent text-stroke-accent">Contact</span>
            </h3>
            <p className="text-emerald-100/80 text-base mb-10 font-medium">
              Currently open for freelance opportunities, collaborations, or just a chat about the future of AI in gaming.
            </p>

            <div className="font-mono font-bold text-sm space-y-4 text-emerald-300/70">
              <div className="flex items-center gap-4">
                <span className="text-emerald-400">{'>'}</span>
                <span>EMAIL:</span>
                <span className="text-emerald-100">hello@nexus-creator.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-emerald-400">{'>'}</span>
                <span>LOCATION:</span>
                <span className="text-emerald-100">Digital Nomads / Earth</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-emerald-400">{'>'}</span>
                <span>STATUS:</span>
                <span className="text-emerald-400 animate-pulse">AVAILABLE</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-emerald-500/20 bg-emerald-950/20 backdrop-blur-sm p-1 corner-borders"
          >
            <div className="bg-emerald-950/60 p-6 h-full relative border border-emerald-500/10">
              <div className="flex items-center gap-2 mb-6 border-b border-emerald-500/10 pb-4 text-emerald-300/60 font-mono font-bold text-xs">
                <Terminal size={14} />
                <span>terminal_input.exe</span>
              </div>
              
              <form className="space-y-6 font-mono font-bold text-sm" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-emerald-100 flex items-center gap-2">
                    <span>{'>'}</span> SET_NAME:
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-emerald-500/20 px-0 py-2 text-emerald-50 focus:outline-none focus:border-emerald-400 transition-colors placeholder:text-emerald-300/30"
                    placeholder="_"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-emerald-100 flex items-center gap-2">
                    <span>{'>'}</span> SET_EMAIL:
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-emerald-500/20 px-0 py-2 text-emerald-50 focus:outline-none focus:border-emerald-400 transition-colors placeholder:text-emerald-300/30"
                    placeholder="_"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-emerald-100 flex items-center gap-2">
                    <span>{'>'}</span> TRANSMIT_DATA:
                  </label>
                  <textarea 
                    rows={3}
                    className="w-full bg-transparent border-b border-emerald-500/20 px-0 py-2 text-emerald-50 focus:outline-none focus:border-emerald-400 transition-colors resize-none placeholder:text-emerald-300/30"
                    placeholder="_"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 border border-emerald-400 text-emerald-100 hover:bg-emerald-400 hover:text-emerald-950 transition-colors uppercase tracking-widest mt-4"
                >
                  [ Execute Transmission ]
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

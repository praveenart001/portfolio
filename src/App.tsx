import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-grid selection:bg-emerald-400 selection:text-emerald-950 relative">
      {/* Engine HUD Overlay */}
      <div className="fixed top-4 left-4 z-50 font-mono text-[10px] text-emerald-300/60 hidden md:block pointer-events-none tracking-widest">
        <div>FPS: 60.0</div>
        <div>MS: 16.6</div>
        <div className="mt-2 text-emerald-200 font-bold">SYS.ONLINE</div>
      </div>
      <div className="fixed bottom-4 right-4 z-50 font-mono text-[10px] text-emerald-300/60 hidden md:block pointer-events-none text-right tracking-widest">
        <div>POS: X:1024 Y:768 Z:0</div>
        <div>BUILD: v1.0.4_PROD</div>
      </div>
      
      {/* Editor Safe Margins */}
      <div className="fixed top-0 bottom-0 left-12 w-[1px] bg-emerald-500/10 pointer-events-none z-40 hidden md:block" />
      <div className="fixed top-0 bottom-0 right-12 w-[1px] bg-emerald-500/10 pointer-events-none z-40 hidden md:block" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Works />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

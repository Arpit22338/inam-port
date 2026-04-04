import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('NEB EXAMS IN');
  const [statusVal, setStatusVal] = useState('');

  // Target: Baishakh 14 to 27, 2083 BS (April 27 - May 10, 2026)
  const EXAM_START = new Date('2026-04-27T08:00:00'); 
  const EXAM_END = new Date('2026-05-10T23:59:59');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      
      if (now < EXAM_START) {
        // Phase 1: Countdown
        const diff = EXAM_START.getTime() - now.getTime();
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);
        
        setStatus('NEB EXAMS IN');
        setStatusVal(`${d}D : ${h}H : ${m}M : ${s}S`);
      } else if (now >= EXAM_START && now <= EXAM_END) {
        // Phase 2: During Exams
        const dayNum = Math.floor((now.getTime() - EXAM_START.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        const ordinal = (n: number) => {
          if (n === 1) return 'ONE';
          if (n === 2) return 'TWO';
          if (n === 3) return 'THREE';
          if (n === 4) return 'FOUR';
          if (n === 5) return 'FIVE';
          return n.toString();
        };
        setStatus('STATUS');
        setStatusVal(`NEB DAY ${ordinal(dayNum)}`);
      } else {
        // Phase 3: Completed
        setStatus('STATUS');
        setStatusVal('COMPLETED MY NEB EXAMS');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [EXAM_START, EXAM_END]);

  // Simplified Scroll Reveal Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav>
        <div className="container nav-content">
          <div className="mono accent" style={{ fontWeight: 'bold' }}>INAM.SYS</div>
          <div className="nav-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#hobbies">Hobbies</a>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* HERO SECTION */}
        <section id="hero" className="hero">
          <div className="reveal visible section-label">// NEB_BOARD_PROTOCOL_V6.0 //</div>
          <div className="glitch-wrapper">
            <h1 className="hero-title glitch" data-text="INAM">INAM</h1>
            <h1 className="hero-title glitch accent" data-text="PAUDEL">PAUDEL</h1>
          </div>
          
          <div className="reveal visible">
            <div className="status-box">
              <span className="section-label" style={{ fontSize: '0.6rem' }}>{status}</span>
              <div className="status-val">{statusVal}</div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="about" className="reveal">
          <span className="section-label">01 // RECOGNITION</span>
          <h2 className="glitch" data-text="ACHIEVEMENTS" style={{ fontSize: '2rem', marginBottom: '2rem' }}>ACHIEVEMENTS</h2>
          <div className="card">
            <h3 className="accent" style={{ marginBottom: '1rem' }}>DAYDREAM HACKATHON</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Successfully reached the <span className="accent">SEMI-FINALS</span> of the DayDream Hackathon. 
              Demonstrated rapid architectural scaling and creative logic in a competitive workspace.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="reveal">
          <span className="section-label">02 // DEPLOYED_ASSETS</span>
          <h2 className="glitch" data-text="CORE_BUILDS" style={{ fontSize: '2rem', marginBottom: '2rem' }}>CORE BUILDS</h2>
          <div className="grid">
            <div className="card">
              <h3 className="accent" style={{ marginBottom: '1rem' }}>GLITCH_V6 PORTFOLIO</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Advanced digital interface featuring fluid responsiveness, scroll orchestration, and multi-layer glitch typography.
              </p>
            </div>
            <div className="card">
              <h3 className="accent" style={{ marginBottom: '1rem' }}>C_LOGIC_CALC</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Computational tool built in C focusing on memory efficiency and structural math logic.
              </p>
            </div>
          </div>
        </section>

        {/* HOBBIES */}
        <section id="hobbies" className="reveal">
          <span className="section-label">03 // OFF_DUTY</span>
          <h2 className="glitch" data-text="PROTOCOLS" style={{ fontSize: '2rem', marginBottom: '2rem' }}>PROTOCOLS</h2>
          <div className="grid">
            <div className="card">
              <h3 className="accent" style={{ marginBottom: '1rem' }}>SONIC MODULATION</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Guitar integration and vocal frequency management.</p>
            </div>
            <div className="card">
              <h3 className="accent" style={{ marginBottom: '1rem' }}>SOCIAL NETWORKING</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Initiating and maintaining new friend-node connections.</p>
            </div>
          </div>
        </section>

        <footer>
          <div className="mono">// &copy; 2026 INAM PAUDEL // NEB_BOARDS_AUTHORIZED // [SESSION_EOF]</div>
        </footer>
      </div>
    </>
  )
}

export default App

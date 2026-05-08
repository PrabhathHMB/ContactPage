import { Users, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="animate-fade-in section-padding" style={{
      textAlign: 'center',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <div style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '8px', 
        padding: '8px 20px', 
        background: '#eff6ff', 
        color: 'var(--primary)', 
        borderRadius: '50px', 
        fontSize: '0.9rem', 
        fontWeight: '700',
        marginBottom: '30px'
      }}>
        <Sparkles size={16} /> ADMISSIONS OPEN FOR 2026
      </div>
      
      <h1 className="hero-title" style={{ fontSize: '4.5rem', marginBottom: '24px', lineHeight: '1.1', color: 'var(--text)' }}>
        Maths & Science <span style={{ color: 'var(--primary)' }}>Easy Learning</span>
      </h1>
      <h2 className="sinhala hero-subtitle" style={{ fontSize: '1.8rem', color: 'var(--text-muted)', marginBottom: '40px', fontWeight: '500', maxWidth: '800px', margin: '0 auto 40px' }}>
        O/L විභාගයට සාර්ථකව මුහුණ දීමට අවශ්‍ය ගණිතය හා විද්‍යාව පාඩම් සරලව ඉගෙන ගන්න.
      </h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <a href="#register" className="btn btn-primary">
          Register for Classes <ArrowRight size={20} />
        </a>
        <a href="https://chat.whatsapp.com/CTUY3jiaMNRHuycTTID0OL" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
          Join WhatsApp Group <Users size={20} />
        </a>
      </div>
      
      <div className="stats-container" style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '800' }}>1000+</div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Students</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '800' }}>95%</div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Success Rate</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '800' }}>2026</div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>O/L Batch</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

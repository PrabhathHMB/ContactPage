import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-padding" style={{ padding: '80px 20px', borderTop: '1px solid rgba(0, 0, 0, 0.05)', background: '#ffffff' }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '50px',
          marginBottom: '60px'
        }}>
          <div className="footer-section">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
              <img
                src="/logo.png"
                alt="B.P. Science Academy Logo"
                className="logo-img"
                style={{ height: '70px', width: 'auto' }}
              />
              <div style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--text)', lineHeight: '1.2' }}>
                B.P. SCIENCE<br />ACADEMY
              </div>
            </div>
            <p className="sinhala" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '350px', lineHeight: '1.8' }}>
              ගණිතය සහ විද්‍යාව විෂයන් සඳහා ගුණාත්මක අධ්‍යාපනයක් ලබා දෙමින් සිසුන් සවිබල ගැන්වීම. දීප්තිමත් අනාගතයක් සඳහා අපගේ ප්‍රජාව හා එක්වන්න.
            </p>
          </div>

          <div className="footer-section" style={{ paddingLeft: '20px' }}>
            <h4 style={{ marginBottom: '24px', fontSize: '1.2rem', color: 'var(--text)' }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-muted)' }}>
                <div style={{ color: 'var(--primary)', background: '#eff6ff', padding: '10px', borderRadius: '10px' }}>
                  <Phone size={18} />
                </div>
                <span style={{ fontWeight: '500' }}>+94 76 498 2653</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-muted)' }}>
                <div style={{ color: 'var(--primary)', background: '#eff6ff', padding: '10px', borderRadius: '10px' }}>
                  <Mail size={18} />
                </div>
                <span style={{ fontWeight: '500' }}>b.p.science.academy1@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-muted)' }}>
                <div style={{ color: 'var(--primary)', background: '#eff6ff', padding: '10px', borderRadius: '10px' }}>
                  <MapPin size={18} />
                </div>
                <span style={{ fontWeight: '500' }}>No 94,Alakolagala Boragas
                  ,Nuwaraeliya-welimada Road ,Sri Lanka</span>
              </div>
            </div>
          </div>

          <div className="footer-section" style={{ paddingLeft: '20px' }}>
            <h4 style={{ marginBottom: '24px', fontSize: '1.2rem', color: 'var(--text)' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <a href="#register" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Register for Classes</a>
              <a href="https://chat.whatsapp.com/CTUY3jiaMNRHuycTTID0OL" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>WhatsApp Community</a>
              <a href="https://www.facebook.com/share/1E5gVS8K4Z/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Facebook Page</a>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: '40px',
          borderTop: '1px solid #f1f5f9',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          fontWeight: '500'
        }}>
          © {new Date().getFullYear()} B.P. Science Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

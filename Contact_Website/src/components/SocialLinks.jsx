import { MessageCircle, Share2, Play } from 'lucide-react';

const SocialLinks = () => {
  const socials = [
    {
      name: 'WhatsApp Community',
      nameSi: 'WhatsApp සමූහය',
      icon: <MessageCircle size={24} />,
      url: 'https://chat.whatsapp.com/CTUY3jiaMNRHuycTTID0OL',
      color: '#25D366'
    },
    {
      name: 'Facebook Page',
      nameSi: 'මුහුණු පොත',
      icon: <Share2 size={24} />,
      url: 'https://www.facebook.com/share/1E5gVS8K4Z/',
      color: '#1877F2'
    },
    {
      name: 'YouTube Channel',
      nameSi: 'යූටියුබ් නාලිකාව',
      icon: <Play size={24} />,
      url: 'https://www.youtube.com/channel/UCMP0DfNrI483-1V_03txZGg',
      color: '#FF0000'
    }
  ];

  return (
    <section style={{ padding: '60px 20px', background: 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Connect With Us</h2>
          <h3 className="sinhala" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '400' }}>
            අප හා සම්බන්ධ වන්න
          </h3>
        </div>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {socials.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass"
              style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                textDecoration: 'none',
                color: 'white',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: social.color, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                boxShadow: `0 10px 20px ${social.color}44`
              }}>
                {social.icon}
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{social.name}</div>
                <div className="sinhala" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{social.nameSi}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;

const Header = () => {
  return (
    <header className="header-container" style={{ 
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      position: 'sticky',
      top: '20px',
      margin: '0 20px',
      zIndex: 1000,
      padding: '12px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '20px',
      border: 'none',
      gap: '15px'
    }}>
        {/* Stylized Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'default', minWidth: '0' }}>
          <div className="logo-badge" style={{
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            color: 'white',
            width: '45px',
            height: '45px',
            borderRadius: '12px',
            display: 'flex',
            flexShrink: 0,
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '800',
            fontSize: '1.4rem',
            fontFamily: "'Outfit', sans-serif",
            boxShadow: '0 8px 16px rgba(37, 99, 235, 0.2)',
            transform: 'rotate(-5deg)'
          }}>
            BP
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1', overflow: 'hidden' }}>
            <span className="logo-text" style={{ 
              fontWeight: '800', 
              fontSize: '1.3rem', 
              color: 'var(--text)',
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: '-0.5px',
              whiteSpace: 'nowrap'
            }}>
              SCIENCE <span style={{ color: 'var(--primary)' }}>ACADEMY</span>
            </span>
            <span className="sinhala" style={{ 
              fontSize: '0.75rem', 
              color: 'var(--text-muted)', 
              fontWeight: '600',
              letterSpacing: '1px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              B.P. විද්‍යා ඇකඩමිය
            </span>
          </div>
        </div>
      
      <nav style={{ display: 'flex', flexShrink: 0 }}>
        <a href="#register" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
          Register
        </a>
      </nav>
    </header>
  );
};

export default Header;

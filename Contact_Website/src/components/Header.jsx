const Header = () => {
  return (
    <header className="glass" style={{
      position: 'sticky',
      top: '20px',
      margin: '0 20px',
      zIndex: 1000,
      padding: '12px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '20px',
      border: 'none'
    }}>
        {/* Stylized Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'default' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            color: 'white',
            width: '45px',
            height: '45px',
            borderRadius: '12px',
            display: 'flex',
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
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
            <span style={{ 
              fontWeight: '800', 
              fontSize: '1.3rem', 
              color: 'var(--text)',
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: '-0.5px'
            }}>
              SCIENCE <span style={{ color: 'var(--primary)' }}>ACADEMY</span>
            </span>
            <span className="sinhala" style={{ 
              fontSize: '0.75rem', 
              color: 'var(--text-muted)', 
              fontWeight: '600',
              letterSpacing: '1px'
            }}>
              B.P. විද්‍යා ඇකඩමිය
            </span>
          </div>
        </div>
      
      <nav style={{ display: 'flex', gap: '20px' }}>
        <a href="#register" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
          Register
        </a>
      </nav>
    </header>
  );
};

export default Header;

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
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img 
          src="/logo.png" 
          alt="B.P. Science Academy Logo" 
          className="logo-img"
          style={{ height: '60px', width: 'auto' }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--text)' }}>
          B.P. SCIENCE ACADEMY
        </div>
        <div className="sinhala" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '500' }}>
          බී.පී. සයන්ස් ඇකඩමි
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

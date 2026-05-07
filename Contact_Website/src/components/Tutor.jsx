import { Award, GraduationCap, Mail, Phone } from 'lucide-react';

const Tutor = () => {
  return (
    <section style={{ padding: '100px 20px', background: '#f8fafc' }}>
      <div className="container">
        <div className="glass" style={{ padding: '60px', border: 'none', background: 'white', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '280px', 
              height: '350px', 
              borderRadius: '24px', 
              margin: '0 auto 30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              background: '#f1f5f9'
            }}>
               <img 
                src="/my.jpg" 
                alt="Bhanuka Prabhath" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/280x350?text=Bhanuka+Prabhath";
                }}
              />
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Bhanuka Prabhath</h2>
            <div className="sinhala" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '1.2rem' }}>භානුක ප්‍රභාත්</div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text)' }}>
              <Award size={28} style={{ color: 'var(--primary)' }} /> Qualifications & Expertise
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ color: 'var(--primary)', background: '#eff6ff', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>BSc (UG) University of Kelaniya</div>
                  <div style={{ color: 'var(--text-muted)' }}>Specializing in Science & Mathematics</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ color: 'var(--primary)', background: '#eff6ff', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>BIT (UG) University of Colombo</div>
                  <div style={{ color: 'var(--text-muted)' }}>Bachelor of Information Technology</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ color: 'var(--primary)', background: '#eff6ff', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>+94 76 498 2653</div>
                  <div style={{ color: 'var(--text-muted)' }}>WhatsApp for direct inquiries</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ color: 'var(--primary)', background: '#eff6ff', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>b.p.science.academy1@gmail.com</div>
                  <div style={{ color: 'var(--text-muted)' }}>Email for official correspondence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutor;

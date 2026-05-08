import { CheckCircle2, BookOpen, Clock, FileText, Zap } from 'lucide-react';

const About = () => {
  const features = [
    { title: 'Grade 6–11', titleSi: '6 - 11 ශ්‍රේණි', icon: <BookOpen size={24} /> },
    { title: 'Sinhala Medium', titleSi: 'සිංහල මාධ්‍යය', icon: <CheckCircle2 size={24} /> },
    { title: 'Weekly Revision', titleSi: 'සතිපතා පුනරීක්ෂණ', icon: <Clock size={24} /> },
    { title: 'Past Papers', titleSi: 'පසුගිය විභාග ප්‍රශ්න පත්‍ර', icon: <FileText size={24} /> },
    { title: 'Short Tricks & Tips', titleSi: 'කෙටි ක්‍රම සහ ටිප්ස්', icon: <Zap size={24} /> },
  ];

  return (
    <section className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary)' }} className="hero-title">Maths & Science Easy Learning</h2>
            <p className="sinhala" style={{ fontSize: '1.2rem', color: 'var(--text)', marginBottom: '30px', lineHeight: '1.8' }}>
              BP Maths & Science Academy තුළ O/L ගණිතය හා විද්යාව විෂයන් සරල, පැහැදිලි සහ සිසුන්ට තේරුම් ගත හැකි ආකාරයෙන් ඉගැන්වේ. 
              ප්රශ්න පත්ර සාකච්ඡා, පුනරීක්ෂණ, විභාග සූදානම් කිරීම සහ තනි අවධානය යටතේ ඉගැන්වීම් සිදු කරයි. 
              සෑම සිසුවෙකුටම ගණිතය හා විද්යාව ආසාවෙන් සහ විශ්වාසයෙන් ඉගෙන ගැනීමට උපකාර කිරීම අපගේ අරමුණයි.
            </p>
            <div style={{ padding: '20px', borderLeft: '4px solid var(--secondary)', background: '#f5f3ff', borderRadius: '0 12px 12px 0' }}>
              <p className="sinhala" style={{ fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--secondary)', fontWeight: '600' }}>
                “අමාරුයි” කියන විෂයන් පහසුම විෂයන් බවට පත් කරගන්න.
              </p>
            </div>
          </div>

          <div className="grid" style={{ gap: '15px' }}>
            {features.map((f, i) => (
              <div key={i} className="glass" style={{ padding: '15px', display: 'flex', alignItems: 'center', gap: '15px', border: 'none', background: '#f8fafc' }}>
                <div style={{ color: 'var(--primary)', background: 'white', padding: '10px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  {f.icon}
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{f.title}</div>
                  <div className="sinhala" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{f.titleSi}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

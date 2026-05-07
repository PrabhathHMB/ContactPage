import { useState } from 'react';
import { Send, Phone, User, GraduationCap, School } from 'lucide-react';
import emailjs from '@emailjs/browser';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    school: '',
    grade: '',
    whatsappNumber: '',
    subject: 'math'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Configuration
    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_oxndf7z';
    const TEMPLATE_ID = 'template_tlle5fk';
    const PUBLIC_KEY = '5w722dwfpIA77AxB0';

    const templateParams = {
      from_name: formData.fullName,
      school: formData.school,
      grade: formData.grade,
      whatsapp: formData.whatsappNumber,
      subject: formData.subject.toUpperCase(),
      to_email: 'b.p.science.academy1@gmail.com'
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);

        // Open WhatsApp Community Link
        const communityUrl = 'https://chat.whatsapp.com/CTUY3jiaMNRHuycTTID0OL';
        window.open(communityUrl, '_blank');

        alert('Registration Successful! Your details have been emailed to the academy. You are now being redirected to our WhatsApp Community.');

        // Reset form
        setFormData({
          fullName: '',
          school: '',
          grade: '',
          whatsappNumber: '',
          subject: 'math'
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send registration details. Please try again or contact us via WhatsApp directly.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="register" style={{ padding: '80px 20px' }}>
      <div className="container" style={{ maxWidth: '650px' }}>
        <div className="glass" style={{ padding: '50px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Register Now</h2>
            <h3 className="sinhala" style={{ fontSize: '1.4rem', color: 'var(--text-muted)', fontWeight: '500' }}>
              දැන්ම ලියාපදිංචි වන්න
            </h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                Full Name <span>(සම්පූර්ණ නම)</span>
              </label>
              <div style={{ position: 'relative' }}>
                <User size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Enter your full name"
                  className="form-input"
                  style={{ paddingLeft: '48px' }}
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                School <span>(පාසල)</span>
              </label>
              <div style={{ position: 'relative' }}>
                <School size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  name="school"
                  required
                  placeholder="Enter your school"
                  className="form-input"
                  style={{ paddingLeft: '48px' }}
                  value={formData.school}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">
                  Grade <span>(ශ්‍රේණිය)</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <GraduationCap size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="text"
                    name="grade"
                    required
                    placeholder="e.g. Grade 11"
                    className="form-input"
                    style={{ paddingLeft: '48px' }}
                    value={formData.grade}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  WhatsApp Number <span>(WhatsApp අංකය)</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <Phone size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="tel"
                    name="whatsappNumber"
                    required
                    placeholder="076 XXXXXXX"
                    className="form-input"
                    style={{ paddingLeft: '48px' }}
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Subject <span>(විෂය)</span>
              </label>
              <select
                name="subject"
                className="form-input form-select"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="math">Mathematics (ගණිතය)</option>
                <option value="science">Science (විද්‍යාව)</option>
                <option value="both">Both (දෙකම)</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Register & Join Community'}
              <Send size={18} />
            </button>

            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '20px' }}>
              Your details will be emailed to b.p.science.academy1@gmail.com
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;

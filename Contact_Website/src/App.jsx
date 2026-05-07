import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tutor from './components/Tutor';
import RegistrationForm from './components/RegistrationForm';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient" style={{ minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Tutor />
        <RegistrationForm />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
}

export default App;

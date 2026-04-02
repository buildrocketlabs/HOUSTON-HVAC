import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import About from './components/About';
import Offers from './components/Offers';
import Reviews from './components/Reviews';
import ServiceAreas from './components/ServiceAreas';
import ContactFooter from './components/ContactFooter';
import MobileNav from './components/MobileNav';
import LeadPopup from './components/LeadPopup';

function App() {
  return (
    <div className="min-h-screen bg-surface pb-20 md:pb-0">
      <LeadPopup />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Offers />
        <Reviews />
        <ServiceAreas />
      </main>
      <ContactFooter />
      <MobileNav />
    </div>
  );
}

export default App;

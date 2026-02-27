import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Footer from './components/Footer';
import NasilCalisirPage from './pages/NasilCalisirPage';
import OzelliklerPage from './pages/OzelliklerPage';
import IletisimPage from './pages/IletisimPage';
import YardimMerkeziPage from './pages/YardimMerkeziPage';
import KullanimKosullariPage from './pages/KullanimKosullariPage';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nasil-calisir" element={<NasilCalisirPage />} />
          <Route path="/ozellikler" element={<OzelliklerPage />} />
          <Route path="/iletisim" element={<IletisimPage />} />
          <Route path="/yardim" element={<YardimMerkeziPage />} />
          <Route path="/kullanim-kosullari" element={<KullanimKosullariPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
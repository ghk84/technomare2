import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Naval from './pages/Naval';
import Piers from './pages/Piers';

function App() {
  const [language, setLanguage] = useState<'en' | 'el'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'el' : 'en');
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header language={language} toggleLanguage={toggleLanguage} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/naval" element={<Naval language={language} />} />
            <Route path="/piers" element={<Piers language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;

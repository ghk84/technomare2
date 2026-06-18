import { Link } from 'react-router-dom';
import { Anchor, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'el';
  toggleLanguage: () => void;
}

const translations = {
  en: {
    title: 'Hellenic Maritime Registry',
    home: 'Home',
    naval: 'Ship Registration',
    piers: 'Harbor Piers',
  },
  el: {
    title: 'Ελληνικό Ναυτιλιακό Μητρώο',
    home: 'Αρχική',
    naval: 'Εγγραφή Πλοίων',
    piers: 'Προβλήτες Λιμένων',
  },
};

const Header = ({ language, toggleLanguage }: HeaderProps) => {
  const t = translations[language];

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <Anchor className="w-10 h-10" />
            <div>
              <h1 className="text-2xl font-bold">{t.title}</h1>
              <p className="text-sm text-blue-200">Maritime Services</p>
            </div>
          </Link>
          
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
            aria-label="Toggle Language"
          >
            <Globe className="w-5 h-5" />
            <span className="font-medium">{language === 'en' ? 'ΕΛ' : 'EN'}</span>
          </button>
        </div>
        
        <nav className="mt-4">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-blue-300 transition-colors font-medium"
              >
                {t.home}
              </Link>
            </li>
            <li>
              <Link
                to="/naval"
                className="hover:text-blue-300 transition-colors font-medium"
              >
                {t.naval}
              </Link>
            </li>
            <li>
              <Link
                to="/piers"
                className="hover:text-blue-300 transition-colors font-medium"
              >
                {t.piers}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

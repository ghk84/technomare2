import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'el';
}

const translations = {
  en: {
    contact: 'Contact Information',
    address: '123 Harbor Avenue, Piraeus, Greece',
    rights: 'All rights reserved.',
  },
  el: {
    contact: 'Στοιχεία Επικοινωνίας',
    address: 'Λεωφόρος Λιμανιού 123, Πειραιάς, Ελλάδα',
    rights: 'Όλα τα δικαιώματα κατοχυρωμένα.',
  },
};

const Footer = ({ language }: FooterProps) => {
  const t = translations[language];
  
  return (
    <footer className="bg-blue-950 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 mt-1 text-blue-300" />
            <div>
              <h3 className="font-semibold mb-1">{t.contact}</h3>
              <p className="text-sm text-blue-200">{t.address}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 mt-1 text-blue-300" />
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-sm text-blue-200">+30 210 1234567</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 mt-1 text-blue-300" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-blue-200">info@hellenicmaritime.gr</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-6 pt-6 text-center text-sm text-blue-300">
          <p>&copy; 2026 Hellenic Maritime Registry. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

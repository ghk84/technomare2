import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ship, Anchor, FileText, Award, Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface HomeProps {
  language: 'en' | 'el';
}

const translations = {
  en: {
    welcome: 'Welcome to Hellenic Maritime Registry',
    subtitle: 'Your Trusted Partner in Maritime Registration Services',
    description: 'We are a leading maritime registration authority specializing in comprehensive ship registration and harbor pier certification services. With decades of experience in the maritime industry, we provide reliable, efficient, and compliant registration solutions for vessels of all types and sizes.',
    ourServices: 'Our Services',
    shipReg: 'Ship Registration',
    shipRegDesc: 'Complete registration services for commercial vessels, yachts, and maritime fleet management.',
    pierReg: 'Harbor Pier Registration',
    pierRegDesc: 'Professional certification and registration of harbor piers, docks, and maritime infrastructure.',
    whyChoose: 'Why Choose Us',
    expertise: 'Expert Knowledge',
    expertiseDesc: 'Decades of maritime industry experience and regulatory compliance expertise.',
    efficiency: 'Fast Processing',
    efficiencyDesc: 'Streamlined procedures ensuring quick turnaround times for all registrations.',
    compliance: 'Full Compliance',
    complianceDesc: 'Complete adherence to international maritime laws and Greek regulations.',
    support: '24/7 Support',
    supportDesc: 'Round-the-clock customer service for all your maritime registration needs.',
    viewShips: 'View Ship Registration',
    viewPiers: 'View Pier Registration',
    contactUs: 'Contact Us',
    contactDesc: 'Get in touch with our team for any inquiries about ship or pier registration services.',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    subject: 'Subject',
    message: 'Message',
    send: 'Send Message',
    ourLocation: 'Our Location',
    locationDesc: 'Visit our office in Piraeus for in-person consultation and services.',
    success: 'Thank you! Your message has been sent successfully.',
    namePlaceholder: 'Enter your full name',
    emailPlaceholder: 'Enter your email address',
    phonePlaceholder: 'Enter your phone number',
    subjectPlaceholder: 'Enter message subject',
    messagePlaceholder: 'Enter your message here...',
  },
  el: {
    welcome: 'Καλώς ήρθατε στο Ελληνικό Ναυτιλιακό Μητρώο',
    subtitle: 'Ο Αξιόπιστος Συνεργάτης σας στις Υπηρεσίες Ναυτιλιακής Εγγραφής',
    description: 'Είμαστε μια κορυφαία αρχή ναυτιλιακής εγγραφής που ειδικεύεται σε ολοκληρωμένες υπηρεσίες εγγραφής πλοίων και πιστοποίησης λιμενικών προβλητών. Με δεκαετίες εμπειρίας στη ναυτιλιακή βιομηχανία, παρέχουμε αξιόπιστες, αποτελεσματικές και συμβατές λύσεις εγγραφής για πλοία όλων των τύπων και μεγεθών.',
    ourServices: 'Οι Υπηρεσίες μας',
    shipReg: 'Εγγραφή Πλοίων',
    shipRegDesc: 'Πλήρεις υπηρεσίες εγγραφής για εμπορικά πλοία, σκάφη αναψυχής και διαχείριση ναυτιλιακού στόλου.',
    pierReg: 'Εγγραφή Λιμενικών Προβλητών',
    pierRegDesc: 'Επαγγελματική πιστοποίηση και εγγραφή λιμενικών προβλητών, αποβαθρών και ναυτιλιακής υποδομής.',
    whyChoose: 'Γιατί να μας Επιλέξετε',
    expertise: 'Εξειδικευμένη Γνώση',
    expertiseDesc: 'Δεκαετίες εμπειρίας στη ναυτιλιακή βιομηχανία και εξειδίκευση σε κανονιστική συμμόρφωση.',
    efficiency: 'Ταχεία Επεξεργασία',
    efficiencyDesc: 'Βελτιστοποιημένες διαδικασίες που εξασφαλίζουν γρήγορους χρόνους ολοκλήρωσης για όλες τις εγγραφές.',
    compliance: 'Πλήρης Συμμόρφωση',
    complianceDesc: 'Πλήρης τήρηση των διεθνών ναυτιλιακών νόμων και των ελληνικών κανονισμών.',
    support: 'Υποστήριξη 24/7',
    supportDesc: 'Εξυπηρέτηση πελατών όλο το εικοσιτετράωρο για όλες τις ανάγκες ναυτιλιακής εγγραφής.',
    viewShips: 'Εγγραφή Πλοίων',
    viewPiers: 'Εγγραφή Προβλητών',
    contactUs: 'Επικοινωνήστε μαζί μας',
    contactDesc: 'Επικοινωνήστε με την ομάδα μας για οποιαδήποτε ερώτηση σχετικά με τις υπηρεσίες εγγραφής πλοίων ή προβλητών.',
    name: 'Ονοματεπώνυμο',
    email: 'Διεύθυνση Email',
    phone: 'Τηλέφωνο',
    subject: 'Θέμα',
    message: 'Μήνυμα',
    send: 'Αποστολή Μηνύματος',
    ourLocation: 'Η Τοποθεσία μας',
    locationDesc: 'Επισκεφθείτε τα γραφεία μας στον Πειραιά για προσωπική συμβουλευτική και υπηρεσίες.',
    success: 'Σας ευχαριστούμε! Το μήνυμά σας στάλθηκε επιτυχώς.',
    namePlaceholder: 'Εισάγετε το ονοματεπώνυμό σας',
    emailPlaceholder: 'Εισάγετε τη διεύθυνση email σας',
    phonePlaceholder: 'Εισάγετε το τηλέφωνό σας',
    subjectPlaceholder: 'Εισάγετε το θέμα',
    messagePlaceholder: 'Εισάγετε το μήνυμά σας εδώ...',
  },
};

const Home = ({ language }: HomeProps) => {
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">{t.welcome}</h1>
            <p className="text-xl text-blue-200 mb-8">{t.subtitle}</p>
            <p className="text-lg leading-relaxed text-blue-100">{t.description}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">{t.ourServices}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link to="/naval" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-blue-200">
                <Ship className="w-16 h-16 text-blue-700 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{t.shipReg}</h3>
                <p className="text-blue-800">{t.shipRegDesc}</p>
                <span className="inline-block mt-4 text-blue-700 font-semibold group-hover:text-blue-900">
                  {t.viewShips} →
                </span>
              </div>
            </Link>

            <Link to="/piers" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-blue-200">
                <Anchor className="w-16 h-16 text-blue-700 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{t.pierReg}</h3>
                <p className="text-blue-800">{t.pierRegDesc}</p>
                <span className="inline-block mt-4 text-blue-700 font-semibold group-hover:text-blue-900">
                  {t.viewPiers} →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">{t.whyChoose}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 text-blue-700 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">{t.expertise}</h3>
              <p className="text-blue-800 text-sm">{t.expertiseDesc}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FileText className="w-12 h-12 text-blue-700 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">{t.efficiency}</h3>
              <p className="text-blue-800 text-sm">{t.efficiencyDesc}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Ship className="w-12 h-12 text-blue-700 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">{t.compliance}</h3>
              <p className="text-blue-800 text-sm">{t.complianceDesc}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Anchor className="w-12 h-12 text-blue-700 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">{t.support}</h3>
              <p className="text-blue-800 text-sm">{t.supportDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">{t.contactUs}</h2>
              <p className="text-gray-600 mb-8">{t.contactDesc}</p>

              {submitted && (
                <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-lg mb-6">
                  {t.success}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">
                    <span className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{t.name}</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">
                    <span className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{t.email}</span>
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">
                    <span className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{t.phone}</span>
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.phonePlaceholder}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">
                    <span className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.subject}</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.subjectPlaceholder}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">
                    <span className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.message}</span>
                    </span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 text-gray-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-800 hover:to-blue-900 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>{t.send}</span>
                </button>
              </form>
            </div>

            {/* Google Maps */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">{t.ourLocation}</h2>
              <p className="text-gray-600 mb-8">{t.locationDesc}</p>

              <div className="rounded-lg overflow-hidden shadow-lg border-2 border-blue-200">
                <iframe
                  src="https://maps.google.com/maps?q=38.829651,20.710351&hl=en&z=15&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hellenic Maritime Registry Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

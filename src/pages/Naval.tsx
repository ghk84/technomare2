import Gallery from '../components/Gallery';

interface NavalProps {
  language: 'en' | 'el';
}

const translations = {
  en: {
    title: 'Ship Registration Services',
    subtitle: 'Professional Maritime Vessel Registration',
    intro: 'Our ship registration services provide comprehensive solutions for vessel owners, operators, and maritime companies. We handle all types of vessels including cargo ships, container vessels, cruise ships, yachts, and commercial fleets.',
    services: 'Registration Services Include',
    service1: 'Commercial Vessel Registration',
    service2: 'Yacht and Pleasure Craft Registration',
    service3: 'Fleet Management Documentation',
    service4: 'International Flag Registration',
    service5: 'Ship Transfer and Re-registration',
    service6: 'Compliance and Safety Certification',
    requirements: 'Registration Requirements',
    req1: 'Vessel ownership documentation',
    req2: 'Technical specifications and measurements',
    req3: 'Safety and equipment certificates',
    req4: 'Insurance documentation',
    req5: 'Crew certifications and manning documents',
    gallery: 'Ship Registry Gallery',
  },
  el: {
    title: 'Υπηρεσίες Εγγραφής Πλοίων',
    subtitle: 'Επαγγελματική Εγγραφή Ναυτιλιακών Σκαφών',
    intro: 'Οι υπηρεσίες εγγραφής πλοίων μας παρέχουν ολοκληρωμένες λύσεις για ιδιοκτήτες σκαφών, διαχειριστές και ναυτιλιακές εταιρείες. Χειριζόμαστε όλους τους τύπους πλοίων συμπεριλαμβανομένων φορτηγών πλοίων, πλοίων εμπορευματοκιβωτίων, κρουαζιερόπλοιων, σκαφών αναψυχής και εμπορικών στόλων.',
    services: 'Οι Υπηρεσίες Εγγραφής Περιλαμβάνουν',
    service1: 'Εγγραφή Εμπορικών Πλοίων',
    service2: 'Εγγραφή Σκαφών Αναψυχής',
    service3: 'Τεκμηρίωση Διαχείρισης Στόλου',
    service4: 'Διεθνής Εγγραφή Σημαίας',
    service5: 'Μεταβίβαση και Επανεγγραφή Πλοίων',
    service6: 'Πιστοποίηση Συμμόρφωσης και Ασφάλειας',
    requirements: 'Απαιτήσεις Εγγραφής',
    req1: 'Τεκμηρίωση ιδιοκτησίας πλοίου',
    req2: 'Τεχνικές προδιαγραφές και μετρήσεις',
    req3: 'Πιστοποιητικά ασφάλειας και εξοπλισμού',
    req4: 'Ασφαλιστική τεκμηρίωση',
    req5: 'Πιστοποιητικά πληρώματος και έγγραφα στελέχωσης',
    gallery: 'Συλλογή Εγγεγραμμένων Πλοίων',
  },
};

// Ship images from the media fetch
const shipImages = [
  'https://images.pexels.com/photos/24896065/pexels-photo-24896065.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/15346128/pexels-photo-15346128.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/20045152/pexels-photo-20045152.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/32514815/pexels-photo-32514815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/11555089/pexels-photo-11555089.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/20884699/pexels-photo-20884699.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/21234960/pexels-photo-21234960.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/32307758/pexels-photo-32307758.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/24702865/pexels-photo-24702865.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/21830601/pexels-photo-21830601.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/30710213/pexels-photo-30710213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/15564489/pexels-photo-15564489.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/15241912/pexels-photo-15241912.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/15564127/pexels-photo-15564127.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/34679685/pexels-photo-34679685.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/18950179/pexels-photo-18950179.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/21945992/pexels-photo-21945992.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/15238324/pexels-photo-15238324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/12203186/pexels-photo-12203186.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/37880220/pexels-photo-37880220.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
];

const Naval = ({ language }: NavalProps) => {
  const t = translations[language];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-blue-200">{t.subtitle}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">{t.intro}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{t.services}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[t.service1, t.service2, t.service3, t.service4, t.service5, t.service6].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-700">
                <p className="text-blue-900 font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{t.requirements}</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {[t.req1, t.req2, t.req3, t.req4, t.req5].map((req, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 text-lg">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{t.gallery}</h2>
          <Gallery images={shipImages} altPrefix="Ship" />
        </div>
      </section>
    </div>
  );
};

export default Naval;

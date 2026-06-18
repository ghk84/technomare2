import Gallery from '../components/Gallery';

interface PiersProps {
  language: 'en' | 'el';
}

const translations = {
  en: {
    title: 'Harbor Pier Registration Services',
    subtitle: 'Professional Maritime Infrastructure Certification',
    intro: 'We provide comprehensive registration and certification services for harbor piers, docks, wharves, and maritime infrastructure. Our expertise ensures compliance with all safety regulations and international maritime standards.',
    services: 'Pier Registration Services Include',
    service1: 'Commercial Pier Registration',
    service2: 'Marina and Dock Certification',
    service3: 'Wharf and Berth Documentation',
    service4: 'Infrastructure Safety Assessment',
    service5: 'Maintenance Compliance Verification',
    service6: 'Port Facility Security Certification',
    requirements: 'Registration Requirements',
    req1: 'Ownership and lease documentation',
    req2: 'Structural engineering reports',
    req3: 'Safety and environmental compliance certificates',
    req4: 'Capacity and load specifications',
    req5: 'Emergency response and safety plans',
    gallery: 'Harbor Pier Registry Gallery',
  },
  el: {
    title: 'Υπηρεσίες Εγγραφής Λιμενικών Προβλητών',
    subtitle: 'Επαγγελματική Πιστοποίηση Ναυτιλιακής Υποδομής',
    intro: 'Παρέχουμε ολοκληρωμένες υπηρεσίες εγγραφής και πιστοποίησης για λιμενικούς προβλήτες, αποβάθρες, προκυμαίες και ναυτιλιακή υποδομή. Η τεχνογνωσία μας εξασφαλίζει συμμόρφωση με όλους τους κανονισμούς ασφαλείας και τα διεθνή ναυτιλιακά πρότυπα.',
    services: 'Οι Υπηρεσίες Εγγραφής Προβλητών Περιλαμβάνουν',
    service1: 'Εγγραφή Εμπορικών Προβλητών',
    service2: 'Πιστοποίηση Μαρίνων και Αποβαθρών',
    service3: 'Τεκμηρίωση Προκυμαιών και Θέσεων Ελλιμενισμού',
    service4: 'Αξιολόγηση Ασφάλειας Υποδομής',
    service5: 'Επαλήθευση Συμμόρφωσης Συντήρησης',
    service6: 'Πιστοποίηση Ασφάλειας Λιμενικών Εγκαταστάσεων',
    requirements: 'Απαιτήσεις Εγγραφής',
    req1: 'Τεκμηρίωση ιδιοκτησίας και μίσθωσης',
    req2: 'Δομικές μελέτες μηχανικών',
    req3: 'Πιστοποιητικά ασφάλειας και περιβαλλοντικής συμμόρφωσης',
    req4: 'Προδιαγραφές χωρητικότητας και φορτίων',
    req5: 'Σχέδια έκτακτης ανάγκης και ασφάλειας',
    gallery: 'Συλλογή Εγγεγραμμένων Λιμενικών Προβλητών',
  },
};

// Pier images from the media fetch
const pierImages = [
  'https://images.pexels.com/photos/9793490/pexels-photo-9793490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/10642986/pexels-photo-10642986.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/31248570/pexels-photo-31248570.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/8589388/pexels-photo-8589388.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/8589387/pexels-photo-8589387.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/36725722/pexels-photo-36725722.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/3471326/pexels-photo-3471326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/31301816/pexels-photo-31301816.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/6859079/pexels-photo-6859079.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/631049/pexels-photo-631049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/15298825/pexels-photo-15298825.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/27055613/pexels-photo-27055613.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/2091159/pexels-photo-2091159.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/28157386/pexels-photo-28157386.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/36099143/pexels-photo-36099143.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/24246926/pexels-photo-24246926.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/37914074/pexels-photo-37914074.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/24244234/pexels-photo-24244234.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/33512155/pexels-photo-33512155.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/12903635/pexels-photo-12903635.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
];

const Piers = ({ language }: PiersProps) => {
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
          <Gallery images={pierImages} altPrefix="Pier" />
        </div>
      </section>
    </div>
  );
};

export default Piers;

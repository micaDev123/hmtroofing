import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import EmergencyServices from '../components/contact/EmergencyServices';
const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <EmergencyServices />
    </div>
  );
};

export default Contact;

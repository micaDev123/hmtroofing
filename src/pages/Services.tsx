import ServicesHero from '../components/services/ServicesHero';
import CompleteRoofingSolutions from '../components/services/CompleteRoofingSolutions';
import RoofingMaterials from '../components/services/RoofingMaterials';
import DetailedRoofingSystems from '../components/services/DetailedRoofingSystems';
import ServiceProcess from '../components/services/ServiceProcess';
import ReadyToStart from '../components/services/ReadyToStart';

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <CompleteRoofingSolutions />
      <RoofingMaterials />
      <DetailedRoofingSystems />
      <ServiceProcess />
      <ReadyToStart />
    </div>
  );
};

export default Services;

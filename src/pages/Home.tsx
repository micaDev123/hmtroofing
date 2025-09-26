import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import CoreValues from '../components/home/CoreValues';
import RoofingSystems from '../components/home/RoofingSystems';
import Testimonials from '../components/home/Testimonials';
import EstimateForm from '../components/home/EstimateForm';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <CoreValues />
      <RoofingSystems />
      <Testimonials />
      <EstimateForm />
    </div>
  );
};

export default Home;

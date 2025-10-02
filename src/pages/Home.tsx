import Hero from '../components/home/Hero';
import CoreValues from '../components/home/CoreValues';
import VideoSection from '../components/home/VideoSection';
import Testimonials from '../components/home/Testimonials';
import CommunityInvolvement from '../components/home/CommunityInvolvement';
import EstimateForm from '../components/home/EstimateForm';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CoreValues />
      <VideoSection />
      {/* <RoofingSystems /> */}
      <Testimonials />
      <CommunityInvolvement />
      <EstimateForm />
    </div>
  );
};

export default Home;

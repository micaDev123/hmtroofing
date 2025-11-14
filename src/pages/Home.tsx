import Hero from '../components/home/Hero';
import CoreValues from '../components/home/CoreValues';
import VideoSection from '../components/home/VideoSection';
import GoogleReviews from '../components/home/GoogleReviews';
import CommunityInvolvement from '../components/home/CommunityInvolvement';
import EstimateForm from '../components/home/EstimateForm';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CoreValues />
      <CommunityInvolvement />
      <VideoSection />
      <GoogleReviews />
      <EstimateForm />
    </div>
  );
};

export default Home;

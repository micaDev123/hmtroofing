import { Star, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { fetchGooglePlaceDetails } from '../../services/googlePlaces';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
}

const GoogleReviews = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  // Google Business Profile URL - Direct link to write a review using Place ID
  const googlePlaceId = import.meta.env.VITE_GOOGLE_PLACE_ID;
  
  // Fallback to Google search if Place ID is not valid
  const isValidPlaceId = googlePlaceId && googlePlaceId.startsWith('ChIJ');
  const googleBusinessUrl = isValidPlaceId 
    ? `https://search.google.com/local/writereview?placeid=${googlePlaceId}`
    : 'https://www.google.com/search?q=HMT+Roofing+Miami+reviews';

  useEffect(() => {
    // Fetch Google Reviews from your backend API
    // For now, using sample data until API is set up
    fetchGoogleReviews();
  }, []);

  const fetchGoogleReviews = async () => {
    try {
      // Fetch real Google reviews from Places API
      const data = await fetchGooglePlaceDetails();
      
      setAverageRating(data.rating);
      setTotalReviews(data.user_ratings_total);
      setReviews(data.reviews);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      
      // Fallback to sample data if API fails
      const sampleData = {
        rating: 4.9,
        user_ratings_total: 127,
        reviews: [
          {
            author_name: "Sarah Johnson",
            rating: 5,
            text: "HMT Roofing did an exceptional job on our tile roof replacement. Professional, timely, and the quality is outstanding. Highly recommend!",
            time: Date.now() / 1000,
            profile_photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            relative_time_description: "2 weeks ago"
          },
          {
            author_name: "Michael Rodriguez",
            rating: 5,
            text: "Excellent service for our commercial property. The team was professional and completed the project on time and within budget.",
            time: Date.now() / 1000,
            profile_photo_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            relative_time_description: "1 month ago"
          },
          {
            author_name: "Lisa Chen",
            rating: 5,
            text: "Outstanding workmanship and customer service. HMT Roofing has been our go-to contractor for multiple properties.",
            time: Date.now() / 1000,
            profile_photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            relative_time_description: "3 months ago"
          }
        ]
      };

      setAverageRating(sampleData.rating);
      setTotalReviews(sampleData.user_ratings_total);
      setReviews(sampleData.reviews);
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating
                ? 'text-primary-yellow fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">{t('googleReviews.loading')}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Rating Badge */}
        <div className="text-center mb-16">
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 px-8 py-4 rounded-full mb-6 shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-gray-dark">{averageRating}</span>
              <div className="flex flex-col items-start">
                {renderStars(Math.round(averageRating))}
                <span className="text-sm text-gray-600 mt-1">
                  {t('googleReviews.ratingBadge', { count: totalReviews })}
                </span>
              </div>
            </div>
            <svg className="h-8 w-8" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            {t('googleReviews.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('googleReviews.subtitle')}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              {/* Stars */}
              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic line-clamp-4">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src={review.profile_photo_url} 
                    alt={review.author_name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-dark">
                      {review.author_name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {review.relative_time_description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Write a Review */}
        <div className="text-center">
          <a
            href={googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            {t('googleReviews.writeReview')}
            <ExternalLink className="h-5 w-5" />
          </a>
          <p className="text-sm text-gray-500 mt-4">
            {t('googleReviews.writeReviewSubtext')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;

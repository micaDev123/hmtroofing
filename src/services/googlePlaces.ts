interface PlaceReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
}

interface PlaceDetails {
  rating: number;
  user_ratings_total: number;
  reviews: PlaceReview[];
}

const GOOGLE_PLACES_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
const GOOGLE_PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;

/**
 * Fetches Google Place details including reviews
 * Uses the Google Places API (New) - Place Details endpoint
 */
export const fetchGooglePlaceDetails = async (): Promise<PlaceDetails> => {
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    throw new Error('Google Places API key or Place ID is not configured');
  }

  try {
    // Using the new Google Places API (v1)
    const url = `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': GOOGLE_PLACES_API_KEY,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch place details: ${response.statusText}`);
    }

    const data = await response.json();

    // Transform the response to match our interface
    return {
      rating: data.rating || 0,
      user_ratings_total: data.userRatingCount || 0,
      reviews: (data.reviews || []).map((review: any) => ({
        author_name: review.authorAttribution?.displayName || 'Anonymous',
        rating: review.rating || 0,
        text: review.text?.text || '',
        time: new Date(review.publishTime).getTime() / 1000,
        profile_photo_url: review.authorAttribution?.photoUri || '',
        relative_time_description: review.relativePublishTimeDescription || ''
      }))
    };
  } catch (error) {
    console.error('Error fetching Google Place details:', error);
    throw error;
  }
};

/**
 * Alternative method using CORS proxy if direct API calls are blocked
 * Note: For production, you should implement this on your backend server
 */
export const fetchGooglePlaceDetailsViaProxy = async (): Promise<PlaceDetails> => {
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    throw new Error('Google Places API key or Place ID is not configured');
  }

  try {
    // This is a placeholder - you'll need to implement your own backend endpoint
    const response = await fetch('/api/google-reviews', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch reviews: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching reviews via proxy:', error);
    throw error;
  }
};

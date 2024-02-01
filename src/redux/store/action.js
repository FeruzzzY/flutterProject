import {
  CATEGORIES,
  LOADING,
  VILLAGES,
  VILLAGE_REVIEWS,
  ADD_VILLAGE_REVIEWS,
  HOTEL_REVIEWS,
  ADD_HOTEL_REVIEWS,
  RESTAURANT_REVIEWS,
  ADD_RESTAURANT_REVIEWS,
  FAMOUS_REVIEWS,
  ADD_FAMOUS_REVIEWS,
  TOUR_REVIEWS,
  ADD_TOUR_REVIEWS,
  CRAFT_REVIEWS,
  ADD_CRAFT_REVIEWS,
  SET_LAN,
  STATIC_WORDS,
} from './types';

export const setVillages = (villages) => {
  return {
    type: VILLAGES,
    villages,
  };
};

export const setVillageReviews = (village_reviews) => {
  return {
    type: VILLAGE_REVIEWS,
    village_reviews,
  };
};
export const setNewVillageReview = (new_review) => {
  return {
    type: ADD_VILLAGE_REVIEWS,
    new_review,
  };
};

export const setHotelReviews = (hotel_reviews) => {
  return {
    type: HOTEL_REVIEWS,
    hotel_reviews,
  };
};
export const setNewHotelReview = (new_review) => {
  return {
    type: ADD_HOTEL_REVIEWS,
    new_review,
  };
};

export const setRestaurantReviews = (restaurant_reviews) => {
  return {
    type: RESTAURANT_REVIEWS,
    restaurant_reviews,
  };
};
export const setNewRestaurantReview = (new_review) => {
  return {
    type: ADD_RESTAURANT_REVIEWS,
    new_review,
  };
};

export const setFamousReviews = (famous_reviews) => {
  return {
    type: FAMOUS_REVIEWS,
    famous_reviews,
  };
};
export const setNewFamousReview = (new_review) => {
  return {
    type: ADD_FAMOUS_REVIEWS,
    new_review,
  };
};

export const setTourReviews = (tour_reviews) => {
  return {
    type: TOUR_REVIEWS,
    tour_reviews,
  };
};
export const setNewTourReview = (new_review) => {
  return {
    type: ADD_TOUR_REVIEWS,
    new_review,
  };
};

export const setCraftReviews = (craft_reviews) => {
  return {
    type: CRAFT_REVIEWS,
    craft_reviews,
  };
};
export const setNewCraftReview = (new_review) => {
  return {
    type: ADD_CRAFT_REVIEWS,
    new_review,
  };
};

export const setCategories = (categories) => {
  return {
    type: CATEGORIES,
    categories,
  };
};

export const setLoading = (loading) => {
  return {
    type: LOADING,
    loading,
  };
};

export const setLan = (lan) => ({
  type: SET_LAN,
  lan,
});

export const setStaticWord = (static_words) => {
  return {
    type: STATIC_WORDS,
    static_words,
  };
};

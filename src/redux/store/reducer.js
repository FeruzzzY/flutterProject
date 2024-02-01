import {
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
  CATEGORIES,
  LOADING,
  SET_LAN,
  STATIC_WORDS,
} from './types';

const initialState = {
  categories: [],
  static_words: [],
  villages: [],
  village_reviews: [],
  hotel_reviews: [],
  restaurant_reviews: [],
  famous_reviews: [],
  tour_reviews: [],
  craft_reviews: [],
  loading: false,
  lan: 'UZ',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VILLAGES:
      return {
        ...state,
        villages: action.villages,
      };
    case VILLAGE_REVIEWS:
      return {
        ...state,
        village_reviews: action.village_reviews,
      };
    case ADD_VILLAGE_REVIEWS:
      return {
        ...state,
        village_reviews: [action.new_review, ...state.village_reviews],
      };
    case HOTEL_REVIEWS:
      return {
        ...state,
        hotel_reviews: action.hotel_reviews,
      };
    case ADD_HOTEL_REVIEWS:
      return {
        ...state,
        hotel_reviews: [action.new_review, ...state.hotel_reviews],
      };
    case RESTAURANT_REVIEWS:
      return {
        ...state,
        restaurant_reviews: action.restaurant_reviews,
      };
    case ADD_RESTAURANT_REVIEWS:
      return {
        ...state,
        restaurant_reviews: [action.new_review, ...state.restaurant_reviews],
      };
    case FAMOUS_REVIEWS:
      return {
        ...state,
        famous_reviews: action.famous_reviews,
      };
    case ADD_FAMOUS_REVIEWS:
      return {
        ...state,
        famous_reviews: [action.new_review, ...state.famous_reviews],
      };
    case TOUR_REVIEWS:
      return {
        ...state,
        tour_reviews: action.tour_reviews,
      };
    case ADD_TOUR_REVIEWS:
      return {
        ...state,
        tour_reviews: [action.new_review, ...state.tour_reviews],
      };
    case CRAFT_REVIEWS:
      return {
        ...state,
        craft_reviews: action.craft_reviews,
      };
    case ADD_CRAFT_REVIEWS:
      return {
        ...state,
        craft_reviews: [action.new_review, ...state.craft_reviews],
      };
    case CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_LAN:
      return {
        ...state,
        lan: action.lan,
      };
    case STATIC_WORDS:
      return {
        ...state,
        static_words: action.static_words,
      };
    default:
      return state;
  }
};
export default reducer;

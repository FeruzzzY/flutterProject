import { COURSES_LIST, CATEGORIES, LOADING, SET_LAN } from "./types";

const initialState = {
  courses_list: [],
  categories: [],
  loading: false,
  lan: "UZ",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSES_LIST:
      return {
        ...state,
        courses_list: action.courses_list,
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
    default:
      return state;
  }
};
export default reducer;

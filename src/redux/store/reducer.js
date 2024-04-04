import { GET_USER, COURSES_LIST, CATEGORIES, LOADING, SET_LAN } from "./types";

const initialState = {
  courses_list: [],
  categories: [],
  get_user: {},
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
    case GET_USER:
      return {
        ...state,
        get_user: action.get_user,
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

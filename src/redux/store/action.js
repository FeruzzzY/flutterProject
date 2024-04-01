import { COURSES_LIST, CATEGORIES, LOADING, SET_LAN } from "./types";

export const setCoursesList = (courses_list) => {
  return {
    type: COURSES_LIST,
    courses_list,
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

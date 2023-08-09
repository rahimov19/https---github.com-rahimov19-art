export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const GET_POSTS = "GET_POSTS";
export const SAVE_USERS = "SAVE_USERS";
export const SAVE_USER = "SAVE_USER";
export const SWITCH_LANGUAGE = "SWITCH_LANGUAGE";
export const SAVE_LANGUAGES = "SAVE_LANGUAGES";
export const FETCH_NEWS = "FETCH_NEWS";

// const beUrl = "http://localhost:3001";

export const getPostsAction = (posts) => {
  return {
    type: GET_POSTS,
    payload: posts,
  };
};

export const switchLanguageAction = (language) => {
  return {
    type: SWITCH_LANGUAGE,
    payload: language,
  };
};
export const saveLanguagesAction = (language) => {
  return {
    type: SAVE_LANGUAGES,
    payload: language,
  };
};
export const saveUserAction = (user) => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};

export const saveUsersAction = (users) => {
  return {
    type: SAVE_USERS,
    payload: users,
  };
};

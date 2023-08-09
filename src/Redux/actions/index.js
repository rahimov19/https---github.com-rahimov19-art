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
export const fetchAllPostsAction = (posts) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch(getPostsAction(data.reverse()));
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAllUserAction = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch(saveUsersAction(data));
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveUsersAction = (users) => {
  return {
    type: SAVE_USERS,
    payload: users,
  };
};

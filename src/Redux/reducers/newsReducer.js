import { GET_POSTS } from "../actions";

const initialState = {
  posts: {},
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default newsReducer;

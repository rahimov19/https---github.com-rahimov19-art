import { SAVE_USERS } from "../actions";
import { SAVE_USER } from "../actions";

const initialState = {
  users: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SAVE_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

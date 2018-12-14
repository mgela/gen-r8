import { combineReducers } from "redux";

const initialState = {
  user: "Marc",
  tags: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "TRYING":
      return {
        user: action.name
      };
      break;
    default:
      return state;
  }
};

export default combineReducers({
  user
});

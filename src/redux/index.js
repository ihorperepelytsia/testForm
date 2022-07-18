import { combineReducers } from "redux";
import { types } from "./user-types";

const users = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    default:
      return state;
  }
};
const autocompleteAddress = (state = [], { type, payload }) => {
  switch (type) {
    case types.AUTOCOMPLETE:
      return [...payload];
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  users,
  autocompleteAddress,
});

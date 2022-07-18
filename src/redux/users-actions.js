import { types } from "./users-types.js";

export const addUsers = (users) => ({
  type: types.ADD,
  payload: users,
});

export const autocompleteAddress = (address) => ({
  type: types.AUTOCOMPLETE,
  payload: address,
});

import axios from "axios";
import { autocompleteAddress } from "../users-actions";

axios.defaults.baseURL =
  "https://autocomplete.search.hereapi.com/v1/autocomplete?languages=en-US";
const API_KEY = "tfZxqmeHbSedblXa7CZ3YaKrRcR6IFDlzEae0uMfwYo";

export const getAutocompleteAddress = (value) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`&q=${value}&apiKey=${API_KEY}`);
      return dispatch(autocompleteAddress(res.data.items));
    } catch (error) {
      console.log(error);
    }
  };
};

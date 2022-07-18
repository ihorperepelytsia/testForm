import { Input, Label, Text } from "../Form/Form.styled";
import { useSelector, useDispatch } from "react-redux";
import { getAutocompleteAddress } from "../../redux/asyncActions/getAutocompleteAddress";
var _ = require("lodash");

export const Address = ({ label, register, required, errors }) => {
  const dispatch = useDispatch();
  const searchAddress = useSelector((state) => state.autocompleteAddress);

  const handleChange = _.debounce((e) => {
    if (e.target.value.length > 2) {
      return dispatch(getAutocompleteAddress(e.target.value));
    }
  }, 500);
  return (
    <>
      <Label>{label}</Label>
      <Input
        border={errors.address?.message ? true : false}
        type="text"
        list="address"
        placeholder={label}
        {...register("address", {
          required,
          onChange: handleChange,
        })}
      />

      {searchAddress.length > 0 && (
        <datalist id="address">
          {searchAddress.map((el) => (
            <option key={el.id} value={el.address.label}></option>
          ))}
        </datalist>
      )}

      <Text>{errors.address?.message}</Text>
    </>
  );
};

import { Input, Label, Text } from "../Form/Form.styled";
import { useEffect } from "react";
import { forbiddenSymbol } from "../../utils/forbiddenSymbol";
export const PhoneNumber = ({ label, register, required, errors }) => {
  useEffect(() => {
    window.addEventListener("keypress", forbiddenSymbol);

    return () => {
      window.removeEventListener("keypress", forbiddenSymbol);
    };
  }, []);
  return (
    <>
      <Label>{label}</Label>
      <Input
        border={errors.phoneNumber?.message ? true : false}
        type="number"
        placeholder={label}
        {...register("phoneNumber", {
          required,
          pattern: {
            value: "^[ 0-9]+$",
            message: "Only numbers",
          },
          minLength: {
            value: 7,
            message: "Min length 7",
          },
        })}
      />
      <Text>{errors.phoneNumber?.message}</Text>
    </>
  );
};

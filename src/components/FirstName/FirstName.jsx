import { Input, Label, Text } from "../Form/Form.styled";
export const FirstName = ({ label, register, required, errors }) => {
  return (
    <>
      <Label>{label}</Label>
      <Input
        border={errors.firstName?.message ? true : false}
        type="text"
        name="input"
        placeholder={label}
        {...register("firstName", {
          required,
          pattern: {
            value: /[A-Za-z]/,
            message: "Start with a latter",
          },
        })}
      />
      <Text>{errors.firstName?.message}</Text>
    </>
  );
};

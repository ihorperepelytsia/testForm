import { Input, Label, Text } from "../Form/Form.styled";
export const LastName = ({ label, register, required, pattern, errors }) => {
  return (
    <>
      <Label>{label}</Label>
      <Input
        border={errors.lastName?.message ? true : false}
        type="text"
        placeholder={label}
        {...register("lastName", {
          required,
          pattern: {
            value: /[A-Za-z]/,
            message: "Start with a latter",
          },
        })}
      />
      <Text>{errors.lastName?.message}</Text>
    </>
  );
};

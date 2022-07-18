import { Input, Label, Text } from "../Form/Form.styled";

export const Email = ({ label, register, required, errors }) => {
  return (
    <>
      <Label>{label}</Label>
      <Input
        border={errors.email?.message ? true : false}
        type="text"
        placeholder={label}
        {...register("email", {
          required,
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Invalid to email",
          },
        })}
      />
      <Text>{errors.email?.message}</Text>
    </>
  );
};

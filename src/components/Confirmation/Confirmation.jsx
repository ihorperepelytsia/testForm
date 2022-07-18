import { Label, Text } from "../Form/Form.styled";
export const Confirmation = ({ label, register, required, errors }) => {
  return (
    <>
      <input
        type="checkbox"
        id="confirmation"
        {...register("confirmation", { required })}
      />
      <Label htmlFor="confirmation">{label}</Label>
      <Text>{errors.confirmation?.message}</Text>
    </>
  );
};

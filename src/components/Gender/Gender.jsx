import { Label, Select, Text } from "../Form/Form.styled";

export const Gender = ({ label, register, required, errors }) => {
  return (
    <>
      <Label>{label}</Label>
      <Select
        border={errors.gender?.message ? true : false}
        name="Gender"
        {...register("gender", { required })}
      >
        <option value="" hidden>
          Gender
        </option>
        <option value="female">Female</option>
        <option value="male">Male</option>undefind
      </Select>
      <Text>{errors.gender?.message}</Text>
    </>
  );
};

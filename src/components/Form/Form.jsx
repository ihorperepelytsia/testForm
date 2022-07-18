import { useForm } from "react-hook-form";
import { FirstName } from "../FirstName/FirstName";
import { LastName } from "../LastName/LastName";
import { PhoneNumber } from "../PhoneNumber/PhoneNumber";
import { Email } from "../Email/Email";
import { Gender } from "../Gender/Gender";
import { Address } from "../Address/Address";
import { Confirmation } from "../Confirmation/Confirmation";
import { ButtonRegister } from "../ButtonRegister/ButtonRegister";
import { UsersTable } from "../UsersTable/UsersTable";
import { FormData, Title } from "./Form.styled";
import { useDispatch } from "react-redux";
import { addUsers } from "../../redux/users-actions";

export const Form = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    reset();
    dispatch(addUsers(data));
  };
  return (
    <>
      <FormData onSubmit={handleSubmit(onSubmit)}>
        <Title>Registration form</Title>

        <FirstName
          label="First Name"
          register={register}
          required="This is required"
          errors={errors}
          minLength
        />
        <LastName
          label="Last Name"
          register={register}
          required="This is required"
          errors={errors}
        />
        <PhoneNumber
          label="Phone Number"
          register={register}
          required="This is required"
          errors={errors}
        />
        <Email
          label="Email"
          register={register}
          required="This is required"
          errors={errors}
        />
        <Gender
          label="Gender"
          register={register}
          required="This is required"
          errors={errors}
        />
        <Address
          label="Address"
          register={register}
          required="This is required"
          errors={errors}
        />
        <Confirmation
          label="Confirmation of data use?"
          register={register}
          required="This is required"
          errors={errors}
        />
        <ButtonRegister />
      </FormData>
      <UsersTable />
    </>
  );
};

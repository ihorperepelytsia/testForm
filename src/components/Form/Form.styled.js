import styled from "styled-components";

export const FormData = styled.form`
  width: 300px;
  margin: 0 auto 30px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
`;
export const Title = styled.h3`
  width: 100%;
  font-size: 24px;
  margin: 0 0 20px 0;
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  margin: 6px 0 4px;
  border: ${(props) =>
    props.border ? "2px solid red" : "2px solid lightgrey"};

  outline: none;
  border-radius: 4px;
  padding: 6px;
  appearance: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Label = styled.label`
  font-size: 16px;
`;
export const Select = styled.select`
  display: block;
  margin: 6px auto 4px;
  width: 32%;
  text-align: center;
  padding: 2px;
  border: ${(props) =>
    props.border ? "2px solid red" : "2px solid lightgrey"};
  border-radius: 4px;
  font-size: 14px;
`;

export const InputSubmit = styled.input`
  display: block;
  margin: 12px auto 0;
  padding: 14px 24px;
  border: 1px solid grey;
  cursor: pointer;
  transition: all linear 400ms;
  background-color: lightgrey;
  border-radius: 6px;

  &:hover {
    background-color: grey;
  }
`;

export const Text = styled.p`
  height: 20px;
  margin: 0;
  text-align: start;
  color: red;
`;

import styled from 'styled-components';
import { Field } from 'formik';

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 60px;

  color: #121417;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  background-color: #f4c550;
  border-radius: 12px;
  border: none;
  &:hover,
  &:focus {
    background-color: #f4c8ba;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 54px;
  margin-bottom: 16px;
  padding-left: 16px;

  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  outline: none;

  &::placeholder {
    font-size: 16px;
    line-height: 1, 38;
    color: #121417;
  }
`;

export const Wrapper = styled.div`
  // position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  line-height: 1, 38;
  color: #121417;
  margin-bottom: 20px;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  line-height: 1, 38;
  color: #121417;
`;

export const Radio = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const ButtonClose = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const Svg = styled.svg`
  fill: black;
`;

export const RadioLabel = styled.label``;
export const FieldFormic = styled(Field)`
  margin-right: 10px;
`;
export const TextRadio = styled.div`
  margin-top: 10px;
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 10px;
`;

import styled from 'styled-components';

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

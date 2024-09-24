import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;
export const Button = styled.button`
  width: 30px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid blue;
  margin-right: 10px;
  &.active {
    background-color: blue;
    color: white;
  }
  &:hover {
    background-color: darkgray;
  }
`;

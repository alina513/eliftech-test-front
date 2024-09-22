import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 300px;
  height: 60px;

  color: #121417;
  font-size: 18px;
  font-weight: 700;
  background-color: #f4c550;
  text-decoration: none;

  border-radius: 12px;
  &:hover,
  &:focus {
    background-color: #f4c8ba;
  }
`;
export const Container = styled.div`
  display: block;
`;

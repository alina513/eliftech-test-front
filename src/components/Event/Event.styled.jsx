import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid green;
  border-radius: 12px;
  padding: 5px 10px;
`;

export const Title = styled.h2`
  font-size: 16px;
  margin-top: 0px;
`;
export const Date = styled.p`
  font-size: 16px;
  margin-top: 10px;
  font-weight: 600;
`;

export const Organizer = styled.p`
  font-size: 16px;
  margin-top: 10px;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 12px;
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 0px;
`;

export const View = styled(Link)`
display: flex;
font-size: 12px;
margin-top: 5px;
padding: 0px 0px; 
cursor: pointer;
color: blue;
margin- left: 3px;
&:hover, : focus {color: red};
text-decoration: none;
`;
export const Register = styled.button`
display: flex;
font-size: 12px;
margin-top: 5px;
padding: 0px 0px; 
cursor: pointer;
color: blue;
margin- left: 3px;
&:hover, : focus {color: red;};
background-color: white;
border: none;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

import { useState } from 'react';
import { ModalRegisration } from '../Modal/Modal';
import {
  Title,
  Container,
  View,
  Register,
  Description,
  Wrapper,
} from './Event.styled';
export default function Event({ event }) {
  const [isOpenModalRegistration, setIsOpenModalRegistration] = useState(false);

  return (
    <Container>
      <Title>{event.name}</Title>
      <Description>{event.description}</Description>
      <Wrapper>
        <Register
          onClick={() => {
            setIsOpenModalRegistration(true);
          }}
        >
          Register
        </Register>
        <View to={`/${event._id}`}>View</View>
      </Wrapper>
      <ModalRegisration
        event_id={event._id}
        isOpenModalRegistration={isOpenModalRegistration}
        setIsOpenModalRegistration={setIsOpenModalRegistration}
      />
    </Container>
  );
}

import { Title, Container, Description } from './Participant.styled';
export default function Participant({ participant }) {
  return (
    <Container>
      <Title>{participant.fullname}</Title>
      <Description>{participant.email}</Description>
    </Container>
  );
}

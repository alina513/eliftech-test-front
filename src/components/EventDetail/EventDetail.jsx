import ListParticipant from '../ListPartisipants/ListParticipants';
import { Button, Container } from './EventDetail.styled';

export default function EventDetail({ participants }) {
  return (
    <>
      {participants.length > 0 && (
        <Container>
          {' '}
          <ListParticipant participants={participants} />
          <Button to="/">Go to events</Button>
        </Container>
      )}
    </>
  );
}

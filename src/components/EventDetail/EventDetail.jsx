import ListParticipant from '../ListPartisipants/ListParticipants';
import { Button, Container, Wrapper } from './EventDetail.styled';
import { Filter } from '../FilterParticipants/FilterParticipants';

export default function EventDetail({
  participants,
  onChangeInputParticipentsHandler,
}) {
  return (
    <Wrapper>
      <Filter
        onChangeInputParticipentsHandler={onChangeInputParticipentsHandler}
      ></Filter>
      {participants.length > 0 && (
        <Container>
          <ListParticipant participants={participants} />
          <Button to="/">Go to events</Button>
        </Container>
      )}
    </Wrapper>
  );
}

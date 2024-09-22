import Participant from '../Participants/Participant';
import { ListPart } from './ListParticipants.styled';
const ListParticipant = ({ participants }) => {
  return (
    <>
      <ListPart>
        {participants.map(participant => {
          return (
            <Participant key={participant._id} participant={participant} />
          );
        })}
      </ListPart>
    </>
  );
};

export default ListParticipant;

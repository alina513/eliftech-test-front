import Event from '../Event/Event';
import { ListEvent } from './List.styled';
const List = ({ events }) => {
  return (
    <>
      <ListEvent>
        {events.map(event => {
          return <Event key={event._id} event={event} />;
        })}
      </ListEvent>
    </>
  );
};

export default List;

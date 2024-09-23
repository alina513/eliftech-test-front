import List from '../List/List';
import { Container } from './Home.styled';
import { Filter } from '../FilterMainPage/FilterMainPage';

export default function Home({ events, onChangeInputHandler }) {
  return (
    <Container>
      <Filter onChangeInputHandler={onChangeInputHandler} events={events}></Filter>
      {events.length > 0 ? <List events={events}/> : <p>No events found</p>}
    </Container>
  );
}

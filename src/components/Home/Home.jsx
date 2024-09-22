import List from '../List/List';
import { Container } from './Home.styled';

export default function Home({ events }) {
  return <Container>{events.length > 0 && <List events={events} />}</Container>;
}

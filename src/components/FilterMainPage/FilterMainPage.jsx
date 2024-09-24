import { Title, Label, Input, Container } from './FilterMainPage.styled';
export const Filter = ({ onChangeInputHandler, event }) => {
  return (
    <Container>
      <Title>Sort events</Title>
      <Label>
        by title<Input onChange={e => onChangeInputHandler(e, 'name')}></Input>
      </Label>
      <Label>
        by date<Input onChange={e => onChangeInputHandler(e, 'date')}></Input>
      </Label>
      <Label>
        by organizer
        <Input onChange={e => onChangeInputHandler(e, 'organizer')}></Input>
      </Label>
    </Container>
  );
};

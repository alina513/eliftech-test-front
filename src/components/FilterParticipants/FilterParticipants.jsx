import { Container, Title, Label,Input } from "./FilterParticipants.styled"
export const Filter = ({onChangeInputParticipentsHandler}) => {
    return(
        <Container>
        <Title>Sort participants</Title>
      <Label>
        by fullname<Input onChange={(e) => onChangeInputParticipentsHandler(e, 'fullname')}></Input>
      </Label>
      <Label>
        by email<Input onChange={(e) => onChangeInputParticipentsHandler(e, 'email')}></Input>
      </Label>
        </Container>
    )
}
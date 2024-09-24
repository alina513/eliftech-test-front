import { Container, Button } from './Pagination.styled';
export const Pagination = ({ pageNumbers, paginate, currentPage }) => {
  return (
    <Container>
      {pageNumbers.map(number => (
        <Button
          key={number}
          onClick={() => paginate(number)}
          className={number === currentPage ? 'active' : ''}
        >
          {number}
        </Button>
      ))}
    </Container>
  );
};

import styled from 'styled-components';

const Container = styled.li`
  margin: 20px 50px;
  border: 1px solid black;
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ active, theme }) => active && theme.colors.main};
  color: ${({ active }) => active && 'white'};
`;

const ListTitle = ({ title, active, setSelected }) => {
  return (
    <Container active={active} onClick={() => setSelected(title)}>
      {title}
    </Container>
  );
};

export default ListTitle;

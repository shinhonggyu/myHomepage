import styled from 'styled-components';
import Product from './Product';

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

const Li = styled.li`
  margin: 20px 50px;
  border: 1px solid black;
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ active, theme }) => active && theme.colors.main};
  color: ${({ active }) => active && 'white'};
`;

const Projects = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
`;

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <Title>Projects</Title>
      <Ul>
        <Li active>STATIC</Li>
        <Li>REACT</Li>
        <Li>MERN</Li>
      </Ul>
      <Projects>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Projects>
    </Container>
  );
};

export default Portfolio;

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListTitle from './ListTitle';
import Product from './Product';
import { staticPortfolio, mernPortfolio, reactPortfolio } from '../data';

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

const Projects = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
`;

const titleData = [
  {
    id: 'STATIC',
    title: 'STATIC',
  },
  {
    id: 'REACT',
    title: 'REACT',
  },
  {
    id: 'MERN',
    title: 'MERN',
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState('STATIC');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (selected === 'STATIC') {
      setData(staticPortfolio);
    } else if (selected === 'REACT') {
      setData(reactPortfolio);
    } else {
      setData(mernPortfolio);
    }
  }, [selected]);

  return (
    <Container id="portfolio">
      <Title>Projects</Title>
      <Ul>
        {titleData.map((item) => (
          <ListTitle
            title={item.title}
            key={item.id}
            active={item.id === selected}
            setSelected={setSelected}
          />
        ))}
      </Ul>
      <Projects>
        {data.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Projects>
    </Container>
  );
};

export default Portfolio;

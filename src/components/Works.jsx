import { useState } from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import Blog from '../img/mern/blog.png';

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Slider = styled.div`
  width: 700px;
  height: 350px;
  overflow: hidden;
  -webkit-box-shadow: -2px 0px 10px 0px rgba(0, 0, 0, 0.7);
  box-shadow: -2px 0px 10px 0px rgba(0, 0, 0, 0.7);
  border-radius: 20px;
`;

const SlideWrapper = styled.div`
  display: flex;
  height: 100%;
  width: max-content;
  transition: all 1s ease;
  /* transform: ${({ slideCounter }) =>
    slideCounter === 0
      ? 'translateX(0px)'
      : slideCounter === 1
      ? 'translateX(-700px)'
      : 'translateX(-1400px)'}; */
  transform: ${({ slideCounter }) => `translateX(-${slideCounter * 700}px)`};
`;

const slideData = [
  {
    id: 1,
    title: 'BLOG',
    img: Blog,
  },
  {
    id: 2,
    title: 'NETFLIX',
  },
  {
    id: 3,
    title: 'E-COMMERCE',
  },
];

const Works = () => {
  const [slideCounter, setSlideCounter] = useState(0);

  const slideClick = (direction) => {
    if (direction === 'left') {
      setSlideCounter(slideCounter === 0 ? 0 : slideCounter - 1);
    } else {
      setSlideCounter(slideCounter === 2 ? 2 : slideCounter + 1);
    }
  };

  return (
    <Container id="works">
      <Slider>
        <SlideWrapper slideCounter={slideCounter}>
          {slideData.map((item) => (
            <Slide item={item} key={item.id} />
          ))}
        </SlideWrapper>
      </Slider>
      <i
        onClick={() => slideClick('left')}
        style={{
          color: 'black',
          position: 'absolute',
          left: '200px',
          cursor: 'pointer',
          display: `${slideCounter === 0 ? 'none' : 'flex'}`,
        }}
        className="fas fa-chevron-left fa-3x"
      ></i>
      <i
        onClick={() => slideClick('right')}
        style={{
          color: 'black',
          position: 'absolute',
          right: '200px',
          cursor: 'pointer',
          display: `${slideCounter === 2 ? 'none' : 'flex'}`,
        }}
        className="fas fa-chevron-right fa-3x"
      ></i>
    </Container>
  );
};

export default Works;

import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 700px;
  background-color: white;
  display: flex;
`;

const Left = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 400;
`;

const Right = styled.div`
  flex: 7;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  transition: transform 1s ease;

  &:hover {
    transform: translateY(-15%);
  }
`;

const Slide = ({ item, img }) => {
  return (
    <Container>
      <Left>
        <Title>{item.title}</Title>
      </Left>
      <Right>
        <Image src={item.img} />
      </Right>
    </Container>
  );
};

export default Slide;

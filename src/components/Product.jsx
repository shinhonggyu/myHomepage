import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  transition: all 7s ease;
`;

const Container = styled.div`
  width: 340px;
  height: 260px;
  overflow: hidden;
  cursor: pointer;
  margin: 5px 20px;
  /* border: 2px solid rgb(243, 242, 242); */
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px 10px 0 0;
  overflow: hidden;

  &:hover ${Image} {
    transform: translateY(-100%);
  }
`;

const Browser = styled.div`
  height: 20px;
  background-color: rgb(243, 242, 242);
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
`;

const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 3px;
  background-color: white;
  border: 0.1px solid rgba(0, 0, 0, 0.5);
`;

const Link = styled.a`
  cursor: pointer;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Browser>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
      </Browser>
      <Link href={item.link} target="_blank">
        <Image src={item.img} />
      </Link>
    </Container>
  );
};

export default Product;

import styled from 'styled-components';

const Container = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid #999;
  background-color: white;
  position: fixed;
  top: 80px;
  right: 10px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 15px;
  height: 15px;
`;

const Button = styled.div`
  width: 25px;
  height: 25px;
  background-color: #999;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  right: 0;
`;

const Toggle = () => {
  return (
    <Container>
      <Image src="assets/sun.png" />
      <Image src="assets/moon.png" />
      <Button />
    </Container>
  );
};

export default Toggle;

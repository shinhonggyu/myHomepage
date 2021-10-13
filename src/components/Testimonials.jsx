import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

const Card = styled.div`
  width: 20%;
  height: 80%;
  border-radius: 20px;
  box-shadow: 0 10px 30px #555;
  transform: rotateX(60deg) scale(0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  transition: all 0.5s ease;

  :hover {
    transform: rotateX(0deg) scale(1) translateY(10px);
  }
`;

const Title = styled.h3`
  color: #555;
  font-weight: 900;
`;

const Image = styled.img`
  width: 100%;
  height: 40%;
`;

const Desc = styled.span``;

const Testimonials = () => {
  return (
    <Container id="testimonials">
      <Card>
        <Title>CREATIVITY</Title>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQViPB34k3mP1TDLjDa7z1_8D8-wSFmiyn9dw&usqp=CAU" />
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          officia illo necessitatibus pariatur itaque amet,
        </Desc>
      </Card>
      <Card>
        <Title>CREATIVITY</Title>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH1zby5-lcJGtJoudXpiJcuAGrdlnCKhhkw&usqp=CAU" />
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          officia illo necessitatibus pariatur itaque amet,
        </Desc>
      </Card>
      <Card>
        <Title>CREATIVITY</Title>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFym1vBcvVd-ganhbh_OWQq38fRK4Z397_hw&usqp=CAU" />
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          officia illo necessitatibus pariatur itaque amet,
        </Desc>
      </Card>
    </Container>
  );
};

export default Testimonials;

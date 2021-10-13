import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Wrapper = styled.div`
  padding: 50px;
  width: 70%;
  height: 30%;
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Name = styled.h1`
  font-size: 60px;
  margin-bottom: 10px;
`;

const Span = styled.span`
  font-size: inherit;
  color: crimson;
`;

const Title = styled.div`
  height: 50px;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  height: 100%;
  animation: move 10s ease-in-out infinite alternate;

  @keyframes move {
    33% {
      transform: translateY(-50px);
    }
    66% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(-150px);
    }
  }
`;

const TitleItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #59b256;
`;

const Link = styled.a`
  position: absolute;
  bottom: 10px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: coral;
  border-radius: 50%;
  color: white;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    background-color: coral;
    animation: arrow 1.2s ease infinite;

    @keyframes arrow {
      to {
        transform: scale(1.5);
        opacity: 0;
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  position: relative;
`;

const Bg = styled.div`
  background-color: #59b256;
  clip-path: polygon(100% 0%, 100% 49%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

const Image = styled.img`
  width: 80%;
  height: 100%;
  object-fit: cover;
  margin-left: 100px;
  position: absolute;
`;

const Intro = () => {
  return (
    <Container id="intro">
      <Left>
        <Wrapper>
          <SubTitle>Welcome to my</SubTitle>
          <Name>Shin's Homepage</Name>
          <Title>
            <TitleWrapper>
              <TitleItem>Web Developer.</TitleItem>
              <TitleItem>Software Engineer.</TitleItem>
              <TitleItem>UI/UX Designer.</TitleItem>
              <TitleItem>I'm job hunting.</TitleItem>
            </TitleWrapper>
          </Title>
        </Wrapper>
        <Link href="#works">
          <i
            style={{ fontSize: '30px', zIndex: '1' }}
            className="fas fa-angle-down"
          ></i>
        </Link>
      </Left>
      <Right>
        <Bg />
        <Image src="assets/me.png" />
      </Right>
    </Container>
  );
};

export default Intro;

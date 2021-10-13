import styled from 'styled-components';
import { Person, Mail, GitHub } from '@material-ui/icons';

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ toggle, theme }) =>
    toggle ? theme.colors.main : 'white'};
  color: ${({ toggle }) => (toggle ? 'white' : 'black')};
  position: fixed;
  top: 0;
  z-index: 999;
  transition: all 1s ease;
`;

const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 40px;
  font-weight: 700;
  color: inherit;
  margin-right: 40px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const Span = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

const Link = styled.a`
  cursor: pointer;
`;

const Right = styled.div``;

const Menu = styled.div`
  width: 32px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  > * {
    background-color: ${({ toggle }) => (toggle ? 'white' : 'black')};
    transition: all 1s ease;
  }
`;

const MenuSpan = styled.span`
  width: 100%;
  height: 3px;
  opacity: ${({ second, toggle }) => toggle && second && '0'};
  transform-origin: left;
  transform: ${({ first, toggle }) => first && toggle && 'rotate(45deg)'};
  transform: ${({ third, toggle }) => third && toggle && 'rotate(-45deg)'};
`;

const Topbar = ({ toggle, setToggle }) => {
  return (
    <Container toggle={toggle}>
      <Wrapper>
        <Left>
          <Logo href="#intro">genius.</Logo>
          <ItemContainer>
            <Person style={{ marginRight: '5px' }} />
            <Span>010-7673-6879</Span>
          </ItemContainer>
          <ItemContainer>
            <Mail style={{ marginRight: '5px' }} />
            <Span>zowoz8819@gmail.com</Span>
          </ItemContainer>
          <Link href="https://github.com/shinhonggyu" target="_blank">
            <GitHub style={{ color: toggle && 'white' }} />
          </Link>
        </Left>
        <Right>
          <Menu toggle={toggle} onClick={() => setToggle(!toggle)}>
            <MenuSpan toggle={toggle} first></MenuSpan>
            <MenuSpan toggle={toggle} second></MenuSpan>
            <MenuSpan toggle={toggle} third></MenuSpan>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;

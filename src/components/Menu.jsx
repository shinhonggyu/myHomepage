import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.main};
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: ${({ toggle }) => (toggle ? '0px' : '-300px')};
  transition: all 1s ease;
`;

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 30px;
  font-weight: 300;
  color: white;
  width: 60%;
`;

const MenuItem = styled.li`
  margin-bottom: 25px;

  &:hover {
    font-weight: 500;
  }
`;

const Link = styled.a`
  font-size: inherit;
  color: inherit;
  text-decoration: none;
`;

const Menu = ({ toggle, setToggle }) => {
  const handleClick = (e) => {
    if (e.target.tagName === 'A') {
      setToggle(false);
    }
  };

  return (
    <Container toggle={toggle}>
      <MenuList onClick={handleClick}>
        <MenuItem>
          <Link href="#intro">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#works">Works</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#portfolio">Portfolio</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#testimonials">Testimonials</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#contact">Contact</Link>
        </MenuItem>
      </MenuList>
    </Container>
  );
};

export default Menu;

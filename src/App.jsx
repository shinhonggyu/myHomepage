import styled from 'styled-components';
import Topbar from './components/Topbar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Works from './components/Works';
import Contact from './components/Contact';
import { GlobalStyles } from './components/Globar';
import { useState } from 'react';
import Menu from './components/Menu';

const Container = styled.div``;

const Sections = styled.div`
  > * {
    position: relative;
    top: 70px;
    height: calc(100vh - 70px);
    scroll-snap-align: start;
    padding-top: 70px;
  }
`;

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Topbar toggle={toggle} setToggle={setToggle} />
        <Menu toggle={toggle} setToggle={setToggle} />
        <Sections>
          <Intro />
          <Works />
          <Portfolio />
          <Testimonials />
          <Contact />
        </Sections>
      </Container>
    </>
  );
};

export default App;

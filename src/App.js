import React, { useEffect } from 'react';
import Layout from './components/layout';
import Jumbo from './components/jumbo';
import About from './components/about';
import Menu from './components/menu';
import Contact from './components/contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() =>{
    AOS.init({ once: true});
  })

  return(
      <Layout>
        <Jumbo />
        <About />
        <Menu />
        <Contact />
      </Layout>
  )
}

export default App;

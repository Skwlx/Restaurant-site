import React from 'react';
import Layout from './components/layout';
import Jumbo from './components/jumbo';
import About from './components/about';
import Menu from './components/menu';
import Contact from './components/contact';

const App = () => (
  <Layout>
    <Jumbo />
    <About />
    <Menu />
    <Contact />
  </Layout>
)

export default App;

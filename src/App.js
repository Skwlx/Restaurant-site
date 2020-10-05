import React from 'react';
import Layout from './components/layout';
import Jumbo from './components/jumbo';
import About from './components/about';
import Menu from './components/menu'

const App = () => (
  <Layout>
    <Jumbo />
    <About />
    <Menu />
  </Layout>
)

export default App;

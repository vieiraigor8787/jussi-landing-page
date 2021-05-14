import React from 'react';
import GlobalStyle from './style/globalStyle';

import Header from './components/Header';
import Footer from './components/Footer';
import Leads from './components/Leads';
import About from './components/AboutJussi';
import News from './components/News';
import MainBanner from './components/Banner';

function App() {
  return (
    <>
    <Header />
    <MainBanner />
    <About />
    <News />
    <Leads />
    <Footer />
    <GlobalStyle />
    </>
  );
}

export default App;

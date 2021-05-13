import React from 'react';
import GlobalStyle from './style/globalStyle';

import Header from './components/Header';
import Footer from './components/Footer';
import Leads from './components/Leads';
import News from './components/News';

function App() {
  return (
    <>
    <Header />
    <News />
    <Leads />
    <Footer />
    <GlobalStyle />
    </>
  );
}

export default App;

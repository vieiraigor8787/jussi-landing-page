import React from 'react';
import GlobalStyle from './style/globalStyle';

import Header from './components/Header';
import Footer from './components/Footer';
import Leads from './components/Leads';

function App() {
  return (
    <>
    <Header />
    <Leads />
    <Footer />
    <GlobalStyle />
    </>
  );
}

export default App;

import React from 'react';

import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import GlobalStyle from '../styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Main />
      <Footer />
    </>
  )
}

export default App;

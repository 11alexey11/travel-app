import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import CountryInformation from '../CountryInformation/CountryInformation';
import СountriesList from '../CountriesList/CountriesList';
import Footer from '../Footer/Footer';
import GlobalStyle from './GlobalStyle';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import Header from '../Header/Header';
import Loader from '../Loader/Loader.jsx';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

interface AppProps {
  data: Array<Object>,
  countries: Array<Object>,
  language: string
}

const App: React.FC<AppProps> = ({ data, countries, language }) => {



  if (data.length === 0 || language === null) {
    return <Loader />
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <GlobalStyle />
        <Header />

        <Route exact path="/" component={СountriesList} />

        {
          countries.map((item: any, i: number) => (<Route key={item.id} exact path={`/${i + 1}`} render={() => <CountryInformation country={item} />} />))
        }

        <Route exact path="/auth" component={RegistrationForm} />

        <Footer />
      </Router>
    </>
  )
}

export default App;

import React from 'react';
import Button from './components/Button/Button';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Button>Short By Date</Button>
      <Cards />
      
    </>
  );
};

export default App;
import React from 'react';
import NewsApi from './components/NewsApi';
import './components/style.css';
import Header from './components/Header';
import Pagination from './components/Pagination';

function App() {
  return (
    <>
      <Header />
      <NewsApi />
      <Pagination />
    </>
  );
}

export default App;

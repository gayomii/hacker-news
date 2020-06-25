import React from 'react';
import NewsApi from './components/NewsApi';
import './components/style.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');
      </style>
      <Header />
      <NewsApi />
    </>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import './components/style.css';
import NewsPage from './page/NewsPage';

function App() {
  return (
    <>
      <Route path="/news" component={NewsPage} />
    </>
  );
}

export default App;

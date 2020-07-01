import React, { useState, useEffect } from 'react';
import axios from 'axios';
import News from './News.js';
import Header from './Header';

const NewsApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    const fetchData = async () => {
      setLoading(true);
      try {
        
        const response = await axios.get(`https://node-hnapi.herokuapp.com/news`);
        setData(response.data);
      }
      catch(e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if(loading){
    return <div className="news-main">Loading...</div>
  }
  if(!data){
    return null;
  }

  return (
    <div className="newsApi-main">
      <Header />
      <div className="newsApi-data">
        {data.map(data=>(
          <News key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default NewsApi;
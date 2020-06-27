import React, { useState, useEffect } from 'react';
import axios from 'axios';
import News from './News.js';

const NewsApi = ({ pageName }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    const fetchData = async () => {
      setLoading(true);
      try {
        const page = pageName;
        const response = await axios.get(`https://node-hnapi.herokuapp.com/news?page=${page}`);
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
      {data.map(data=>(
        <News key={data.id} data={data} />
      ))}
    </div>
  );
};

export default NewsApi;
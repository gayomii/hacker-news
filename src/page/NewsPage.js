import React from 'react';
import qs from 'qs';
import NewsApi from '../components/NewsApi';
import Pagination from '../components/Pagination';

const NewsPage = ({ location }) => {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const pageNum = query.page;
  console.log(pageNum);
  return (
    <div className="newspage">
      <NewsApi />
      <Pagination page={pageNum}/>
    </div>
  );
}

export default NewsPage;
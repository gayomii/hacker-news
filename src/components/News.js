import React from 'react';

const News = ({data}) => {
  const { title, url, points, user, time_ago, comments_count } = data;
  return (
    <div className="news-main">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
        <div className="news-contents">
          <p>{points} points by {user} / {time_ago} / {comments_count} comments</p>
        </div>
      </a>
    </div>
  );
};

export default News;
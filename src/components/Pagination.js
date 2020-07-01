import React, { useState } from 'react';

const Pagination = ({ page }) => {
  const [ pin, setPin ] = useState(page);
  const pages = [1,2,3,4,5,6,7,8,9,10];
  const onPrevBtn = () => {
    if(pin > 1){
      setPin(parseInt(pin)-1);
    }
  }
  const onNextBtn = () => {
    if(page < 10){
      setPin(parseInt(pin)+1);
    }
  }

  const pageLink = `?page=${pin}`;
  return (
    <nav aria-label="Page">
      <ul className="pagination">
        <li className="page-item" onClick={onPrevBtn}><a className="page-link" href={pageLink}>Prev</a></li>
        {pages.map(n => (
          <li key={n} className="page-item">
            <a className="page-link" href={`?page=${n}`}>{n}</a>
          </li> 
        ))}
        <li className="page-item" onClick={onNextBtn}><a className="page-link" href={pageLink}>Next</a></li>
      </ul>
    </nav>
  );
}

export default Pagination;
import React from 'react';

const Pagination = () => {
  const onSelect = (e) => {
    console.log(e.target);
  }
  return (
    <nav aria-label="Page">
      <ul className="pagination">
        <li className="page-item page-link" onClick={onSelect}>Prev</li>
        <li className="page-item page-link" onClick={onSelect}>1</li>
        <li className="page-item page-link" onClick={onSelect}>2</li>
        <li className="page-item page-link" onClick={onSelect}>3</li>
        <li className="page-item page-link" onClick={onSelect}>4</li>
        <li className="page-item page-link" onClick={onSelect}>5</li>
        <li className="page-item page-link" onClick={onSelect}>6</li>
        <li className="page-item page-link" onClick={onSelect}>7</li>
        <li className="page-item page-link" onClick={onSelect}>8</li>
        <li className="page-item page-link" onClick={onSelect}>9</li>
        <li className="page-item page-link" onClick={onSelect}>10</li>
        <li className="page-item page-link" onClick={onSelect}>Next</li>
      </ul>
    </nav>
  );
}

export default Pagination;
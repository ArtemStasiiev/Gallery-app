import React from "react";
import "../../styles/Pagination.scss";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="Pagination">
      <ul className="Pagination-List-Con">
        {pageNumbers.map((number) => (
          <li key={number} className="Pagination-List-Item">
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

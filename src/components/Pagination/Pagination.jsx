import React from "react";
import styles from "./pagination.module.css";

function Pagination({ totalItems, perPage, current, onChange }) {

  const totalPages = Math.ceil(totalItems / perPage);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleClick = (page) => {
    if (page === current) return;

    const start = (page - 1) * perPage;
    const end = page * perPage;

    onChange({ current: page});
  };


  const handlePreviousPage = () => {
    if (current === 1) return;

    const page = current - 1;
    const start = (page - 1) * perPage;
    const end = page * perPage;

    onChange({ current: page });
  };


  const handleNextPage = () => {
    if (current === totalPages) return;

    const page = current + 1;
    const start = (page - 1) * perPage;
    const end = page * perPage;

    onChange({ current: page});
  };

  return (
    <ul className={styles.wrapper}>

      <li
        className={`${styles.item} ${
          current === 1 ? styles.disabled : ""
        }`}
        onClick={handlePreviousPage}
      >
        Previous
      </li>

      {pages.map((page) => (
        <li
          key={page}
          className={`${styles.item} ${
            page === current ? styles.active : ""
          }`}
          onClick={() => handleClick(page)}
        >
          {page}
        </li>
      ))}
      <li
        className={`${styles.item} ${
          current === totalPages ? styles.disabled : ""
        }`}
        onClick={handleNextPage}
      >
        Next
      </li>
    </ul>
  );
}

export default Pagination;

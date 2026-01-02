import React from "react";
import styles from "./pagination.module.css";

function Pagination({ totalItems, perPage, current, onChange }) {
  const totalPages = Math.ceil(totalItems / perPage);//7
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleClick = (page) => {
    if (page === current) return;

    // const start = (page - 1) * perPage;
    // const end = page * perPage;

    onChange(page);//3
  };
  const handlePreviousPage = () => {
    if (current === 1) return; //7

    const page = current - 1;//6
    const start = (page - 1) * perPage;
    const end = page * perPage;

    onChange(page);
  };
  const handleNextPage = () => {
    if (current === totalPages) return;//1

    const page = current + 1;//2
    const start = (page - 1) * perPage;//1*16--->16
    const end = page * perPage; //2*16=>32
    onChange(page);
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
          onClick={() => handleClick(page)}//2
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

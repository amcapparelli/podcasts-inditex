import React from "react";
import styles from './Search.module.css';

const Search = ({ input, handleChange, totalElements }) => {

  return (
    <div className={styles.SearchContainer}>
      <span className={styles.TotalElements}>
        {totalElements}
      </span>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Filter podcasts..."
      />
    </div>
  )
}

export default Search;
import React from "react";

import Button from "../Button";

import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.container}>
      <input type="text" name="Query" placeholder="Search for a video!" className={styles.input} />
      <Button title="Search"/>
    </div>
  );
};

export default Search;

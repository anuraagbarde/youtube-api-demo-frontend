import React from "react";

import Button from "../Button";

import styles from "./Search.module.css";

const Search = ({ searchText, setSearchText, fetchVideos }) => {
  return (
    <div className={styles.container}>
      <input
        type="text" 
        name="Query" 
        placeholder="Search for a video!" 
        className={styles.input} 
        value={searchText}
        onChange={({target: {value}}) => setSearchText(value)}
      />
      <Button title="Search" onClick={fetchVideos} />
    </div>
  );
};

export default Search;

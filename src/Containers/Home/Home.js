import React from "react";

import styles from "./Home.module.css";

import Header from "../../Components/Header";
import Search from "../../Components/Search";

const Home = () => {

  return (
    <div className={styles.container}>
      <Header />

      <Search />
    </div>
  );
};

export default Home;

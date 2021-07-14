import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

import Header from "../../Components/Header";
import Search from "../../Components/Search";

import { getVideos } from "../../Services/videos.service";

const Home = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const { videos } = await getVideos(0, "");
      setVideos(videos);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      <Search />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

import Header from "../../Components/Header";
import Search from "../../Components/Search";
import VideoCard from "../../Components/VideoCard";

import { getVideos } from "../../Services/videos.service";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchVideos = async () => {
    try {
      const { videos } = await getVideos(0, searchText);
      setVideos(videos);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  const displayVideos = videos.map(video => <VideoCard title={video.title} thumbnails={video.thumbnails} />)

  return (
    <div className={styles.container}>
      <Header />

      <Search searchText={searchText} setSearchText={setSearchText} fetchVideos={fetchVideos}/>

      <div className={styles.videosContainer}>
        {displayVideos}
      </div>
    </div>
  );
};

export default Home;

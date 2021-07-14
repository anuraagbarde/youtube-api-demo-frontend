import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

import Header from "../../Components/Header";
import Search from "../../Components/Search";
import VideoCard from "../../Components/VideoCard";
import Button from "../../Components/Button";

import { getVideos } from "../../Services/videos.service";
import { VIDEOS_PER_PAGE } from "../../Utils/constants";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const fetchVideos = async (page) => {
    try {
      const { videos, totalDocuments } = await getVideos(page ?? currentPage, searchText);
      setVideos(videos);
      setTotalPages(Math.ceil(totalDocuments / VIDEOS_PER_PAGE));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  const changePage = (page) => {
    setCurrentPage(page);
    fetchVideos(page);
  }

  const displayVideos = videos.map(video => <VideoCard title={video.title} thumbnails={video.thumbnails} />)

  const displayPagination = Array(totalPages).fill(0).map((_, index) => <Button title={index + 1} onClick={() => changePage(index)} active={currentPage == index}/>);

  return (
    <div className={styles.container}>
      <Header />

      <Search searchText={searchText} setSearchText={setSearchText} fetchVideos={fetchVideos} />

      <div className={styles.videosContainer}>
        {displayVideos}
      </div>

      <div className={styles.paginationContainer}>
        {displayPagination}
      </div>
    </div>
  );
};

export default Home;

import React from "react";

import styles from "./VideoCard.module.css";

const VideoCard = ({title, thumbnails}) => {
  console.log(thumbnails)
  return (
    <div className={styles.container}>
      <img src={thumbnails.high} />
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default VideoCard;

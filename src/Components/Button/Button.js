import React from "react";

import styles from "./Button.module.css";

const Button = ({ title, onClick, active }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${active ? styles.active : null}`}>
      {title}
    </button>
  );
};

export default Button;

import React from "react";
import styles from "./FeedPhotosItem.module.css";
import Image from "../../Helper/Image/image";

function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick(){
    setModalPhoto(photo)
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title}/>

      <span>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;

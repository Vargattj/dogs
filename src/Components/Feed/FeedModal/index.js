import React, { useEffect } from "react";
import useFetch from "../../../Hooks/useFetch";
import styles from "./FeedModal.module.css";
import { PHOTO_GET } from "../../../api";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";
import PhotoContent from "../../Photo/PhotoContent";

function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();
  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutSideClick(e){
    console.log('Target', e.target);
    console.log('Current Target', e.currentTarget);
    if(e.target === e.currentTarget) setModalPhoto(null)
  }
  return (
    <div className={styles.modal} onClick={handleOutSideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

export default FeedModal;

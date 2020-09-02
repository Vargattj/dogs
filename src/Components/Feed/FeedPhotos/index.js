import React, { useEffect } from "react";
import FeedPhotosItem from "../FeedPhotosItem";
import useFetch from "../../../Hooks/useFetch";
import Error from "../../../Components/Helper/Error";
import Loading from "../../../Components/Helper/Loading";
import { PHOTOS_GET } from "../../../api";
import styles from './FeedPhotos.module.css'

function FeedPhotos({setModalPhoto}) {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => {
          return <FeedPhotosItem setModalPhoto={setModalPhoto} key={photo.id} photo={photo} />;
        })}
      </ul>
    );
  return null;
}

export default FeedPhotos;

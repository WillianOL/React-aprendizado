import React from 'react';
import styles from './FeedPhotosItems.module.css';
import Image from '../Helper/Image';

const FeedPhotoItems = ({ foto, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(foto);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={foto.src} alt={foto.title} />
      <span className={styles.visualizacao}>{foto.acessos}</span>
    </li>
  );
};

export default FeedPhotoItems;

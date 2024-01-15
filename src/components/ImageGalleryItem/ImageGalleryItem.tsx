import css from './ImageGalleryItem.module.css';
import { FC } from 'react';
import { IImageGalleryItem } from './ImageGalleryitem.types';

export const ImageGalleryItem: FC<IImageGalleryItem> = ({
  post,
  onModalOpen,
}) => {
  const onPhotoClick = () => {
    onModalOpen(post.largeImageURL);
  };
  return (
    <li onClick={onPhotoClick} className={css.galleryItem}>
      <img className={css.image} src={post.webformatURL} alt="" />
    </li>
  );
};

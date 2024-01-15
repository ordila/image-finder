import { FC } from "react";

import css from "./ImageGallery.module.css";

import { ImageGalleryItem } from "../../components/ImageGalleryItem/ImageGalleryItem";
import { IImageGallery } from "./ImageGallery.types";

export const ImageGallery: FC<IImageGallery> = ({ posts, onModalOpen }) => {
  return (
    <ul className={css.gallery}>
      {posts.map((post, id) => (
        <ImageGalleryItem onModalOpen={onModalOpen} post={post} key={id} />
      ))}
    </ul>
  );
};

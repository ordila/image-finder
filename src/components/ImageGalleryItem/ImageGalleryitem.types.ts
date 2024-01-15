import { IPost } from "../../types/app/app.types";

export interface IImageGalleryItem {
  post: IPost;
  onModalOpen: (value: string) => void;
}

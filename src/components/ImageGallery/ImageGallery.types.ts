import { IPost } from "../../types/app/app.types";

export interface IImageGallery {
  posts: IPost[];
  onModalOpen: (value: string) => void;
}

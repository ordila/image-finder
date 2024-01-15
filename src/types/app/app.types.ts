export interface IPost {
  collections: number;
  comments: number;
  downloads: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
}

export interface IApp {
  inputValue: string;
  page: number;
  error: null | string;
  isLoading: boolean;
  posts: IPost[];
  modal: {
    modalOpen?: boolean;
    modalData?: string;
  };
}

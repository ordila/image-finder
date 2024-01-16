import { requestPosts } from "../helpers/api";

import Modal from "./Modal/Modal";

import css from "./styles.module.css";
import { Component } from "react";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { IApp } from "../types/app/app.types";
import { SearchBar } from "./Searchbar/SearchBar";
import { Loader } from "./Loader/Loader";

export default class App extends Component<{}, IApp> {
  state = {
    inputValue: "",
    page: 1,
    error: null,
    isLoading: false,
    posts: [],
    modal: {
      modalOpen: false,
      modalData: "",
    },
    showBtn: false,
  };
  onModalOpen = (imageUrl: string) => {
    this.setState({ modal: { modalOpen: true, modalData: imageUrl } });
  };

  fetchPosts = async () => {
    const { inputValue, page } = this.state;
    try {
      this.setState({
        isLoading: true,
      });

      const response = await requestPosts(inputValue, page);

      this.setState((prevState) => ({
        posts: [...prevState.posts, ...response.hits],
      }));

      this.setState({ showBtn: page < Math.ceil(response.totalHits / 12) });
    } catch (er) {
      if (er instanceof Error) {
        this.setState({ error: er.message });
      }
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  async componentDidUpdate(_: {}, prevState: IApp) {
    const { inputValue, page } = this.state;

    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      this.fetchPosts();
    }
  }

  onFormSubmit = (inputValue: string) => {
    this.setState({ inputValue, page: 1, posts: [] });
  };

  onButtonClick = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  onModalClose = () => {
    this.setState({ modal: { modalOpen: false } });
  };
  render() {
    const {
      posts,
      isLoading,
      showBtn,

      modal: { modalData, modalOpen },
    } = this.state;

    return (
      <div className={css.App}>
        <SearchBar onFormSubmit={this.onFormSubmit} />

        <ImageGallery onModalOpen={this.onModalOpen} posts={posts} />

        {isLoading && <Loader isLoading={isLoading} />}

        {showBtn && <Button onButtonClick={this.onButtonClick} />}

        {modalOpen && (
          <Modal onModalClose={this.onModalClose} modalData={modalData} />
        )}
      </div>
    );
  }
}

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
  };

  onModalOpen = (imageUrl: string) => {
    this.setState({ modal: { modalOpen: true, modalData: imageUrl } });
  };

  fetchPosts = async () => {
    try {
      this.setState({
        isLoading: true,
      });

      const response = await requestPosts(
        this.state.inputValue,
        this.state.page
      );

      this.setState((prevState) => ({
        posts:
          this.state.page > 1
            ? [...prevState.posts, ...response.hits]
            : [...response.hits],
      }));
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
    if (
      prevState.inputValue !== this.state.inputValue ||
      prevState.page !== this.state.page
    ) {
      this.fetchPosts();
    }
  }

  onFormSubmit = (inputValue: string) => {
    this.setState({ inputValue });
  };

  onButtonClick = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
    console.log(this.state.page);
  };

  onModalClose = () => {
    this.setState({ modal: { modalOpen: false } });
  };
  render() {
    const {
      posts,
      isLoading,
      modal: { modalData, modalOpen },
    } = this.state;
    return (
      <div className={css.App}>
        <SearchBar onFormSubmit={this.onFormSubmit} />

        <ImageGallery onModalOpen={this.onModalOpen} posts={posts} />

        {isLoading && <Loader isLoading={isLoading} />}

        {posts.length > 1 && <Button onButtonClick={this.onButtonClick} />}

        {modalOpen && (
          <Modal onModalClose={this.onModalClose} modalData={modalData} />
        )}
      </div>
    );
  }
}

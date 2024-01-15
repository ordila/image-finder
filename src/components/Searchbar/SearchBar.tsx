import { Component } from "react";

import css from "./SearchBar.module.css";

import { ISearchBarProps, ISearchBarState } from "./SearchBar.types";

import { CiSearch } from "react-icons/ci";

export class SearchBar extends Component<ISearchBarProps, ISearchBarState> {
  state = {
    value: "",
  };

  handleSubmitSearchForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { onFormSubmit } = this.props;

    onFormSubmit(this.state.value);

    this.setState({ value: "" });
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmitSearchForm}>
          <button type="submit" className={css.button}>
            <CiSearch size={30} />
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

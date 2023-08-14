import { Component } from 'react';
import './SearchForm.css';

export class SearchForm extends Component {
  state = {
    hasError: false,
    searchValue: '',
  };
  //   constructor() {
  //     super();
  //   }
  validate = e => {
    const searchValue = e.target.value;
    let hasError = false;
    const regexPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexPattern.test(searchValue)) {
      hasError = true;
    } else if (!searchValue.includes('@')) {
      hasError = true;
    } else if (!searchValue.includes('.')) {
      hasError = true;
    }
    this.setState({
      searchValue: e.target.value,
      hasError: hasError,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchValue = form.elements.search.value;

    this.setState({ hasError: false });
    fetch(
      `https://api.themoviedb.org/3/search/movie?page=1&api_key=53b2ac0d64cbeedea763734f4fe8a4ce&query=${searchValue}`
    )
      .then(response => {
        return response.json();
      })
      .then(results => {
        console.log(results);
      });
  };
  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          style={{
            border: `2px solid ${this.state.hasError ? 'red' : 'black'}`,
            outline: 'none',
          }}
          value={this.state.searchValue}
          onChange={this.validate}
          type="text"
          name="search"
          autoComplete="off"
        />

        <button type="submit">search</button>
      </form>
    );
  };
}

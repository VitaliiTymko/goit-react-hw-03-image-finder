import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searcheValue: '',
  };

  handleValueChange = event => {
    this.setState({ searcheValue: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searcheValue.trim() === '') {
      alert('Enter value');
      return;
    }
    this.props.onSubmit(this.state.searcheValue);
    this.setState({ searcheValue: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            name="searcheValue"
            value={this.state.searcheValue}
            onChange={this.handleValueChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

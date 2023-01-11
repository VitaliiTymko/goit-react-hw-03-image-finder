import React, { Component } from 'react';

import '../css/styles.css';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    searchString: '',
  };
  handleFormSubmit = searchString => {
    this.setState({ searchString });
  };

  render() {
    return (
      <div
        style={
          {
            // height: '100vh',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            // fontSize: 40,
            // color: '#010101',
          }
        }
      >
        <SearchBar onSubmit={this.handleFormSubmit} />
        {this.state.loading && <h1>Loading, wait....</h1>}
        <ImageGallery searcheValue={this.state.searchString} />
      </div>
    );
  }
}

//

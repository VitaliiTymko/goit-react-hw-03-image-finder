import React, { Component } from 'react';
import '../css/styles.css';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    searchString: '',
    page: 1,

    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  handleFormSubmit = searchString => {
    this.setState({ searchString });
    this.setState(prevState => {
      prevState.page = 1;
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searcheValue={this.state.searchString}
          page={this.state.pageActive}
        />
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {this.state.showModal && <Modal />}
      </div>
    );
  }
}

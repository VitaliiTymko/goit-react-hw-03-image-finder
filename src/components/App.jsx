import React, { Component } from 'react';
import '../css/styles.css';

export default class App extends Component {
  state = {
    photos: null,
    page: 1,
    value: '',
  };

  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page}&key=31423589-05a77bf58d80d41712d5d29e1&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(photos => this.setState({ photos }));
  }

  render() {
    console.log(this.state.photos);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {this.state.photos && (
          <>
            Тут будет разметка галлереи
            <ul className="gallery">
              {this.state.photos.hits.map(({ id, webformatURL, tags }) => (
                <li key={id} className="gallery-item">
                  <img src={webformatURL} alt={tags} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

//

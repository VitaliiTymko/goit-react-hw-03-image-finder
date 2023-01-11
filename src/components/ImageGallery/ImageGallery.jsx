import React, { Component } from 'react';

export default class ImageGallery extends Component {
  state = {
    photos: null,
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    // this.setState({ loading: true });
    const prevValue = prevProps.searcheValue;
    const nextValue = this.props.searcheValue;

    if (prevValue !== nextValue) {
      console.log('Изменилась строка ввода');
      console.log('Предыдущее значение', prevValue);
      console.log('Новое значение', nextValue);

      fetch(
        `https://pixabay.com/api/?q=${nextValue}&page=${this.state.page}&key=31423589-05a77bf58d80d41712d5d29e1&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(photos => this.setState({ photos }))
        .finally(() => this.setState({ loading: false }));
    }
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
        {this.state.loading && <h1>Loading, wait....</h1>}
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

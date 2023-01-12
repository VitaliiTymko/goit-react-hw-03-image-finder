import React, { Component } from 'react';
import { Dna } from 'react-loader-spinner';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';

export default class ImageGallery extends Component {
  state = {
    photos: null,
    page: 1,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.searcheValue;
    const nextValue = this.props.searcheValue;

    if (prevValue !== nextValue || prevState.page !== this.state.page) {
      console.log('Изменилась строка ввода');
      console.log('Предыдущее значение', prevState.page);
      console.log('Новое значение', this.state.page);

      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=${nextValue}&page=${this.state.page}&key=31423589-05a77bf58d80d41712d5d29e1&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(responce => {
          if (responce.ok) {
            return responce.json();
          }
          return Promise.reject(
            new Error(
              `Нет изображений с таким ${nextValue}, введите новое значение`
            )
          );
        })
        .then(photos => this.setState({ photos, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  loadMore = prevState => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { photos, error, status } = this.state;
    const { searcheValue } = this.props;

    if (photos !== null) {
      if (photos.hits.length === 0) {
        console.log('photos:', photos);
        return (
          <div>
            Нет изображений с таким {searcheValue}, введите новое значение
          </div>
        );
      }
    }

    if (status === 'idle') {
      return <div>Введите слово для поиска изображения</div>;
    }

    if (status === 'pending') {
      return (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        // <h2>Loading, wait....</h2>
      );
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <ul className="ImageGallery">
          {photos.hits.map(({ id, webformatURL, tags, onClick }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              tags={tags}
              // onClick={this.toggleModal()}
            />
          ))}
          <Button loadMore={this.loadMore} />
        </ul>
      );
    }

    // return (
    //   <div
    //     style={{
    //       height: '100vh',
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       fontSize: 40,
    //       color: '#010101',
    //     }}
    //   >
    //     {error && (
    //       <h1>
    //         {error.message}
    //         {/* Нет изображений с таким {searcheValue}, введите новое значение */}
    //       </h1>
    //     )}
    //     {!searcheValue && <div>Введите слово для поиска изображения</div>}
    //     {loading && <h2>Loading, wait....</h2>}
    //     {photos && (
    //       <>
    //         {/* Тут будет разметка галлереи */}
    //         <ul className="gallery">
    //           {photos.hits.map(({ id, webformatURL, tags }) => (
    //             <ImageGalleryItem
    //               key={id}
    //               id={id}
    //               webformatURL={webformatURL}
    //               tags={tags}
    //             />
    //           ))}
    //         </ul>
    //       </>
    //     )}
    //   </div>
    // );
  }
}

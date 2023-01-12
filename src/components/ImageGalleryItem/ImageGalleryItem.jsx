import React from 'react';

const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <li key={id} className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        // onclick={onclick}
      />
    </li>
  );
};

export default ImageGalleryItem;

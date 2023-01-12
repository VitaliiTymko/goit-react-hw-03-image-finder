import React from 'react';

const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <li key={id} className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;

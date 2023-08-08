import React, { useState, useEffect } from 'react';

const MarvelComic = ({ comicId }) => {
  const [comic, setComic] = useState(null);

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/comics/${comicId}?apikey=809b6cd81fd1c5c9e05a73c2f655fba7`)
      .then(response => response.json())
      .then(data => setComic(data.data.results[0]))
      .catch(error => console.error('Error fetching comic:', error));
  }, [comicId]);

  if (!comic) {
    return <p>Loading Comic</p>;
  }

  return (
    <div>
      <h2>{comic.title}</h2>
      <img src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`} alt={comic.title} />
      <p>{comic.description || 'No description available.'}</p>
    </div>
  );
};

export default MarvelComic;

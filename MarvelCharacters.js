import React, { useState, useEffect } from 'react';

const MarvelCharacter = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters/${characterId}?apikey=809b6cd81fd1c5c9e05a73c2f655fba7`)
      .then(response => response.json())
      .then(data => setCharacter(data.data.results[0]))
      .catch(error => console.error('Error fetching character:', error));
  }, [characterId]);

  if (!character) {
    return <p>Loading Character</p>;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`} alt={character.name} />
      <p>{character.description || 'No description available.'}</p>
    </div>
  );
};

export default MarvelCharacter;

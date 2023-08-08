import React from 'react';
import MarvelCharacter from './MarvelCharacter';
import MarvelComic from './MarvelComic';

const App = () => {
  return (
    <div>
      <h1>Marvel API</h1>
      <MarvelCharacter characterId={1011334} />
      <MarvelComic comicId={7258} />
    </div>
  );
};

export default App;

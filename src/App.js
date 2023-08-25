import { useState } from 'react';
import './App.css';
import GameBoard from './game-board';
import WordSelect from './word-select';


function App() {

  const [secretWord, setSecretWord] = useState('');
  return (
    <div className='container'>
      <h1>welcome to Hangman!</h1>
      <p>Do you want to play game?</p>
      <div>
        <WordSelect isShown={!secretWord} wordSelected={val => setSecretWord(val)}/>
        <GameBoard secretWord ={secretWord} maxErrors={6} isShown={secretWord}/>
      </div>
    </div>
  );
}

export default App;

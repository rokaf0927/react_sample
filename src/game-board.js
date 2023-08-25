import { useState } from 'react';
import LetterGrid from './letter-grid';
import ButtonGrid from './button-grid';

function GameBoard(props) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0);

  const letterGuessedHandler = (letter)=>{
    let val = letter.toLowerCase();
    setGuessedLetters(prev=>[...prev, val]);

    if(props.secretWord.toLowerCase().indexOf(val) === -1){
      setErrorCount(errorCount + 1);
    }
  }
  return (
    <div className={props.isShown ? '' : 'hidden'}>
      <div>
        남은 횟수 : {props.maxErrors - errorCount}
      </div>
      <LetterGrid secretWord={props.secretWord} guessedLetters={guessedLetters}/>
      <ButtonGrid letterGueessed ={letterGuessedHandler} isShown={errorCount < props.maxErrors}/>
    </div>
  );
}

export default GameBoard;

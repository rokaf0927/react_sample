import { useState } from "react";


function WordSelect(props){

    const[secretWord, setSecretWord] = useState('');

    return(
        <div className={props.isShown ? '' : 'hidden'}>
            <input type='text' onChange={e=>setSecretWord(e.target.value)}></input>
            <button onClick={e=>props.wordSelected(secretWord)}>Set Word</button>
        </div>
    );
}

export default WordSelect;
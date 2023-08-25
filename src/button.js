import { useState } from "react";

function Button(props) {

  const[isClicked, setIsClicked] = useState(false);
  let className = 'button';
  if(isClicked){
    className += ' guessed';
  }
  function clickHandler(){
    setIsClicked(true);
    props.onClick(props.value)
  }
  return (
    <button onClick={clickHandler} className={className}>{props.value}</button>
  );
}

export default Button;

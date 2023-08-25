import Button from './button';

function ButtonGrid(props) {

  let letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  let buttons = letters.map((letter,index)=>(
      <Button value={letter} key={index} onClick={props.letterGueessed}/>
  ));

  let className = 'flex flex-wrap';

  if(!props.isShown){
    className += ' hidden';
  }
  return (
    <div className={className}>
      {buttons}
    </div>
  );
}

export default ButtonGrid;

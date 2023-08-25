function Letter(props) {

  let output=' ';
  if(props.isShown){
    output = props.value;
  }
  return (
    <span className='letter'>{output}</span>
  );
}

export default Letter;

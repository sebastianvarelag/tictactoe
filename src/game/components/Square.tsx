interface IPropsSquare{
  value: string;
  currentTurn: boolean;
  handleClick: ()=>void;
}

export function Square({value, handleClick}: IPropsSquare) {

  return (
    <button className={`button button__square ${(value === 'X') ? 'equis' : 'circle'}`} onClick={handleClick}>
      <span>{value}</span>
    </button>
  )
}

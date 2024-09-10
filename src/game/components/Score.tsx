export const Score = () => {
  return (
    <>
    <div className="turn__container">
      <ul className="turn__list">
        <li className="turn__item">X</li>
        <li className="turn__item">
          <span className="turn__score">3</span>
          <span className="turn__score">-</span>
          <span className="turn__score">0</span>
        </li>
        <li className="turn__item active">O</li>
      </ul>
    </div>
    </>
  )
}
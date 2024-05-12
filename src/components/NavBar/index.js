import './index.css'

const NavBar = props => {
  const {score, timeLimit} = props

  return (
    <div className="navBgContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="scoreBoard">
        <li className="scoreCard">
          <p className="scoreheading">Score:</p>
          <p className="scoreEle">{score}</p>
        </li>
        <li className="timerContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timerImg"
          />
          <p className="timer">{timeLimit} sec</p>
        </li>
      </ul>
    </div>
  )
}

export default NavBar

import {Component} from 'react'

import NavBar from '../NavBar'

import TabItem from '../TabItem'

import ImageItem from '../ImageItem'

import './index.css'

class MatchGame extends Component {
  state = {
    tabItem: 'FRUIT',
    matchedImage: [this.props][0].imagesList[0].imageUrl,
    score: 0,
    timeLimit: 60,
    gameState: true,
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000)
  }

  timer = () => {
    const {timeLimit, gameState} = this.state
    console.log(timeLimit)
    if (timeLimit !== 0) {
      this.setState({timeLimit: timeLimit - 1})
    } else {
      clearInterval(this.intervalId)
      this.setState({gameState: !gameState})
    }
  }

  playAgain = () => {
    this.setState({
      tabItem: 'FRUIT',
      matchedImage: [this.props][0].imagesList[0].imageUrl,
      score: 0,
      timeLimit: 60,
      gameState: true,
    })
    this.intervalId = setInterval(this.timer, 1000)
  }

  randomImageGenerator = clickImgageUrl => {
    const {imagesList} = this.props
    const {matchedImage, score, gameState} = this.state
    if (clickImgageUrl === matchedImage) {
      const randomImg =
        imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl
      this.setState({matchedImage: randomImg, score: score + 1})
    } else {
      clearInterval(this.intervalId)
      this.setState({gameState: !gameState})
    }
  }

  gameState = () => {
    const {tabItem, matchedImage, gameState, score} = this.state
    const {tabsList, imagesList} = this.props
    const eachTabImagesList = imagesList.filter(
      eachImgObj => eachImgObj.category === tabItem,
    )
    if (gameState) {
      return (
        <div className="cardContainer">
          <img src={matchedImage} alt="match" className="matchedImage" />
          <ul className="tabItemsContainer">
            {tabsList.map(eachTab => (
              <TabItem
                eachTab={eachTab}
                onClickToggleTabItem={this.onClickToggleTabItem}
                key={eachTab.tabId}
                tabItem={tabItem}
              />
            ))}
          </ul>
          <ul className="eachTabImagesContainer">
            {eachTabImagesList.map(eachImgObj => (
              <ImageItem
                eachImgObj={eachImgObj}
                key={eachImgObj.id}
                randomImageGenerator={this.randomImageGenerator}
              />
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="scoreCardBgImg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p className="scoreTitle">Your Score</p>
        <p className="scoreDisplay">{score}</p>
        <button type="button" className="playAgainBtn" onClick={this.playAgain}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p>Play Again</p>
        </button>
      </div>
    )
  }

  onClickToggleTabItem = tabId => {
    this.setState({tabItem: tabId})
  }

  render() {
    const {score, timeLimit} = this.state
    return (
      <>
        <NavBar score={score} timeLimit={timeLimit} />
        <div className="bgContainer">{this.gameState()}</div>
      </>
    )
  }
}

export default MatchGame

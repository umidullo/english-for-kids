import './style.css'
import Card from './Card'
import { useState, useContext } from 'react'
import Context from '../../Context'
import { Redirect } from "react-router-dom";

const PATH = '/'
const CORRECT_AUDIO = 'audio/correct.mp3'
const WRONG_AUDIO = 'audio/error.mp3'
const WIN_STAR = 'star-win'
const LOSE_STAR = 'star'
let CURRENT_CARD_SOUND = 0


const Cards = ({ items, itemHeading }) => {
  const value = useContext(Context)
  const [gameStart, setGameStart] = useState('start')
  const [star, setStar] = useState([]);
  const [redirect, setRedirect] = useState(false)
  let cardBoxId = items
  // let asd = items.slice()

  const [notDisabled, setNotDisabled] = useState(items.length - 1)


  // const shuffleCards = (cards) => {
  //   let shuffledCards = cards
  //   for (let i = shuffledCards.length - 1; i >= 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  //   }
  //   return shuffledCards;
  // }

  const playAudio = (src) => {
    const audio = new Audio();
    src = PATH + src
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

  const checkCardStatus = (audio, image) => {
    setStar([...star, image])
    playAudio(audio)
  }

  const checkCard = (card, setDisabled) => {
    if (gameStart === 'start') return
    if (cardBoxId[CURRENT_CARD_SOUND].audioSrc === card) {
      checkCardStatus(CORRECT_AUDIO, WIN_STAR)
      setDisabled(true)
      setNotDisabled(notDisabled - 1);
      if (!notDisabled) {
        if (star.length + 1 === cardBoxId.length) {
          playAudio('audio/success.mp3')
          setTimeout(() => {
            setRedirect(!redirect)
          }, 2000)
        } else {
          playAudio('audio/failure.mp3')
          setTimeout(() => {
            setRedirect(!redirect)
          }, 2000)
        }
        value.setGameStatus('finished')
        return
      }
      setTimeout(() => { playAudio(cardBoxId[CURRENT_CARD_SOUND].audioSrc) }, 1000)
      CURRENT_CARD_SOUND++;
    } else {
      checkCardStatus(WRONG_AUDIO, LOSE_STAR)
    }
  }

  const checkStatus = () => {
    if (gameStart === 'start') {
      setGameStart('repeat')
      playAudio(cardBoxId[CURRENT_CARD_SOUND].audioSrc)
    } else {
      playAudio(cardBoxId[CURRENT_CARD_SOUND].audioSrc)
    }
  }

  if (value.gameStatus === 'finished') {
    setTimeout(() => {
      value.setGameStatus(null)
      CURRENT_CARD_SOUND = 0
      setGameStart('start')
    }, 2000)

    if (star.length === cardBoxId.length) {
      return (
        redirect ? <Redirect to="/" /> :
          <div className="finish">
            <img src="/img/success.jpg" alt="win"></img>
          </div>
      )
    } else {
      return (
        redirect ? <Redirect to="/" /> :
          <div className="finish">
            <h1>{star.length - cardBoxId.length} <span>mistakes</span></h1>
            <img src="/img/failure.jpg" alt="win"></img>
          </div>
      )
    }
  }

  if (value.isPlayMode) {
    return (
      <main className="main">
        <div className="title_score">
          <div className="category__tytle">{itemHeading}</div>
          <div className="score">
            {star.map((item, index) => <img key={index} src={`/img/${item}.svg`} alt="star" />)}
          </div>
        </div>
        <div className="cards-field">
          {items.map((item, index) =>
            <Card key={index} item={item} checkCard={checkCard} />
          )}
        </div>
        <div className="play-controls">
          <button className={gameStart == 'repeat' ? "play-Btn play-Btn_repeat" : "play-Btn"} onClick={() => checkStatus()}>{gameStart}</button>
        </div>
      </main>
    )
  }


  return (
    <main className="main">
      <div className="title_score">
        <div className="category__tytle">{itemHeading}</div>
      </div>
      <div className="cards-field">
        {items.map((item, index) =>
          <Card key={index} item={item} />
        )}
      </div>
    </main>
  )
}



export default Cards

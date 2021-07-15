import './style.css'
import Card from './Card'
import { useState, useContext } from 'react'
import Context, { GlobalContext, GlobalState } from '../../Context'
import { Redirect } from "react-router-dom";
import { ICard } from '../interfaces';

const PATH = '/'
const CORRECT_AUDIO = 'audio/correct.mp3'
const WRONG_AUDIO = 'audio/error.mp3'
const WIN_STAR = 'star-win'
const LOSE_STAR = 'star'
let CURRENT_CARD_SOUND = 0

interface Props {
  items: any;
  // items: string[] | { word: string; translation: string; image: string; audioSrc: string; }[]
  itemHeading?: string | ICard;
}

const Cards: React.FC<Props> = ({ items, itemHeading }) => {
  const { isPlayMode,
    setGameStatus,
    gameStatus, } = useContext(GlobalContext) as GlobalState;

  const [gameStart, setGameStart] = useState<string>('start')
  const [star, setStar] = useState<string[]>([]);
  const [redirect, setRedirect] = useState<boolean>(false)
  let cardBoxId = items
  const [notDisabled, setNotDisabled] = useState<number>(items.length - 1)

  const playAudio = (src: string) => {
    const audio = new Audio();
    src = PATH + src
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

  const checkCardStatus = (audio: string, image: string) => {
    setStar([...star, image])
    playAudio(audio)
  }

  const checkCard = (card: ICard | string, setDisabled:(param: boolean) => void) => {
    if (gameStart === 'start') return
    if (cardBoxId[CURRENT_CARD_SOUND].audioSrc === card) {
      checkCardStatus(CORRECT_AUDIO, WIN_STAR)
      setDisabled:Boolean(true)
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
        setGameStatus('finished')
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

  if (gameStatus === 'finished') {
    setTimeout(() => {
      setGameStatus(null)
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

  if (isPlayMode) {
    return (
      <main className="main">
        <div className="title_score">
          <div className="category__tytle">{itemHeading}</div>
          <div className="score">
            {star.map((item, index) => <img key={index} src={`/img/${item}.svg`} alt="star" />)}
          </div>
        </div>
        <div className="cards-field">
          {items.map((item:ICard, index: number) =>
            <Card key={index} item={item} checkCard={checkCard} />
          )}
        </div>
        <div className="play-controls">
          <button className={gameStart === 'repeat' ? "play-Btn play-Btn_repeat" : "play-Btn"} onClick={() => checkStatus()}>{gameStart}</button>
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
        {items.map((item: ICard, index: number) =>
          <Card key={index} item={item} />
        )}
      </div>
    </main>
  )
}



export default Cards

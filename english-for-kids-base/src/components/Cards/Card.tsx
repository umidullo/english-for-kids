import React, { useState, useContext } from 'react'
import Context, { GlobalContext, GlobalState } from '../../Context'
import { ICard } from '../interfaces'
const FLIP_ICO = '/img/rotate.svg'
const PATH = '/'

interface ICardProps {
  item: ICard;
  // checkCard(src: string, f: React.Dispatch<React.SetStateAction<boolean>>): void;
  checkCard?: (card: ICard | string, setDisabled: (param: boolean) => void) => void | ((src: string, f: React.Dispatch<React.SetStateAction<boolean>>) => void);
}

const Card: React.FC<ICardProps> = ({ item, checkCard }) => {
  const { isPlayMode } = useContext(
    GlobalContext
  ) as GlobalState;

  const [isFlipCard, setIsFlipCard] = useState<boolean>(false)

  const [disabled, setDisabled] = useState<boolean>(false)

  const playAudio = (src: string) => {
    const audio = new Audio();
    src = PATH + src
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

  if (isPlayMode) {
    return (
      <div className={disabled ? "card-container card-container_disabled" : "card-container"} onClick={() => checkCard!(item.audioSrc, setDisabled)}>
        <div className="card">
          <div className="card__front" >
            <div className="img_cover img_cover_game">
              <img className="card__img card__img_game" src={PATH + item.image} alt="img" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={isFlipCard ? "card-container flipped" : "card-container"}
      onMouseLeave={() => setIsFlipCard(false)} onClick={() => {
        if (!isFlipCard) {
          playAudio(item.audioSrc);
        }
      }}>
      <div className="card">
        <div className="card__front" >
          <div className="img_cover">
            <img className="card__img" src={PATH + item.image} alt="img" />
          </div>
          <div className="descr">
            <p className="word">{item.word}</p>
            <img src={FLIP_ICO} alt="svg" className="flip-btn" onClick={(e) => {
              e.stopPropagation()
              setIsFlipCard(!isFlipCard)
            }
            }></img>
          </div>
        </div>
        <div className="card__back" >
          <div className="img_cover">
            <img className="card__img" src={PATH + item.image} alt="img" />
          </div>
          <div className="descr">
            <p className="translation">{item.translation}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card

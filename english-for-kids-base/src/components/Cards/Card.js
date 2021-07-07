import React, { useState, useContext } from 'react'
import Context from '../../Context'
const FLIP_ICO = '/img/rotate.svg'
const PATH = '/'


function Card({ item, checkCard }) {
  const value = useContext(Context)

  const [isFlipCard, setIsFlipCard] = useState(false)

  const [disabled, setDisabled] = useState(false)

  const playAudio = (src) => {
    const audio = new Audio();
    src = PATH + src
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

  if (value.isPlayMode) {
    return (
      <div className={disabled ? "card-container card-container_disabled" : "card-container"} onClick={() => checkCard(item.audioSrc, setDisabled)}>
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

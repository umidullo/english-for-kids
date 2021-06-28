import React, { useState } from 'react'
import cards from '../../assets/cards'
import flipIco from './Vector.svg'

const PATH = '/'


function Card() {

  const [isFlipCard, setIsFlipCard] = useState(false)

  const playAudio = (src) => {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

  return (
    <div className={isFlipCard ? "card-container flipped" : "card-container"} onMouseLeave={() => setIsFlipCard(false)} onClick={() => {
      if (!isFlipCard) {
        playAudio(cards[1][0].audioSrc);
      }
    }}>
      <div className="card">
        <div className="card__front" >

          <audio src={PATH + cards[1][0].audioSrc} type="audio/mpeg"></audio>

          <img className="card__img" src={PATH + cards[1][0].image} alt="img" />
          <div className="descr">
            <p className="word">{cards[1][0].word}</p>
            <img src={flipIco} alt="svg" className="flip-btn" onClick={(e) => {
              e.stopPropagation()
              setIsFlipCard(!isFlipCard)
            }
            }></img>
          </div>
        </div>
        <div className="card__back" >
          <img className="card__img" src={PATH + cards[1][0].image} alt="img" />
          <div className="descr">
            <p className="translation">{cards[1][0].translation}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card

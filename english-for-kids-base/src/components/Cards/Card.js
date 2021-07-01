import React, { useState } from 'react'
import flipIco from './Vector.svg'

const PATH = '/'


function Card({ word, translation, image, audio }) {

  const [isFlipCard, setIsFlipCard] = useState(false)

  const playAudio = (src) => {
    const audio = new Audio();
    src = PATH + src
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }


  return (
    <div className={isFlipCard ? "card-container flipped" : "card-container"} onMouseLeave={() => setIsFlipCard(false)} onClick={() => {
      if (!isFlipCard) {
        playAudio(audio);
      }
    }}>
      <div className="card">
        <div className="card__front" >
          <img className="card__img" src={PATH + image} alt="img" />
          <div className="descr">
            <p className="word">{word}</p>
            <img src={flipIco} alt="svg" className="flip-btn" onClick={(e) => {
              e.stopPropagation()
              setIsFlipCard(!isFlipCard)
            }
            }></img>
          </div>
        </div>
        <div className="card__back" >
          <img className="card__img" src={PATH + image} alt="img" />
          <div className="descr">
            <p className="translation">{translation}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card

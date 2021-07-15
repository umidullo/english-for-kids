import React from 'react'
import './style.css'
import cards from '../../assets/cards'
import MainCard from './MainCard'

function LinksToCards() {

  return (
    <main className="main-links">
      <div className="cards-field">
        {cards[0].map((item, index) =>
          <MainCard key={index} index={index} title={item} image={cards[index + 1][0]} />
        )}
      </div>
    </main>
  )
}

export default LinksToCards

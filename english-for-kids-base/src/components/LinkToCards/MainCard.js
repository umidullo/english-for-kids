import React from 'react'
// import cards from '../../assets/cards'
import { Link } from 'react-router-dom'

const PATH = '/'

function MainCard({ index, title, image }) {
  return (
    <Link to={`/cards/${index}`} className="main-card">
      <div className="main-card__bg"></div>

      <img src={PATH + image} alt="" className="main-card__img" />

      <p className="main-card__title">{title}</p>
    </Link>
  )
}

export default MainCard

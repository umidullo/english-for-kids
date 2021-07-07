import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../../Context'

const PATH = '/'

function MainCard({ index, title, image }) {

  const value = useContext(Context)

  return (
    <Link to={`/cards/${index}`} className="main-card">
      <div className={value.isPlayMode ? "main-card__bg game-mode" : "main-card__bg train-mode"}></div>

      <img src={PATH + image} alt="" className="main-card__img" />

      <p className="main-card__title">{title}</p>
    </Link>
  )
}

export default MainCard

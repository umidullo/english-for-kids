import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext, GlobalState } from '../../Context'
import { ICard } from '../interfaces'

const PATH = '/'

interface Props {
  index: number;
  title: string | ICard;
  image:  string | ICard;
}

const MainCard: React.FC<Props> = ({ index, title, image }) => {

  const { isPlayMode } = useContext(
    GlobalContext
  ) as GlobalState;

  return (
    <Link to={`/cards/${index}`} className="main-card">
      <div className={isPlayMode ? "main-card__bg game-mode" : "main-card__bg train-mode"}></div>

      <img src={PATH + image} alt="" className="main-card__img" />

      <p className="main-card__title">{title}</p>
    </Link>
  )
}

export default MainCard

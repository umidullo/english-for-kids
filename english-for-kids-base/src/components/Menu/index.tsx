import { NavLink } from 'react-router-dom';
import { useContext } from 'react'
import Context, { GlobalContext, GlobalState } from '../../Context'
import './style.css'


const Menu = () => {
  const { menuActive,
    setMenuActive,
    isPopupOpen,
    setIsPopupOpen,
    isPlayMode,
    setIsPlayMode,
    cardHeadings,
    setGameStatus,
    gameStatus, } = useContext(
    GlobalContext
  ) as GlobalState;

  return (
    <div className={menuActive ? 'menu active' : 'menu'} onClick={() => setMenuActive(false)}>
      <div className={isPlayMode ? 'menu__content menu__content_game' : 'menu__content menu__content_train'} onClick={(e) => e.stopPropagation()} >
        <ul>
          <li>
            <NavLink exact to='/' onClick={() => setMenuActive(false)}>Main</NavLink>
          </li>
          {cardHeadings.map((item, index) =>
            <li key={index}>
              <NavLink to={`/cards/${index}`} onClick={() => setMenuActive(false)}>{item}
              </NavLink>
            </li>
          )}
          <li>
            <NavLink exact to='/statistics' onClick={() => setMenuActive(false)}> Statistics</NavLink>
          </li>
        </ul>
        <button
          className="login"
          onClick={() => { setIsPopupOpen(!isPopupOpen); setMenuActive(false) }}>login
        </button>
      </div>
    </div>
  )
}

export default Menu;

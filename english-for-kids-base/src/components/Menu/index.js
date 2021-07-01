import { NavLink } from 'react-router-dom';
import { useContext } from 'react'
import Context from '../../Context'
import './style.css'


const Menu = ({ items }) => {

  const value = useContext(Context)

  return (
    <div className={value.menuActive ? 'menu active' : 'menu'} onClick={() => value.setMenuActive(false)}>
      <div className="menu__content" onClick={(e) => e.stopPropagation()} >
        <ul>
          <li><NavLink exact to='/' onClick={() => value.setMenuActive(false)}>Main</NavLink></li>
          {items.map((item, index) =>
            <li key={index}>
              <NavLink to={`/cards/${index}`} onClick={() => value.setMenuActive(false)}>{item}</NavLink>
            </li>
          )}
        </ul>
        <button className="login" onClick={() => { value.setIsPopupOpen(!value.isPopupOpen); value.setMenuActive(false) }}>login</button>
      </div>
    </div>
  )
}

export default Menu;

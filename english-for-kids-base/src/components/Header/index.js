import { useContext } from 'react'
import Context from '../../Context'
import './style.css'


function Header() {

  const value = useContext(Context);

  return (
    <div className="header">
      <div className={value.menuActive ? 'burger-btn burger-btn_active' : 'burger-btn'} onClick={() => value.setMenuActive(!value.menuActive)}>
        <span />
      </div>
      <div className="checkbox">
        <input type="checkbox" checked={value.isPlayMode} onChange={() => { value.setIsPlayMode(!value.isPlayMode); value.setGameStatus('started') }} />
      </div>
    </div>
  )
}

export default Header

import { useContext } from 'react'
import Context, { GlobalContext, GlobalState } from '../../Context'
import './style.css'


const Header: React.FC = () => {


  const { 
    menuActive,
    setMenuActive,
    isPlayMode,
    setIsPlayMode,
    setGameStatus,} = useContext( GlobalContext ) as GlobalState;

  return (
    <div className="header">
      <div className={menuActive ? 'burger-btn burger-btn_active' : 'burger-btn'} onClick={() => setMenuActive(!menuActive)}>
        <span />
      </div>
      <div className="checkbox">
        <input type="checkbox" checked={isPlayMode} onChange={() => { setIsPlayMode(!isPlayMode); setGameStatus('started') }} />
      </div>
    </div>
  )
}

export default Header

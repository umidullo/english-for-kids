import { useState } from 'react'
import './style.css'


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleSidebar = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen)
    alert(isMenuOpen)
  }



  return (
    <div className="header">
      <div className="menu" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
      </div>

    </div>
  )
}

export default Header

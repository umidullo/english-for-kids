import React, { useContext } from 'react'
import Context from '../../Context'
import './style.css'

const Popup = () => {

  const value = useContext(Context)

  return (
    <div className={value.isPopupOpen ? 'popup-bg' : 'popup-bg popup-bg_hidden'}>
      <div className="popup">
        <h2 className="popup__title">login</h2>
        <div className="popup__inputs">
          <label htmlFor=""> Login </label>
          <input className="popup__login" type="text" name="login" id="login" />
          <label htmlFor=""> Password </label>
          <input className="popup__password" type="password" name="password" id="password" />
        </div>
        <div className="popup__buttons">
          <button className="cancel-Btn" onClick={() => value.setIsPopupOpen(!value.isPopupOpen)}>cancel</button>
          <button className="login-Btn">login</button>
        </div>
      </div>
    </div>
  )
}

export default Popup

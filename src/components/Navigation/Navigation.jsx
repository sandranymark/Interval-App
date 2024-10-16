import './Navigation.css'
import navigation from '../../assets/navicon.svg'
import TimerMenu from '../TimerMenu/TimerMenu'
import { useState } from 'react'

function Navigation() {
const [menuOpen, setMenuOpen] = useState(false);

const handleIconClick = () => {
  setMenuOpen(!menuOpen)
};


  return (
    <div className='Navigation'>
      <img
        className='nav-icon'
        src={navigation}
        alt="Navigation-menu"
        onClick={handleIconClick}
      />
      { <TimerMenu />}
    </div>
  )
}

export default Navigation

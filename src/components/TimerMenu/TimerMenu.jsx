
import './TimerMenu.css';
import Navigation from '../Navigation/Navigation';

function TimerMenu() {
  return (
    <div className='TimerMenu'>
      <Navigation />
      <div className='menu-wrapper'>
        <nav className='nav'>
          <a className='nav-link' href='/analog-timer'>ANALOG TIMER</a>
          <a className='nav-link' href='/digital-timer'>DIGITAL TIMER</a>
          <a className='nav-link' href='/visual-timer'>TEXT TIMER</a>
          <a className='nav-link' href='/set-timer'>I DONT KNOW</a>
        </nav>
      </div>
    </div>
  );
}



export default TimerMenu;

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
          <a className='nav-link' href='/text-timer'>TEXT TIMER</a>
          <a className='nav-link' href='/set-timer'>FUCK THIS</a>
        </nav>
      </div>
    </div>
  );
}



export default TimerMenu;
import './SetTimer.css';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Navigation from '../Navigation/Navigation';
import { useNavigate } from 'react-router-dom';

function SetTimer() {
    const [count, setCount] = useState(1);
    const navigate = useNavigate();

//increment function
    const increase = () => {
      setCount(count + 1);
    };
  
// decrement function (här kontrollerar jag om count är större än 1 
// innan man minskar värdet så att det inte kan bli 0 eller negativt)
const decrease = () => {
  if (count > 1) {
    setCount(count - 1);
  }
};

const startTimer = () => {
  navigate('/analog-timer', { state: { minutes: count } });
};




  return (  
    
<div className="set-timer">

<Navigation />
<div className='set_timer--wrapper'>
  <section className="counter-section">
    <FaChevronLeft className="Count-left" onClick={decrease} />
    
    <div className="time-container">
      <h1 className="Count-heading">{count}</h1>
      <span className="minutes-label">minutes</span>
    </div>
    <FaChevronRight className="Count-right" onClick={increase} />  
  </section>
  
    <div className='checkmarks'>
        <div className='flex-test'>
    <input className='checkbox' type="checkbox"></input><p className='set__timer-text'>Intervals</p> 
    </div>
    </div>

    <div className='checkmarks'>
        <div className='flex-test'>
    <input className='checkbox' type="checkbox"></input><p className='set__timer-text'>5 min break/interval</p>
    </div>
    </div>
    <button 
      className='start__timer-btn'
      onClick={startTimer}>START TIMER</button>
    </div>
    </div>
    
  );
};

export default SetTimer;
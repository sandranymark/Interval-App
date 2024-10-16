import Navigation from "../Navigation/Navigation"
import './AnalogTimer.css'
import Clock from '../../assets/clock.svg'
import {useNavigate } from 'react-router-dom'



function AnalogTimer() {
const navigate = useNavigate()


  return (
    <div className="AnalogTimer">
      <section className="nav-section">
        <h3 className="interval-heading">interval</h3>
        <Navigation />
      </section>
      
<div className='AnalogTimer--wrapper'>
<img
    src={Clock}
    alt="AnalogClock"
    className="AnalogClock" 
/>


<button
        className='abort-btn'
        onClick={() => navigate('/set-timer')}
        > ABORT TIMER</button>
</div>
    </div>
  )
}

export default AnalogTimer


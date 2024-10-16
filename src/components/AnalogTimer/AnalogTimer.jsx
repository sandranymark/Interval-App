import Navigation from "../Navigation/Navigation"
import './AnalogTimer.css'
import Clock from '../../assets/clock.svg'
import {useNavigate} from 'react-router-dom'



function AnalogTimer() {
const navigate = useNavigate()


  return (
    <div className="AnalogTimer">
      <Navigation />
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



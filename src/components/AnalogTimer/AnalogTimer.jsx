import Navigation from "../Navigation/Navigation"
import './AnalogTimer.css'
import Clock from '../../assets/minutes.svg'
import {useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'




function AnalogTimer() {
const navigate = useNavigate()
const [time, setTime] = useState(new Date());

useEffect(() => {
  setInterval(() => {
    setTime(new Date());
  }, 1000);
}, []);



  return (
    <div className="AnalogTimer">
      <section className="nav-section">
        <h3 className="interval-heading">interval</h3>
        <Navigation />
      </section>
      
<div className='AnalogTimer--wrapper'>
  <div className="clockis">
<img
    src={Clock}
    alt="AnalogClock"
    className="AnalogClock" 
/>
<div className='AnalogClock--dot'></div>
<div className='AnalogClock--houers twelve'>60</div>
<div className='AnalogClock--houers one'>5</div>
<div className='AnalogClock--houers two'>10</div>
<div className='AnalogClock--houers three'>15</div>
<div className='AnalogClock--houers four'>20</div>
<div className='AnalogClock--houers five'>25</div>
<div className='AnalogClock--houers six'>30</div>
<div className='AnalogClock--houers seven'>35</div>
<div className='AnalogClock--houers eight'>40</div>
<div className='AnalogClock--houers nine'>45</div>
<div className='AnalogClock--houers ten'>50</div>
<div className='AnalogClock--houers eleven'>55</div>

{/* <div
        className="hour-hand"
        style={{
          transform: `rotateZ(${time.getHours() * 30}deg)`,
        }}
      ></div> */}

<div
        className="minute-hand"
        style={{
          transform: `rotateZ(${time.getMinutes() * 6}deg)`,
        }}
      ></div>

<div
        className="second-hand"
        style={{
          transform: `rotateZ(${time.getSeconds() * 6}deg)`,
        }}
      ></div>



</div>

<button
        className='abort-btn'
        onClick={() => navigate('/set-timer')}
        > ABORT TIMER</button>
</div>
    </div>
  )
}

export default AnalogTimer

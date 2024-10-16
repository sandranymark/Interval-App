import './DigitalTimer.css'
import {useNavigate} from 'react-router-dom'
import Navigation from '../Navigation/Navigation'


function DigitalTimer() {
const navigate = useNavigate()

  return (
    <div className='DigitalTimer'>

<section className="nav-section">
        <h3 className="interval-heading">interval</h3>
        <Navigation />
      </section>
<div className='DigitalTimer--wrapper'>
      <h1 className='Digital-heading'>0:00</h1>


        <button
        className='abort-btn'
        onClick={() => navigate('/set-timer')}
        > ABORT TIMER</button>


    </div>
    </div>
  )
}

export default DigitalTimer



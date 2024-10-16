import AlarmClock from '../../assets/alarm-icon.svg'
import './AlarmView.css'
import { useNavigate } from 'react-router-dom'

function AlarmView() {
 const navigate = useNavigate()
    
  return (
    
<div className='AlarmView'>
   
   

    <div className='alarm-background'>
        <img
            className='alarm-icon'
            src={AlarmClock}
            alt="Navigation-menu"
        />
        <h2 className='TimesUp-heading'>Times up!</h2>
    </div>
    <button
        className='SetNew-btn'
        onClick={() => navigate('/set-timer')}
        > SET NEW TIMER</button>
 </div>
  )
}

export default AlarmView

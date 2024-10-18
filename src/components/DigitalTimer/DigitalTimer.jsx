import './DigitalTimer.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import TimerLogic from '../../TimerLogic'; // Importera timerlogik

function DigitalTimer() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Hämta antalet minuter från state skickat med `navigate`
  const minutes = location.state?.minutes || 0; // Standardvärde 0 om inget finns

  // Funktion för när timern är färdig
  const handleTimerFinish = () => {
    navigate('/alarm-view'); // Navigera till en annan vy när timern är slut
  };

  return (
    <div className='DigitalTimer'>
      <section className="nav-section">
        <h3 className="interval-heading">Interval</h3>
        <Navigation />
      </section>
      
      <div className='DigitalTimer--wrapper'>
      
        <TimerLogic minutes={minutes} onFinish={handleTimerFinish} />
        
        <button
          className='abort-btn'
          onClick={() => navigate('/set-timer')}
        > 
          ABORT TIMER
        </button>
      </div>
    </div>
  );
}

export default DigitalTimer;

import { useEffect, useState } from 'react';
import Timer from 'easytimer.js';


const TimerLogic = ({ minutes, onFinish }) => {
  const [timer] = useState(new Timer());
  const [currentTime, setCurrentTime] = useState('0:00');

  useEffect(() => {
    if (minutes > 0) { // Kontrollera om minuter är större än 0
      timer.start({ countdown: true, startValues: { minutes: minutes } });

      // Uppdaterar timerns display
      timer.addEventListener('secondsUpdated', () => {
        setCurrentTime(timer.getTimeValues().toString(['minutes', 'seconds']));
      });

      // När timern är slut
      timer.addEventListener('targetAchieved', () => {
        onFinish(); // Triggar finish funktionen och skickas som en prop
      });
    } else {
      setCurrentTime('0:00'); // Om ingen timer är ställd ska tiden visas 0:00
    }

    return () => {
      timer.stop();
    };
  }, [timer, minutes, onFinish]);

  return (
    <div className='time-container'>
      <h1 className="Digital-heading">{currentTime}</h1>
    </div>
  );
};

export default TimerLogic;

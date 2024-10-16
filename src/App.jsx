import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SetTimer from './components/SetTimer/SetTimer';
import AnalogTimer from './components/AnalogTimer/AnalogTimer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import DigitalTimer from './components/DigitalTimer/DigitalTimer';
import TimerMenu from './components/TimerMenu/TimerMenu';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="set-timer" element={<SetTimer />} />
        <Route path="/analog-timer" element={<AnalogTimer/>} />
        <Route path="digital-timer" element={<DigitalTimer />} />
        <Route path="menu" element={<TimerMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
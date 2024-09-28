import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const initialTime = 1500; //
  const [timeLeft, setTimeLeft] = useState(initialTime); 
  const [showResetButton, setShowResetButton] = useState(false); // To show/hide reset button
  const [sessionEnded, setSessionEnded] = useState(false); // track if session ended
  const intervalRef = useRef(null);

  const notify = (message) => toast(message);

  function startTimer() {
    if (intervalRef.current) return; // Prevent starting multiple timers
    notify('🚀 Timer is started');
    setShowResetButton(false); // Hide reset button when the timer starts
    setSessionEnded(false); // Reset sessionEnded when the timer starts

    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft < 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null; // Reset interval reference
          if (!sessionEnded) {
            setSessionEnded(true); // Mark session as over
            setTimeout(() => notify('😎 Your session is over'), 0); // Notify after the timer ends
            setShowResetButton(true); // Show reset button after the timer ends
          }
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Clear the interval reference
      notify('🚫 Timer is stopped');
    }
  }

  function resetTimer() {
    setTimeLeft(initialTime); // Reset time to the initial value
    setShowResetButton(false); // Hide reset button after reset
    setSessionEnded(false); // Reset sessionEnded 
    notify('🔄 Timer is reset');
  }

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <>
      <div className="font-kanit w-full h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="font-medium text-4xl">Pomodoro Timer</h1>

        <div className="font-extralight text-2xl">
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>

        <div className="font-light flex gap-2">
          {!showResetButton ? (
            <>
              <button onClick={startTimer} className="border-[1px] border-white py-1 px-4 rounded-lg uppercase bg-green-200">
                Start
              </button>
              <button onClick={stopTimer} className="border-[1px] border-white py-1 px-4 rounded-lg uppercase bg-red-200">
                Stop
              </button>
            </>
          ) : (
            <button onClick={resetTimer} className="border-[1px] border-white py-1 px-4 rounded-lg uppercase bg-yellow-200">
              Reset Timer
            </button>
          )}
        </div>

        <ToastContainer stacked theme="light" pauseOnHover autoClose={1500} />
      </div>
    </>
  );
}

export default App;

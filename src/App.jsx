import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [timeLeft, settimeLeft] = useState(1500);
  // const [started, setStarted] = useState(false)
  const intervalRef = useRef(null)

  const notify = (message) => toast(message)

  function startTimer() {
    notify('🚀 timer is started')

    intervalRef.current = setInterval(() => {
        settimeLeft((prevTimeLeft) => {
          return prevTimeLeft - 1
        });
    }, 1000);
  }

  function stopTimer() {
    
    notify('🚫 timer is stopped')

    clearInterval(intervalRef.current)
  }
  return (
    <>
        <div className="font-kanit w-full h-screen flex flex-col items-center justify-center gap-4">
          <h1 className="font-medium text-4xl">Pomodoro Timer</h1>

          <div className="font-extralight text-2xl">
            <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>
            <span>:</span>
            <span>{String(timeLeft % 60).padStart(2, "0")}</span>
          </div>

          <div className="font-light flex gap-2">
            <button onClick={startTimer} className="border-[1px] border-white py-1 px-4 rounded-lg uppercase bg-green-200">start</button>
            <button onClick={stopTimer} className="border-[1px] border-white py-1 px-4 rounded-lg uppercase bg-red-200">stop</button>
          </div>
          <ToastContainer stacked theme="light" pauseOnHover autoClose={1500}/>
        </div>
    </>
  )
}

export default App

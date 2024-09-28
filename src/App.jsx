function App() {

  return (
    <>
        <div className="font-kanit w-full h-screen flex flex-col items-center justify-center gap-4">
          <h1 className="font-medium text-4xl">Pomodoro Timer</h1>

          <div className="font-extralight text-2xl">
            <span>25</span>
            <span>:</span>
            <span>00</span>
          </div>

          <div className="font-light flex gap-2">
            <button className="border-[1px] border-white py-1 px-4 rounded-lg uppercase bg-green-200">start</button>
            <button className="border-[1px] border-white py-1 px-4 rounded-lg uppercase bg-red-200">stop</button>
          </div>
        </div>
    </>
  )
}

export default App

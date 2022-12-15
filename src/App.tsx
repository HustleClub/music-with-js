import { playASound } from "./createSounds";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="px-2 py-1 bg-violet-200 text-violet-600 rounded hover:bg-violet-100 hover:text-violet-400"
        onClick={playASound}
      >
        play
      </button>
    </div>
  );
}

export default App;

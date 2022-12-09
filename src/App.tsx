import * as Tone from 'tone'
function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button className='px-2 py-1 bg-violet-200 text-violet-600 rounded hover:bg-violet-100 hover:text-violet-400' onClick={playASound}>play</button>
    </div>
  )
}
function playASound() {
  playChord(["C4", "E4", "g4"])
}

function playChord(chord: string[]) {
  const polysynth = new Tone.PolySynth().toDestination()
  for (let idx in chord) {
    polysynth.triggerAttackRelease(chord[idx], "8n", `+${idx}`)
  }
  polysynth.triggerAttackRelease(chord, "4n", `+${chord.length}`)
}

export default App

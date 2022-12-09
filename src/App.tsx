import * as Tone from 'tone'
function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button onClick={playASound}>play</button>
    </div>
  )
}
function playASound() {
  const synth = new Tone.Synth().toDestination();

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C4", "8n");
}

export default App

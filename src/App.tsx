import * as Tone from 'tone'
import { Chord, ChordType, transpose } from 'tonal'

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button className='px-2 py-1 bg-violet-200 text-violet-600 rounded hover:bg-violet-100 hover:text-violet-400' onClick={playASound}>play</button>
    </div>
  )
}

const acceptedQuality = ['Major', 'Minor', 'Diminished', 'Augmented']
const triadChordsName = ChordType.all().filter(chord => chord.intervals.length === 3).filter(chord => acceptedQuality.includes(chord.quality)).filter(
  chord => !!chord.name
)
console.log({ triadChordsName })
const getChordNotesFromInterval = (root: string, interval: string[]) => {
  const notes = []

  for (let dist of interval) {
    notes.push(transpose(root, dist))
  }

  console.log({ notes })
  return notes
}
const getRandomChord = () => {
  const randomInterval = triadChordsName[Math.floor(Math.random() * triadChordsName.length)].intervals
  return getChordNotesFromInterval('c', randomInterval)

}
function playASound() {

  const notes = getRandomChord()

  playChord(notes.map(note => `${note}5`))
}

function playChord(chord: string[]) {
  const polysynth = new Tone.PolySynth().toDestination()
  for (let idx in chord) {
    polysynth.triggerAttackRelease(chord[idx], "8n", `+${idx}`)
  }
  polysynth.triggerAttackRelease(chord, "4n", `+${chord.length}`)
}

export default App

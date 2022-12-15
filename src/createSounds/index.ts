import { ChordType, transpose } from "tonal";
import * as Tone from "tone";

// list of chord flavors enabled
const acceptedQuality = ["Major", "Minor", "Diminished", "Augmented"];

// list of all chords names with the acceptedQuality
const triadChordsName = ChordType.all()
  .filter((chord) => chord.intervals.length === 3)
  .filter((chord) => acceptedQuality.includes(chord.quality))
  .filter((chord) => !!chord.name);

// gets notes of a chord with root and intervals passed for that note
const getChordNotesFromInterval = (root: string, interval: string[]) => {
  const notes = [];

  for (let dist of interval) {
    notes.push(transpose(root, dist));
  }

  return notes;
};

// returns a random chord flavor for a root chord note
const getRandomChord = () => {
  const randomInterval =
    triadChordsName[Math.floor(Math.random() * triadChordsName.length)]
      .intervals;
  return getChordNotesFromInterval("c", randomInterval);
};

// plays a sound by default uses the 4th octave
export function playASound() {
  const notes = getRandomChord();

  playChord(notes.map((note) => `${note}4`));
}
// takes in a string of chord notes and plays the chord notes in order and then plays the chord altogether
function playChord(chord: string[]) {
  const polysynth = new Tone.PolySynth().toDestination();
  for (let idx in chord) {
    polysynth.triggerAttackRelease(chord[idx], "8n", `+${idx}`);
  }
  polysynth.triggerAttackRelease(chord, "4n", `+${chord.length}`);
}

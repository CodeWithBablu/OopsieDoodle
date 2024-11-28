"use client"
import { useRef } from 'react'

type SoundType = "join" | "leave" | "roundStart" | "roundSuccess" | "roundEnd" | "playerGuessed" | "tick";
function useDoodleSound() {

  const audios = useRef<Record<SoundType, HTMLAudioElement>>({
    join: new Audio('/audio/join.ogg'),
    leave: new Audio('/audio/leave.ogg'),
    roundStart: new Audio('/audio/roundStart.ogg'),
    roundSuccess: new Audio('/audio/roundEndSuccess.ogg'),
    roundEnd: new Audio('/audio/roundEndFailure.ogg'),
    playerGuessed: new Audio('/audio/playerGuessed.ogg'),
    tick: new Audio('/audio/tick.ogg'),
  });

  const playSound = (eventType: SoundType) => {
    const doodleSound = audios.current[eventType];
    if (doodleSound) {
      doodleSound.currentTime = 0; //reset to start
      doodleSound.play()
        .catch((err) => console.error(`Failed to play sound "${eventType}":`, err));;
    }
  }

  return { playSound };
}

export default useDoodleSound
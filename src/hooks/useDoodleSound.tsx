"use client"
// import { useEffect, useRef } from 'react'
import { Howl } from 'howler';

type SoundType = "join" | "leave" | "roundStart" | "roundSuccess" | "roundEnd" | "playerGuessed" | "tick";

function useDoodleSound() {
  // const audio = useRef<Record<SoundType, Howl>>({ join: new Howl({ src: ['/audio/join.ogg'] })});

  // const audios = useRef<Record<SoundType, Howl>>({
  //   join: new Howl({ src: ['/audio/join.ogg'] }),
  //   leave: new Howl({ src: ['/audio/leave.ogg'] }),
  //   roundStart: new Howl({ src: ['/audio/roundStart.ogg'] }),
  //   roundSuccess: new Howl({ src: ['/audio/roundEndSuccess.ogg'] }),
  //   roundEnd: new Howl({ src: ['/audio/roundEndFailure.ogg'] }),
  //   playerGuessed: new Howl({ src: ['/audio/playerGuessed.ogg'] }),
  //   tick: new Howl({ src: ['/audio/tick.ogg'] }),
  // });
  const getAudio = (eventType: SoundType) => {
    return new Howl({ src: [`/audio/${eventType}.ogg`] });
  }
  const playSound = (eventType: SoundType) => {

    const doodleSound = getAudio(eventType);
    if (doodleSound) {
      doodleSound.play()
    }
  }

  return { playSound };
}

export default useDoodleSound
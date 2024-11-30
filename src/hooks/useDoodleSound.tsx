"use client";
import { Howl } from "howler";
import { useCallback, useRef } from "react";

type SoundType =
  | "join"
  | "leave"
  | "roundStart"
  | "roundSuccess"
  | "roundEnd"
  | "playerGuessed"
  | "tick";

// const soundPaths: Record<SoundType, string> = {
//   join: "/audio/join.ogg",
//   leave: "/audio/leave.ogg",
//   roundStart: "/audio/roundStart.ogg",
//   roundSuccess: "/audio/roundEndSuccess.ogg",
//   roundEnd: "/audio/roundEndFailure.ogg",
//   playerGuessed: "/audio/playerGuessed.ogg",
//   tick: "/audio/tick.ogg",
// };

function useDoodleSound() {
  const playlist = useRef<Record<SoundType, Howl>>({
    join: new Howl({ src: ["/audio/join.ogg"] }),
    leave: new Howl({ src: ["/audio/leave.ogg"] }),
    roundStart: new Howl({ src: ["/audio/roundStart.ogg"] }),
    roundSuccess: new Howl({ src: ["/audio/roundEndSuccess.ogg"] }),
    roundEnd: new Howl({ src: ["/audio/roundEndFailure.ogg"] }),
    playerGuessed: new Howl({ src: ["/audio/playerGuessed.ogg"] }),
    tick: new Howl({ src: ["/audio/tick.ogg"] }),
  });


  // Play a sound
  const playSound = useCallback(
    (eventType: SoundType) => {
      const sound = playlist.current[eventType];
      if (sound) {
        try {
          sound.seek(0);
          sound.play();
        } catch (error) {
          console.warn("Error playing sound:", error);
        }
      } else {
        console.warn(`Sound not found for event type: ${eventType}`);
      }
    }, []);

  return { playSound };
}

export default useDoodleSound;

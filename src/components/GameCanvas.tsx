"use client"
// import { motion } from "framer-motion"
import Image from "next/image"
// import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { roomSettings } from "@/lib/utils";
import { motion } from "framer-motion";
import { Checkbox } from "./ui/checkbox";

// import { Textarea } from "@nextui-org/react";
function GameCanvas() {
  return (
    <>
      {/* <div className="absolute inset-0 h-full w-full rounded-xl blur-xl bg-gradientRed opacity-60 -z-10"></div> */}

      <canvas width={800} height={600} className="w-full h-auto rounded-xl" style={{ cursor: 'default' }}></canvas>

      <div className="overlay absolute inset-0 h-full w-full p-2 bg-gray-200"></div>

      <div className="overlay-content absolute inset-0 h-full w-full md:p-2 bg-gradient-to-tr from-zinc-900 to-zinc-800">
        <div className="text"></div>
        <div className="words"></div>

        <div className="reveal">
          <p>
            <span data-translate="text">The word was</span>
            <span className="word"></span>
          </p>
          <div className="reason"></div>
          <div className="player-container"></div>
        </div>

        <div className="result">
          <div className="message">
            <b className="winner-name"></b>
            <span className="winner-text"></span>
          </div>
          <div className="podests">
            <div className="podest-1"></div>
            <div className="podest-2"></div>
            <div className="podest-3"></div>
          </div>
          <div className="ranks"></div>
        </div>

        <div className="room show flex flex-col gap-2 w-full h-full animate-in zoom-in-50 slide-in-from-top-full ease-out duration-300">
          <div className="group-settings md:py-3 pr-1 overflow-y-scroll scrollbar-thumb-zinc-600 scrollbar-track-transparent scrollbar-thin">
            <div className="key">
              <Image width="0" height="0" className="h-8 w-auto" unoptimized src="/img/setting_1.gif" alt="Players Setting" />
              <span>Players</span>
            </div>
            <div className="value">

              <Select
                aria-label='players'
                name='players'
                defaultValue='8'
              >
                <SelectTrigger className='border-stone-600 shrink-0 focus:border-none outline-none'>
                  <SelectValue placeholder="players" />
                </SelectTrigger>
                <SelectContent>
                  {roomSettings.players.map((val) => (
                    <SelectItem key={val} value={val}>
                      {val}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

            </div>


            <div className="key drop-shadow-xl">
              <Image width="0" height="0" className="h-8 w-auto" unoptimized src="/img/setting_2.gif" alt="Drawtime Setting" />
              <span data-translate="text">Drawtime</span>
            </div>
            <div className="value">
              <Select
                aria-label='drawtime'
                name='drawtime'
                defaultValue='60'
              >
                <SelectTrigger className='border-stone-600 shrink-0 focus:border-none outline-none'>
                  <SelectValue placeholder="Drawtime" />
                </SelectTrigger>
                <SelectContent>
                  {roomSettings.drawtime.map((val) => (
                    <SelectItem key={val} value={val}>
                      {val}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="key">
              <Image width="0" height="0" className="h-8 w-auto" unoptimized src="/img/setting_3.gif" alt="Rounds Setting" />
              <span data-translate="text">Rounds</span>
            </div>
            <div className="value">
              <Select
                aria-label='rounds'
                name='rounds'
                defaultValue='3'
              >
                <SelectTrigger className='border-stone-600 shrink-0 focus:border-none outline-none'>
                  <SelectValue placeholder="Rounds" />
                </SelectTrigger>
                <SelectContent>
                  {roomSettings.rounds.map((val) => (
                    <SelectItem key={val} value={val}>
                      {val}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="key">
              <Image width="0" height="0" className="h-8 w-auto" unoptimized src="/img/setting_6.gif" alt="Game Mode Setting" />
              <span data-translate="text">Game Mode</span>
            </div>
            <div className="value">
              <Select
                aria-label='modes'
                name='modes'
                defaultValue='Normal'
              >
                <SelectTrigger className='border-stone-600 shrink-0 focus:border-none outline-none'>
                  <SelectValue placeholder="Modes" />
                </SelectTrigger>
                <SelectContent>
                  {roomSettings.modes.map((val) => (
                    <SelectItem key={val} value={val}>
                      {val}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="key">
              <Image width="0" height="0" className="h-8 w-auto" unoptimized src="/img/setting_4.gif" alt="Word Count Setting" />
              <span data-translate="text">Word Count</span>
            </div>
            <div className="value">
              <Select
                aria-label='Wordcount'
                name='Wordcount'
                defaultValue='3'
              >
                <SelectTrigger className='border-stone-600 shrink-0 focus:border-none outline-none'>
                  <SelectValue placeholder="Word Counts" />
                </SelectTrigger>
                <SelectContent>
                  {roomSettings.wordcount.map((val) => (
                    <SelectItem key={val} value={val}>
                      {val}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

          </div>

          <div className="group-customwords">
            <div className="game-room-name text-[1.2em] sm:text-[1em] lg:text-[1.2em]">
              <div data-translate="text">Custom words</div>

              <div className="game-room-checkbox flex items-center space-x-2">
                <label
                  htmlFor="customwords"
                  className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Use custom words only
                </label>
                <Checkbox id="customwords" className="w-5 h-5 landscape:w-6 landscape:h-6" />
              </div>

            </div>
            {/* <textarea
              id="item-settings-customwords"
              maxLength={20000}
              spellCheck={false}
              className="flex-auto rounded-lg p-3 bg-gray-100 outline-none"
              placeholder="Minimum of 10 words. 1-32 characters per word! 20000 characters maximum. Separated by a , (comma)"
            ></textarea> */}

            <Textarea
              id="customwords"
              maxLength={20000}
              spellCheck={false}
              className="flex-auto rounded-lg p-3 md:text-lg bg-zinc-800 border-2 border-slate-800 outline-none"
              placeholder="Minimum of 10 words. 1-32 characters per word! 20000 characters maximum. Separated by a , (comma)" />
          </div>

          <div className="group-buttons flex items-center gap-2 w-full text-[1.4em] landscape:text-[1.8em] h-[2em] max-h-16 text-gray-200 text-xl font-semibold tracking-wide">
            <motion.button whileTap={{ scale: 0.95 }} id="button-start-game" className="bg-green-500 h-full w-3/5 rounded-sm landscape:rounded-md">
              <span data-translate="text">Start!</span>
            </motion.button>
            <motion.button whileTap={{ scale: 0.95 }} id="button-invite" className="bg-blue-500 h-full w-2/5 rounded-sm landscape:rounded-md flex justify-center items-center gap-2">
              <Image width="0" height="0" className="h-[1.4em] landscape:h-8 w-auto" unoptimized src="/img/link.svg" alt="Invite Icon" />
              <span data-translate="text">Invite</span>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  )
}

export default GameCanvas

// dark:
// bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-black


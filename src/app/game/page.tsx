"use client"
import GameCanvas from '@/components/GameCanvas';
import Players from '@/components/Players';
import Toolbar from '@/components/Toolbar';
import { Input } from '@/components/ui/input';
import useDoodleSound from '@/hooks/useDoodleSound';
import '@/styles/game.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

function Game() {
  const { playSound } = useDoodleSound();

  useEffect(() => {
    playSound("join");
  }, [playSound]);

  return (
    <div id='game' className='h-[100vh] overflow-hidden relative z-20 max-w-[1310px] m-auto lg:p-2'>
      <div id='game-wrapper' className='game-wrapper w-full h-[100vh]'>

        <div id="game-logo" style={{ gridArea: 'logo' }} className="game-logo hidden landscape:flex">
          <Link href={'/'}>
            <Image src="/img/logo.gif" priority width="0" height="0" className='h-16 w-auto' alt="" />
          </Link>
        </div>

        <div id="game-bar" style={{ gridArea: 'bar' }} className='game-bar bg-gradientNgrayWhite text-gray-700 dark:text-slate-100 dark:bg-gradientNgray landscape:border border-gray-200 dark:border-gray-700 backdrop-blur-md landscape:rounded-xl shadow-md'>
          <div id="game-clock">
            <div className="text">0</div>
          </div>
          <div id="game-round">
            <div className="text">Round 1 of 3</div>
          </div>

          <div id="game-word" className='flex flex-col items-center justify-center h-full ml-[200px] mr-[300px]'>
            <div className="description waiting">WAITING</div>
            <div className="word" style={{ display: "none" }}></div>
            <div className="hints">
              <div className="container" style={{ display: "none" }}>
              </div>
            </div>
          </div>

          <div id="game-settings" data-tooltip="Settings" data-tooltipdir="W">
            <div className="icon hover:scale-110"></div>
          </div>
        </div>


        <div id="game-players" className="game-players relative w-full landscape:w-[200px] scrollbar-thin overflow-y-auto max-h-[600px] flex flex-col">
          <Players />
        </div>

        <div id="game-canvas" className="game-canvas overflow-hidden landscape:rounded-xl relative text-gray-200 landscape:border border-gray-600 landscape:shadow-[0px_0px_24px_5px_rgba(0,0,0,0.4)] landscape:dark:shadow-[0px_0px_20px_5px_rgba(225,225,225,0.1)]">
          <GameCanvas />
        </div>

        <div id="game-toolbar">
          <Toolbar />
        </div>

        <div id="game-chat" className="game-chat flex flex-col font-[1.2em] w-full landscape:w-[300px] bg-gray-50 dark:bg-ngray landscape:rounded-xl border border-gray-300 dark:border-gray-800">

          <div className="chat-content flex flex-grow w-full px-3 pt-[24px]"><p className='w-full'><b>MrnoobcobraTh is now the room owner!</b><span></span></p></div>

          <div key={'chat-input'} className="w-full self-end p-1 hidden landscape:flex">
            <form className="chat-form w-full">
              <Input type="text"
                aria-label='guess'
                name='guess'
                placeholder="Type your guess here..."
                spellCheck="false"
                autoComplete="off"
                maxLength={100}
                // value={""}
                className='border-gray-300 focus-visible:border-sky-300 focus-visible:ring-sky-300 dark:border-gray-700  dark:focus-visible:border-transparent  dark:focus-visible:ring-primary outline-none'
              // onChange={(e) => setName(e.target.value)}
              />
            </form>
          </div>
        </div>

        <div id="game-players-footer" style={{ gridArea: 'footer' }} className="game-players-footer hidden landscape:flex"></div>
        {/* <div id="game-toolbar" style={{ gridArea: '' }} className="game-toolbar hidden landscape:flex"></div> */}

        <div id="game-chat-input-mobile" className=' landscape:hidden' style={{ gridArea: "input" }}>
          <form className="chat-form">
            <Input type="text"
              aria-label='guess'
              name='guess'
              placeholder="Type your guess here..."
              spellCheck="false"
              autoComplete="off"
              maxLength={100}
              // value={""}
              className='font-semibold dark:border-gray-500 backdrop-blur-md h-12 focus-visible:ring-0 outline-none rounded-none text-center'
            // onChange={(e) => setName(e.target.value)}
            />
            <div className="characters"></div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Game

// shadow-[0px_0px_50px_10px_rgba(225,225,225,0.1)]
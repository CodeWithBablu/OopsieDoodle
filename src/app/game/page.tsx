"use client"
import GameCanvas from '@/components/GameCanvas';
import Players from '@/components/Players';
import useDoodleSound from '@/hooks/useDoodleSound';
import '@/styles/game.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

function Game() {
  const { playSound } = useDoodleSound();

  useEffect(() => {
    playSound("join");

    return () => {
    }
  }, [playSound]);

  return (
    <div id='game' className='h-[100vh] overflow-hidden relative z-20 max-w-[1310px] m-auto lg:p-2'>
      <div id='game-wrapper' className='game-wrapper w-full h-[100vh] toolbar-hidden landscape::h-[80vh]'>
        <div id="game-logo" style={{ gridArea: 'logo' }} className="game-logo">
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


        <div id="game-players" className="game-players relative w-full landscape:w-[200px] max-h-[600px] flex flex-col">
          <Players />
        </div>

        <div id="game-canvas" className="game-canvas overflow-hidden landscape:rounded-xl relative text-gray-200 landscape:border border-gray-600 landscape:shadow-[0px_0px_30px_10px_rgba(0,0,0,0.4)] landscape:dark:shadow-[0px_0px_20px_5px_rgba(225,225,225,0.1)]">
          <GameCanvas />
        </div>

        <div id="game-chat" className="game-chat w-full landscape:w-[300px] bg-ngray landscape:rounded-xl border border-gray-600"></div>
        <div id="game-players-footer" style={{ gridArea: 'footer' }} className="game-players-footer"></div>
        <div id="game-toolbar" style={{ gridArea: '', display: "none" }} className="game-toolbar hidden"></div>
      </div>
    </div>
  )
}

export default Game

// shadow-[0px_0px_50px_10px_rgba(225,225,225,0.1)]
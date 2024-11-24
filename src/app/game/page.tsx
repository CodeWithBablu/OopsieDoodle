import GameCanvas from '@/components/GameCanvas';
import Players from '@/components/Players';
import '@/styles/game.css';
type Props = {}

function Game({ }: Props) {
  return (
    <div id='game' className='h-[100vh] relative z-20 max-w-[1310px] m-auto p-2'>
      <div id='game-wrapper' className='game-wrapper w-full h-[100vh] lg:h-[80vh] gap-5'>
        <div id="game-logo" style={{ gridArea: 'logo' }} className="game-logo pl-56">
          <img src="/img/logo.png" className='h-32 scale-125' alt="" />
        </div>
        <div id="game-bar" style={{ gridArea: 'bar' }} className="game-bar"></div>

        <div id="game-players" style={{ gridArea: 'players' }} className="game-players w-[200px] relative flex flex-col bg-gray-100 rounded-md">
          <Players />
        </div>

        <div id="game-canvas" style={{ gridArea: 'canvas' }} className="game-canvas relative">
          <GameCanvas />
        </div>

        <div id="game-chat" style={{ gridArea: 'chat' }} className="game-chat w-[300px] bg-ngray rounded-xl border border-gray-600 shadow-[0px_0px_50px_10px_rgba(225,225,225,0.1)]"></div>
        <div id="game-players-footer" style={{ gridArea: 'footer' }} className="game-players-footer"></div>
        <div id="game-toolbar" style={{ gridArea: 'tools' }} className="game-toolbar"></div>
      </div>
    </div>
  )
}

export default Game
import { getBgPosition, playersJoined } from "@/lib/utils"
import clsx from "clsx"

// type Props = {}

function Players() {
  return (
    <>
      {
        playersJoined && (
          playersJoined.map((player, index) => (
            <div key={player.id} className={clsx('text-gray-700 player relative h-12 w-full', {
              'bg-gray-100': index % 2 === 0,
              'bg-gray-300': index % 2 !== 0,
            })}>
              <div className="player-info relative h-full flex flex-col justify-center">
                <div className="player-rank absolute top-1 left-1 text-lg font-semibold">#{player.id}</div>
                <div className="player-name text-center font-semibold">{player.name}</div>
                <div className="player-score text-center text-sm">{player.points} points</div>
              </div>

              <div className="player-icons absolute bottom-0 left-1">
                <div className={clsx(`icon owner`, {
                  'hidden': player.id != 1,
                })}></div>
                <div className="icon muted hidden"></div>
              </div>

              <div className="player-avatar-container w-[48px] h-[48px]">
                <div className="avatar fit h-full w-full">
                  <div className="color" style={{ backgroundPosition: getBgPosition(player.avatar[0]) }}></div>
                  <div className="eyes bounce" style={{ backgroundPosition: getBgPosition(player.avatar[1]) }}></div>
                  <div className="mouth bounce" style={{ backgroundPosition: getBgPosition(player.avatar[2]) }}></div>
                  <div className={clsx(`owner`, {
                    'hidden': player.id != 1,
                  })} style={{ backgroundPosition: getBgPosition(player.avatar[4]) }}></div>
                </div>
              </div>
            </div>
          ))
        )
      }
    </>
  )
}

export default Players
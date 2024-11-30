import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";


function Toolbar() {
  return (
    <>


      <Popover>
        <PopoverTrigger className="w-full">
          <div
            className="color-preview-mobile flex landscape:hidden"
            style={{ backgroundColor: "rgb(223, 105, 167)" }}></div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 border-none -translate-y-[calc(100%+var(--UNIT)+10px)]">
          <div
            className="mobile-colors w-[100vw] max-w-[600px]"
            data-tooltip="Left-/Rightclick to choose a color! Brown"
            data-tooltipdir="S"
          >
            <div className="top h-[50%] flex">
              <div className="color" style={{ backgroundColor: "rgb(255, 255, 255)" }} />
              <div className="color" style={{ backgroundColor: "rgb(193, 193, 193)" }} />
              <div className="color" style={{ backgroundColor: "rgb(239, 19, 11)" }} />
              <div className="color" style={{ backgroundColor: "rgb(255, 113, 0)" }} />
              <div className="color" style={{ backgroundColor: "rgb(255, 228, 0)" }} />
              <div className="color" style={{ backgroundColor: "rgb(0, 204, 0)" }} />
              <div className="color" style={{ backgroundColor: "rgb(0, 255, 145)" }} />
              <div className="color" style={{ backgroundColor: "rgb(0, 178, 255)" }} />
              <div className="color" style={{ backgroundColor: "rgb(35, 31, 211)" }} />
              <div className="color" style={{ backgroundColor: "rgb(163, 0, 186)" }} />
              <div className="color" style={{ backgroundColor: "rgb(223, 105, 167)" }} />
              <div className="color" style={{ backgroundColor: "rgb(255, 172, 142)" }} />
              <div className="color" style={{ backgroundColor: "rgb(160, 82, 45)" }} />
            </div>
            <div className="bottom h-[50%] flex">
              <div className="color" style={{ backgroundColor: "rgb(0, 0, 0)" }} />
              <div className="color" style={{ backgroundColor: "rgb(80, 80, 80)" }} />
              <div className="color" style={{ backgroundColor: "rgb(116, 11, 7)" }} />
              <div className="color" style={{ backgroundColor: "rgb(194, 56, 0)" }} />
              <div className="color" style={{ backgroundColor: "rgb(232, 162, 0)" }} />
              <div className="color" style={{ backgroundColor: "rgb(0, 70, 25)" }} />
              <div className="color" style={{ backgroundColor: "rgb(0, 120, 93)" }} />
              <div className="color" style={{ backgroundColor: "rgb(0, 86, 158)" }} />
              <div className="color" style={{ backgroundColor: "rgb(14, 8, 101)" }} />
              <div className="color" style={{ backgroundColor: "rgb(85, 0, 105)" }} />
              <div className="color" style={{ backgroundColor: "rgb(135, 53, 84)" }} />
              <div className="color" style={{ backgroundColor: "rgb(204, 119, 77)" }} />
              <div className="color" style={{ backgroundColor: "rgb(99, 48, 13)" }} />
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <div className="color-preview">
        <svg
          id="color-preview-primary"
          viewBox="0 0 1 1"
          style={{ fill: "rgb(223, 105, 167)" }}
        >
          <polygon points="0,0 0,1 1,1 1,0" />
        </svg>
        <svg
          id="color-preview-secondary"
          viewBox="0 0 1 1"
          style={{ fill: "rgb(163, 0, 186)" }}
        >
          <polygon points="0.85,0 1,0 1,1 0.15,1" />
        </svg>
      </div>
      <div
        className="colors"
        data-tooltip="Left-/Rightclick to choose a color! Brown"
        data-tooltipdir="S"
      >
        <div className="top h-[50%] flex">
          <div className="color" style={{ backgroundColor: "rgb(255, 255, 255)" }} />
          <div className="color" style={{ backgroundColor: "rgb(193, 193, 193)" }} />
          <div className="color" style={{ backgroundColor: "rgb(239, 19, 11)" }} />
          <div className="color" style={{ backgroundColor: "rgb(255, 113, 0)" }} />
          <div className="color" style={{ backgroundColor: "rgb(255, 228, 0)" }} />
          <div className="color" style={{ backgroundColor: "rgb(0, 204, 0)" }} />
          <div className="color" style={{ backgroundColor: "rgb(0, 255, 145)" }} />
          <div className="color" style={{ backgroundColor: "rgb(0, 178, 255)" }} />
          <div className="color" style={{ backgroundColor: "rgb(35, 31, 211)" }} />
          <div className="color" style={{ backgroundColor: "rgb(163, 0, 186)" }} />
          <div className="color" style={{ backgroundColor: "rgb(223, 105, 167)" }} />
          <div className="color" style={{ backgroundColor: "rgb(255, 172, 142)" }} />
          <div className="color" style={{ backgroundColor: "rgb(160, 82, 45)" }} />
        </div>
        <div className="bottom h-[50%] flex">
          <div className="color" style={{ backgroundColor: "rgb(0, 0, 0)" }} />
          <div className="color" style={{ backgroundColor: "rgb(80, 80, 80)" }} />
          <div className="color" style={{ backgroundColor: "rgb(116, 11, 7)" }} />
          <div className="color" style={{ backgroundColor: "rgb(194, 56, 0)" }} />
          <div className="color" style={{ backgroundColor: "rgb(232, 162, 0)" }} />
          <div className="color" style={{ backgroundColor: "rgb(0, 70, 25)" }} />
          <div className="color" style={{ backgroundColor: "rgb(0, 120, 93)" }} />
          <div className="color" style={{ backgroundColor: "rgb(0, 86, 158)" }} />
          <div className="color" style={{ backgroundColor: "rgb(14, 8, 101)" }} />
          <div className="color" style={{ backgroundColor: "rgb(85, 0, 105)" }} />
          <div className="color" style={{ backgroundColor: "rgb(135, 53, 84)" }} />
          <div className="color" style={{ backgroundColor: "rgb(204, 119, 77)" }} />
          <div className="color" style={{ backgroundColor: "rgb(99, 48, 13)" }} />
        </div>
      </div>

      <div
        className="sizes"
        data-tooltip="Click to change brush size!"
        data-tooltipdir="S"
      >
        {/* <div className="size-preview clickable">
          <div className="icon" style={{ backgroundSize: "55.5556%" }} />
        </div> */}

        <Popover>
          <PopoverTrigger className="w-full">
            <div className="size-preview clickable w-full">
              <div className="icon" style={{ backgroundSize: "55.5556%" }} />
            </div>
          </PopoverTrigger>
          <PopoverContent className="bg-white w-auto p-1 border-none">
            <div className="container open flex flex-col">
              <div className="size clickable">
                <div className="icon" style={{ backgroundSize: "20%" }} />
              </div>
              <div className="size clickable clicked">
                <div className="icon" style={{ backgroundSize: "33.3333%" }} />
              </div>
              <div className="size clickable clicked selected">
                <div className="icon" style={{ backgroundSize: "55.5556%" }} />
              </div>
              <div className="size clickable">
                <div className="icon" style={{ backgroundSize: "82.2222%" }} />
              </div>
              <div className="size clickable">
                <div className="icon" style={{ backgroundSize: "100%" }} />
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* <div className="container open">
          <div className="arrow" />
          <div className="size clickable">
            <div className="icon" style={{ backgroundSize: "20%" }} />
          </div>
          <div className="size clickable clicked">
            <div className="icon" style={{ backgroundSize: "33.3333%" }} />
          </div>
          <div className="size clickable clicked selected">
            <div className="icon" style={{ backgroundSize: "55.5556%" }} />
          </div>
          <div className="size clickable">
            <div className="icon" style={{ backgroundSize: "82.2222%" }} />
          </div>
          <div className="size clickable">
            <div className="icon" style={{ backgroundSize: "100%" }} />
          </div>
        </div> */}
      </div>

      <div className="toolbar-group-tools">
        <div
          className="tool clickable selected clicked"
          data-tooltip="Brush"
          data-tooltipdir="S"
        >
          <div
            className="icon"
            style={{ backgroundImage: 'url("/img/pen.gif")' }}
          />
          <div className="key">B</div>
        </div>
        <div
          className="tool clickable clicked"
          data-tooltip="Fill"
          data-tooltipdir="S"
        >
          <div
            className="icon"
            style={{ backgroundImage: 'url("/img/fill.gif")' }}
          />
          <div className="key">F</div>
        </div>
      </div>

      <div className="toolbar-group-actions">
        <div className="tool clickable" data-tooltip="Undo" data-tooltipdir="S">
          <div
            className="icon"
            style={{ backgroundImage: 'url("/img/undo.gif")' }}
          />
          <div className="key">U</div>
        </div>
        <div className="tool clickable" data-tooltip="Clear" data-tooltipdir="S">
          <div
            className="icon"
            style={{ backgroundImage: 'url("/img/clear.gif")' }}
          />
          <div className="key">C</div>
        </div>
      </div>
    </>
  )
}

export default Toolbar
"use client"
import '@/styles/home.css';
import Carousel from "@/components/ui/Carousel";
import LogoBig from "@/components/LogoBig";
import AvatarCustomizer from "@/components/AvatarCustomizer";
import Image from 'next/image';

export default function Home() {

  return (
    <div className="h-full w-full relative flex items-center justify-center">

      <div id="home" className=" z-10 w-full flex flex-col items-center">

        <LogoBig />

        <AvatarCustomizer />

        <div className="polygon w-full h-20 bg-sky-100/70 dark:bg-ngray/80">
        </div>
        <div className="footer w-full pt-5 pb-10 bg-sky-100/80 dark:bg-ngray/80">

          <div className="grid max-w-7xl m-auto auto-rows-min justify-center lg:grid-cols-3 lg:px-12 xl:px-20 gap-y-10 lg:gap-5">

            <div className="section-panel relative border-gray-300 dark:border-stone-700 border backdrop-blur-md p-5 rounded-xl text-gray-600 dark:text-gray-400">
              <Image width="0" height="0" unoptimized alt='info' className="icon" src="/img/about.gif" /><h2 data-translate="text" className="text-gray-800 dark:text-gray-200">About</h2>
              <b>skribbl.io </b><span data-translate="text">is a free online multiplayer drawing and guessing pictionary game.</span><br /><br /><span data-translate="text">A normal game consists of a few rounds, where every round a player has to draw their chosen word and others have to guess it to gain points!</span><br /><br /><span data-translate="text">The person with the most points at the end of the game, will then be crowned as the winner!</span><br /><span data-translate="text">Have fun!</span>
            </div>

            <div className="section-panel relative border-gray-300 dark:border-stone-700 border backdrop-blur-md p-5 rounded-xl text-gray-600 dark:text-gray-400">
              <Image width="0" height="0" unoptimized alt='info' className="icon" src="/img/news.gif" /><h2 data-translate="text" className="text-gray-800 dark:text-gray-200">News</h2>

              <div className="overflow-y-scroll max-h-[24rem] scrollbar-thumb-sky-300/80 scrollbar-thin">
                <h3 className="text-blue-500 font-medium tracking-wide">Update!!</h3>
                <hr className="border-gray-500 my-2" />
                <div className="content prose dark:prose-invert">Hello!<ul><li>Redesign of the page</li><li>Mobile support</li><li>Reworked toolbar<ul><li>Undo button</li><li>More colors </li><li>Left- and rightclick to select colors and draw</li><li>Experimental support for pressure touch input</li><li>Configurable hotkeys</li></ul></li><li>Better player interactions/moderation<ul><li>Ability to kick and ban any player as a room owner </li><li>Votekick, Mute and Report naughty players</li></ul></li><li>Invite your friends to public rooms</li><li>More room settings<ul><li>Increased player count in custom rooms to 20</li><li>Set the amount of Words to choose from (1-5)</li><li>Set the amount of Hints or disable them completely</li><li>Word modes: Normal, Hidden and Combination</li></ul></li><li>Updated a bunch of Languages<ul><li>Added lots of new words to English and German</li><li>Added Russian</li><li>Added Japanese</li></ul></li><li>A dozen new avatar options :)</li></ul><br />Hope you enjoy it!<br />Please let me know if you find any bugs, or if you have any suggestions!<br /><br /><span>Thanks! <b>- Mel</b></span></div>
              </div>
            </div>

            <div className="section-panel relative border-gray-300 dark:border-stone-700 border backdrop-blur-md p-5 rounded-xl text-gray-500 dark:text-gray-400">
              <Image width="0" height="0" unoptimized alt='info' className="icon" src="/img/how.gif" /><h2 data-translate="text" className="text-gray-800 dark:text-gray-200">How to play</h2>
              <Carousel />
            </div>
          </div>
        </div>

      </div >



    </div >
  );
}
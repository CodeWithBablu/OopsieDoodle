"use client"

import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { avatarRange, getBgPosition, getRandomIntInRange, languageOptions } from '@/lib/utils';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Image from 'next/image';

const AvatarCustomizer = () => {

  const [loadingAvatar, setLoadingAvatar] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>('0');
  const [avatar, setAvatar] = useState<number[]>([5, 5, 5]);

  // const [avatarStyle, setAvatarStyle] = useState({
  //   color: { backgroundPosition: '-500% 0%' },
  //   eyes: { backgroundPosition: '-500% 0%' },
  //   mouth: { backgroundPosition: '-500% 0%' },
  //   special: { display: 'none' },
  //   owner: { display: 'block' },
  // });

  useEffect(() => {
    setLoadingAvatar(true);
    if (typeof window !== "undefined") {
      const local_name = localStorage.getItem('name');
      const local_lang = localStorage.getItem('lang');
      const local_avatar = localStorage.getItem('avatar');

      if (local_name) setName(local_name);
      if (local_lang) setSelectedLanguage(local_lang);
      if (local_avatar) setAvatar(JSON.parse(local_avatar));
      else
        handleRandomize();
    }
    setLoadingAvatar(false);
  }, [])


  const handleAvatarChange = (dir: ("left" | "right"), trait: 0 | 1 | 2) => {
    setAvatar((prev) => {
      const newAvatar = [...prev as number[]];
      const range = avatarRange[trait];

      newAvatar[trait] = dir === "left"
        ? (newAvatar[trait] === 0 ? range - 1 : newAvatar[trait] - 1)
        : (newAvatar[trait] === range - 1 ? 0 : newAvatar[trait] + 1);

      return newAvatar;
    });
  };


  const handleRandomize = () => {
    // Add logic to randomize avatar styles
    const color = getRandomIntInRange(0, 28);
    const eye = getRandomIntInRange(0, 57);
    const mouth = getRandomIntInRange(0, 51);

    setAvatar([color, eye, mouth]);
  };

  const handlePlay = () => {
    console.log('Name:', name);
    console.log('Selected Language:', selectedLanguage);

    if (typeof window !== "undefined") {
      localStorage.setItem('name', name);
      localStorage.setItem('avatar', JSON.stringify(avatar));
    }
    // Add play logic here
  };


  return (
    <div className="panel mt-5 mb-10 bg-white dark:bg-ngray w-[400px] flex flex-col justify-center p-5 shadow-[0px_0px_50px_10px_rgba(125,211,252,0.3)] dark:shadow-[0px_0px_50px_10px_rgba(225,225,225,0.1)] rounded-xl">

      <div className="container-name-lang flex gap-2 mb-5">
        <div key={'name-input'} className="flex w-3/5 flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input type="text"
            aria-label='name'
            name='name'
            placeholder="Enter your name"
            spellCheck="false"
            autoComplete="off"
            maxLength={21}
            value={name}
            className=' dark:border-gray-500 focus-visible:border-none outline-none'
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <Select
          aria-label='select-lang'
          name='lang'
          defaultValue='0'
        >
          <SelectTrigger className=' dark:border-gray-500 focus:border-none outline-none'>
            <SelectValue placeholder="Lang" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(languageOptions).map(([key, lang]) => (
              <SelectItem key={key} value={key}>
                {lang}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

      </div>

      <div className="avatar-customizer">
        <div className="arrows left">
          <div onClick={() => handleAvatarChange("left", 1)} className="arrow left" data-avatar-index="1"></div>
          <div onClick={() => handleAvatarChange("left", 2)} className="arrow left" data-avatar-index="2"></div>
          <div onClick={() => handleAvatarChange("left", 0)} className="arrow left" data-avatar-index="0"></div>
        </div>
        <div className="container">
          {
            !loadingAvatar && (
              <div className="avatar fit h-full w-full">
                <div className="color" style={{ backgroundPosition: getBgPosition(avatar[0]) }}></div>
                <div className="eyes bounce" style={{ backgroundPosition: getBgPosition(avatar[1]) }}></div>
                <div className="mouth bounce" style={{ backgroundPosition: getBgPosition(avatar[2]) }}></div>
                <div className="owner" style={{ backgroundPosition: getBgPosition(avatar[4]) }}></div>
              </div>
            )
          }
        </div>
        <div className="arrows right">
          <div onClick={() => handleAvatarChange("right", 1)} className="arrow right" data-avatar-index="1"></div>
          <div onClick={() => handleAvatarChange("right", 2)} className="arrow right" data-avatar-index="2"></div>
          <div onClick={() => handleAvatarChange("right", 0)} className="arrow right" data-avatar-index="0"></div>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className='absolute top-2 right-5' onClick={handleRandomize}><Image src={'/img/randomize.gif'} sizes="(min-width: 620px) 20vw, 80vw" unoptimized alt='randomize-icon' width={32} height={32} /></TooltipTrigger>
            <TooltipContent className='text-sm font-medium bg-blue-600 text-gray-200'>
              <p>Randomize your avatar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

      </div>

      <motion.button whileTap={{ scale: 0.9 }} className="text-gray-100 button-play bg-green-600 p-2 rounded-md text-xl my-2" onClick={handlePlay}>
        <span>Play!</span>
      </motion.button>
      <Link href={'/game'} className='w-full'>
        <motion.button whileTap={{ scale: 0.9 }} className="text-gray-100 button-create bg-blue-600 p-2 rounded-md text-xl w-full">
          <span>Create Private Room</span>
        </motion.button>
      </Link>
    </div>
  );
};

export default AvatarCustomizer;

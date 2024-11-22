import React, { useEffect, useState } from 'react';
import { Tooltip, Input, Select, SelectSection, SelectItem } from "@nextui-org/react";
import { avatarRange, getBgPosition, getRandomIntInRange, languageOptions } from '@/lib/utils';

const AvatarCustomizer = () => {
  const [name, setName] = useState<string>(() => {
    if (window) {
      if (localStorage.getItem('name'))
        return localStorage.getItem('name') as string;
    }
    return '';
  });

  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (window) {
      if (localStorage.getItem('lang'))
        return localStorage.getItem('lang') as string;
    }
    return '0';
  });

  const [avatar, setAvatar] = useState<number[]>(() => {
    if (window) {
      if (localStorage.getItem('avatar'))
        return JSON.parse(localStorage.getItem('avatar') as string);
    }
    return [5, 5, 5];
  });

  // const [avatarStyle, setAvatarStyle] = useState({
  //   color: { backgroundPosition: '-500% 0%' },
  //   eyes: { backgroundPosition: '-500% 0%' },
  //   mouth: { backgroundPosition: '-500% 0%' },
  //   special: { display: 'none' },
  //   owner: { display: 'block' },
  // });

  useEffect(() => {
    handleRandomize();
    return () => {
    }
  }, [])

  console.log("avatar: ", avatar);


  const handleAvatarChange = (dir: ("left" | "right"), trait: 0 | 1 | 2) => {
    setAvatar((prev) => {
      const newAvatar = [...prev];
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

    if (typeof window != undefined) {
      localStorage.setItem('name', name);
      localStorage.setItem('avatar', JSON.stringify(avatar));
    }
    // Add play logic here
  };


  return (
    <div className="panel mt-5 mb-10 bg-white dark:bg-ngray w-[400px] flex flex-col justify-center p-5 shadow-[0px_0px_50px_10px_rgba(0,113,255,0.4)] dark:shadow-[0px_0px_50px_10px_rgba(225,225,225,0.1)] rounded-xl">

      <div className="container-name-lang flex gap-2 mb-5">
        <div key={'name-input'} className="flex w-3/5 flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input type="text"
            aria-label='name'
            variant={"underlined"}
            placeholder="Enter your name"
            spellCheck="false"
            autoComplete="off"
            maxLength={21}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <Select
          aria-label='select-lang'
          variant='bordered'
          className='w-2/5'
          radius='sm'
          defaultSelectedKeys={['0']}
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          {Object.entries(languageOptions).map(([key, lang]) => (
            <SelectItem key={key}>
              {lang}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="avatar-customizer">
        <div className="arrows left">
          <div onClick={() => handleAvatarChange("left", 1)} className="arrow left" data-avatar-index="1"></div>
          <div onClick={() => handleAvatarChange("left", 2)} className="arrow left" data-avatar-index="2"></div>
          <div onClick={() => handleAvatarChange("left", 0)} className="arrow left" data-avatar-index="0"></div>
        </div>
        <div className="container">
          <div className="avatar fit h-full w-full">
            <div className="color" style={{ backgroundPosition: getBgPosition(avatar[0]) }}></div>
            <div className="eyes bounce" style={{ backgroundPosition: getBgPosition(avatar[1]) }}></div>
            <div className="mouth bounce" style={{ backgroundPosition: getBgPosition(avatar[2]) }}></div>
            <div className="owner" style={{ backgroundPosition: getBgPosition(avatar[4]) }}></div>
            {/* <div className="special" style={{ backgroundPosition: getBgPosition(avatar[3]) }}></div> */}
          </div>
        </div>
        <div className="arrows right">
          <div onClick={() => handleAvatarChange("right", 1)} className="arrow right" data-avatar-index="1"></div>
          <div onClick={() => handleAvatarChange("right", 2)} className="arrow right" data-avatar-index="2"></div>
          <div onClick={() => handleAvatarChange("right", 0)} className="arrow right" data-avatar-index="0"></div>
        </div>

        <Tooltip key={'primary'} showArrow color={"primary"} content={'Randomize your avatar'} radius='sm' className="capitalize">
          <button onClick={handleRandomize} className='absolute top-3 right-3'>
            <img src="/img/randomize.gif" alt="" />
          </button>
        </Tooltip>
      </div>

      <button className="text-gray-100 button-play bg-green-600 p-2 rounded-md text-xl my-2" onClick={handlePlay}>
        <span>Play!</span>
      </button>
      <button className="text-gray-100 button-create bg-blue-600 p-2 rounded-md text-xl">
        <span>Create Private Room</span>
      </button>
    </div>
  );
};

export default AvatarCustomizer;

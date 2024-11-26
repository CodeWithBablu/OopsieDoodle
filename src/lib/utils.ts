import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getRandomIntInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const avatarRange: { [key: string]: number } = {
  '0': 28,
  '1': 57,
  '2': 51,
};


export const getBgPosition = (value: number) => {
  return `${-(value % 10) * 100}% ${-Math.floor(value / 10) * 100}%`;
}

const range = (start: number, end: number): string[] => {
  return Array.from({ length: end - start + 1 }, (_, i) => (start + i).toString());
}

export const roomSettings = {
  players: range(2, 20),
  drawtime: [15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 150, 180, 210, 240].map(String),
  rounds: range(2, 10),
  modes: ['Normal', 'Hidden', 'Combination'],
  wordcount: range(1, 5),
}


export interface Player {
  id: number,
  name: string,
  points: number,
  avatar: number[],
  owner: boolean,
}

export const playersJoined: Player[] = [
  {
    id: 1,
    name: "Zara Night",
    points: 120,
    avatar: [3, 28, 10],
    owner: false,
  },
  {
    id: 2,
    name: "Oliver King",
    points: 95,
    avatar: [8, 22, 6],
    owner: false,
  },
  {
    id: 3,
    name: "Liam Fox",
    points: 150,
    avatar: [15, 42, 20],
    owner: true,
  },
  {
    id: 4,
    name: "Sophia Blaze",
    points: 110,
    avatar: [9, 5, 17],
    owner: false,
  },
  {
    id: 5,
    name: "Jackson Wolf",
    points: 80,
    avatar: [20, 30, 8],
    owner: false,
  },
  {
    id: 6,
    name: "Ava Storm",
    points: 135,
    avatar: [4, 41, 15],
    owner: false,
  },
  {
    id: 7,
    name: "Mason Hunter",
    points: 90,
    avatar: [10, 15, 5],
    owner: false,
  },
  {
    id: 8,
    name: "Emily Rose",
    points: 125,
    avatar: [12, 48, 22],
    owner: false,
  },
  {
    id: 9,
    name: "Daniel Rivers",
    points: 115,
    avatar: [5, 19, 27],
    owner: false,
  },
  {
    id: 10,
    name: "Mia Sky",
    points: 140,
    avatar: [27, 35, 13],
    owner: false,
  },
];

export const languageOptions: { [key: string]: string } = {
  0: "English",
  1: "German",
  2: "Bulgarian",
  3: "Czech",
  4: "Danish",
  5: "Dutch",
  6: "Finnish",
  7: "French",
  8: "Estonian",
  9: "Greek",
  10: "Hebrew",
  11: "Hungarian",
  12: "Italian",
  13: "Japanese",
  14: "Korean",
  15: "Latvian",
  16: "Macedonian",
  17: "Norwegian",
  18: "Portuguese",
  19: "Polish",
  20: "Romanian",
  21: "Russian",
  22: "Serbian",
  23: "Slovakian",
  24: "Spanish",
  25: "Swedish",
  26: "Tagalog",
  27: "Turkish",
};
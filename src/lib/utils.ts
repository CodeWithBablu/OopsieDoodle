import { ClassValue, clsx } from "clsx";
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
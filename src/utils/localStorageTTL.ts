import { GameInfoType } from './types';

export const setWithTTL = (key: string, value: GameInfoType, ttl: number) => {
  const data = {
    value: value,
    ttl: Date.now() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(data));
};

export const getWithTTL = (key: string) => {
  const data = localStorage.getItem(key);
  if (!data) {
    return null;
  }

  const item = JSON.parse(data);
  if (Date.now() > item.ttl) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
};

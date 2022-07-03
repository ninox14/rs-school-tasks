/// <reference types="react-scripts" />

interface CarInterface {
  id: number;
  color: string;
  name: string;
}
interface GarageCarInterface extends CarInterface {
  animationTime?: number;
  isInPause?: boolean;
}

interface CreateCarDTO {
  color: string;
  name: string;
}

type EngineQuery = 'drive' | 'started' | 'stopped';

interface EngineResponseInterface {
  velocity: number;
  distance: number;
  success?: true;
}

interface WinnerResponseInterface {
  id: number;
  wins: number;
  time: number;
}

interface WinnerDTO {
  id: number;
  time: number;
}

interface WinnerInterface extends WinnerDTO {
  name: string;
}

type Order = 'ASC' | 'DESC';
type Sort = 'id' | 'wins' | 'time';
interface FetchWinnersArgumentsInterface {
  order: Order;
  page: number;
  sortBy: Sort;
}

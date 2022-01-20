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

interface EngineDriveResponseInterface {}

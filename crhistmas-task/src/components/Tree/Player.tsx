/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect } from 'react';

import { AudioSvg, Mute } from '../../assets/svg-comps/index';

interface PlayerPropsInterface {
  url: string;
  isPlaying: boolean;
  handlePlayerChange: (val: boolean) => void;
}

const useAudio = (
  url: string,
  isPlaying: boolean,
  handlePlayerChange: (val: boolean) => void
): [boolean, () => void] => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(isPlaying);

  const toggle = () => {
    setPlaying(!playing);
    handlePlayerChange(!playing);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => {
      setPlaying(false);
      handlePlayerChange(false);
    });
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player: FC<PlayerPropsInterface> = ({
  url,
  isPlaying,
  handlePlayerChange,
}) => {
  const [playing, toggle] = useAudio(url, isPlaying, handlePlayerChange);

  return (
    <button className="left__btn" onClick={toggle}>
      {playing ? (
        <Mute className="left__sound" width={36} height={36} />
      ) : (
        <AudioSvg className="left__sound" width={36} height={36} />
      )}
    </button>
  );
};

export default Player;

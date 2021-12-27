import { FC, useCallback, useEffect, useRef, useState } from 'react';
import update from 'immutability-helper';
import './Tree.scss';
import './Lights.scss';
import { Snow } from '../../assets/svg-comps/index';

import { Footer } from '../Footer';
import {
  createDataForDnd,
  ItemType,
  POSSIBLE_LIGHTS,
  treeBgsArr,
  treePngArr,
} from '../tree-logic';
import { useDrop } from 'react-dnd';
import { DragableToy } from './DragableToy';
import { TreeLights } from './TreeLights';
import Snowfall from 'react-snowfall';
import Player from './Player';
import { Button } from '../Button/Button';

const Mp3File: esModuleInterface = require('../../assets/audio/nice.mp3');

export const Tree: FC<TreePagePropsInterface> = ({
  treeBgIndx,
  handleTreeBgChange,
  treePngIndx,
  handleTreePngChange,
  isSnow,
  handleSnowChange,
  favourites,
  isLights,
  handleLightsChange,
  lightsColor,
  handleLightsColorChange,
  isPlaying,
  handlePlayerChange,
  setDefaultTreeState,
}) => {
  const [toysMap, setToysMap] = useState<DragItemDataInterface>({});

  const currBgLink = treeBgsArr[treeBgIndx].link;
  const currPngLink = treePngArr[treePngIndx].link;
  const dataForDnd = createDataForDnd(favourites);
  const containerRef = useRef<HTMLDivElement>(null);
  const startWidth = 120;
  useEffect(() => {
    setToysMap(dataForDnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moveToy = useCallback(
    (
      id: string,
      left: number,
      top: number,
      idx: string,
      isFromTree?: boolean,
      isOver?: boolean
    ) => {
      if (isFromTree && isOver) {
        setToysMap(
          update(toysMap, {
            [id]: {
              // used: { $set: toysMap[id].used + 1 },
              coords: {
                [idx]: { $set: { left, top } },
              },
            },
          })
        );
      } else if (isFromTree && !isOver) {
        setToysMap(
          update(toysMap, {
            [id]: {
              used: { $set: toysMap[id].used - 1 },
              coords: {
                $unset: [idx],
              },
            },
          })
        );
      } else if (!isFromTree && isOver) {
        setToysMap(
          update(toysMap, {
            [id]: {
              used: { $set: toysMap[id].used + 1 },
              coords: {
                [idx]: { $set: { left, top } },
              },
            },
          })
        );
      }
    },
    [toysMap]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemType.TOY,
      drop(item: DragItem, monitor) {
        const rect = containerRef.current?.getBoundingClientRect() as DOMRect;
        const clientOffset = monitor.getClientOffset() as {
          x: number;
          y: number;
        };

        moveToy(
          item.name,
          clientOffset.x - rect.x - 30,
          clientOffset.y - rect.y - 30,
          item.coordIdx,
          item.isFromTree,
          monitor.isOver()
        );
        return undefined;
      },
    }),
    [moveToy]
  );
  const [, outside] = useDrop(
    () => ({
      accept: ItemType.TOY,
      drop(item: DragItem, monitor) {
        moveToy(item.name, 0, 0, item.coordIdx, item.isFromTree, false);
      },
    }),
    [moveToy]
  );
  const [, outsideTree] = useDrop(
    () => ({
      accept: ItemType.TOY,
      drop(item: DragItem, monitor) {
        moveToy(item.name, 0, 0, item.coordIdx, item.isFromTree, false);
      },
    }),
    [moveToy]
  );

  return (
    <>
      <div className="tree-page">
        <div className="tree-page__side left">
          <div className="left__btns">
            <Player
              url={Mp3File.default}
              handlePlayerChange={handlePlayerChange}
              isPlaying={isPlaying}
            />
            <button
              className={`left__btn ${isSnow ? 'active' : ''}`}
              onClick={handleSnowChange}
            >
              <Snow className="left__snow" width={36} height={36} />
            </button>
          </div>
          <div className="tree-page__caption">Выбор фона</div>
          <div className="left__bg bgs">
            {treeBgsArr.map((i) => (
              <button
                className={`left__bg_link ${
                  treeBgIndx === i.id ? 'active' : ''
                }`}
                style={{
                  backgroundImage: `url(${i.link})`,
                }}
                key={i.id}
                onClick={() => {
                  handleTreeBgChange(i.id);
                }}
              />
            ))}
          </div>
          <div className="tree-page__caption">Выбор ёлки</div>
          <div className="left__bg pngs">
            {treePngArr.map((i) => (
              <button
                className={`left__bg_link pngs__link ${
                  i.id === treePngIndx ? 'active' : ''
                }`}
                style={{
                  backgroundImage: `url(${i.link})`,
                }}
                key={i.id}
                onClick={() => handleTreePngChange(i.id)}
              ></button>
            ))}
          </div>
          <div className="tree-page__caption">Гирлянда</div>
          <div className="left__lights lights">
            <div className="switch">
              <input
                className="switch__input"
                type="checkbox"
                id="toggle"
                checked={isLights}
                onChange={() => {
                  handleLightsChange(!isLights);
                }}
              />
              <label className="switch__lable" htmlFor="toggle"></label>
            </div>
            <div className="lights__btns">
              {POSSIBLE_LIGHTS.map((color) => (
                <button
                  key={color}
                  className={`lights__btn ${color} ${
                    color === lightsColor && isLights ? 'active' : ''
                  }`}
                  onClick={() => {
                    handleLightsColorChange(color);
                    handleLightsChange(true);
                  }}
                ></button>
              ))}
            </div>
          </div>
          <Button
            className="left__reset-btn blur-bg"
            InnerElem={() => <>Сбросить настройки</>}
            onClick={setDefaultTreeState}
          />
          {/* <div className="left__reset-btn">
          </div> */}
        </div>
        <div
          className="tree-page__tree tree"
          ref={containerRef}
          style={{
            backgroundImage: `url(${currBgLink})`,
          }}
        >
          <div className="snow">{isSnow ? <Snowfall /> : null}</div>
          <div className="tree__lights">
            {isLights
              ? [...Array(12)].map((_, i) => {
                  return (
                    <TreeLights
                      key={i}
                      color={lightsColor}
                      widthL={startWidth + i * 50}
                      amount={i + 5}
                    />
                  );
                })
              : null}
          </div>
          <img
            className="tree__img"
            src={currPngLink}
            alt="Tree Png"
            useMap="#image-map"
            ref={outsideTree}
          />
          <map className="tree__map" name="image-map">
            <area
              alt="TreeMap"
              coords="246,1,24,606,147,679,380,670,491,616"
              shape="poly"
              ref={drop}
            />
            {
              // eslint-disable-next-line array-callback-return
              Object.keys(toysMap).map((key) => {
                const coords = toysMap[key].coords;
                const coordKeys = Object.keys(coords);
                if (coordKeys.length) {
                  return (
                    <>
                      {coordKeys.map((idx) => (
                        <DragableToy
                          className="toys__png"
                          isFromTree={true}
                          isDraggable={true}
                          name={key}
                          src={toysMap[key].link}
                          coordIdx={idx}
                          styles={{
                            left: coords[idx].left,
                            top: coords[idx].top,
                          }}
                        />
                      ))}
                    </>
                  );
                }
              })
            }
          </map>
          <div ref={outside} className="tree__cover"></div>
        </div>
        <div className="tree-page__side right">
          <div className="tree-page__caption">Игрушки</div>
          <div className="right__toys toys">
            {Object.keys(toysMap).map((key) => {
              const isDraggable = toysMap[key].used < toysMap[key].available;

              return (
                <div key={key} className="toys__item">
                  <DragableToy
                    className="toys__png"
                    src={toysMap[key].link}
                    name={key}
                    isDraggable={isDraggable}
                    coordIdx={Math.random().toString().slice(-5)}
                  />
                  <div className="toys__count">
                    {toysMap[key].available - toysMap[key].used}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

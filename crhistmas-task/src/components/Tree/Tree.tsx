import { FC, useCallback, useEffect, useRef, useState } from 'react';
import update from 'immutability-helper';
import './Tree.scss';
import './Lights.scss';
import { Audio, Snow } from '../../assets/svg-comps/index';

import { Footer } from '../Footer';
import {
  createDataForDnd,
  ItemType,
  treeBgsArr,
  treePngArr,
} from '../tree-logic';
import Snowfall from 'react-snowfall';
import { useDrop } from 'react-dnd';
import { DragableToy } from './DragableToy';

export const Tree: FC<TreePagePropsInterface> = ({
  treeBgIndx,
  handleTreeBgChange,
  treePngIndx,
  handleTreePngChange,
  isSnow,
  handleSnowChange,
  favourites,
}) => {
  const [toysMap, setToysMap] = useState<DragItemDataInterface>({});

  const currBgLink = treeBgsArr[treeBgIndx].link;
  const currPngLink = treePngArr[treePngIndx].link;
  const dataForDnd = createDataForDnd(favourites);
  const containerRef = useRef<HTMLDivElement>(null);

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
            <button className="left__btn">
              <Audio className="left__sound" width={36} height={36} />
            </button>
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
            {/* {Array(8)
              .fill(8)
              .map((_, i) => {
                const height = 60 * (i + 1);
                return (
                  <ul
                    className="lightrope"
                    key={i}
                    style={{
                      // height: height,
                      // width: height * 0.66,
                      top: `${(i + 1) * 10}%`,
                    }}
                  >
                    {Array((i + 1) * 5 - (i + 1) * 2)
                      .fill(i)
                      .map((_, idx) => (
                        <li
                          key={idx}
                          style={
                            {
                              // transform: `translate(${height / 2}px)`,
                            }
                          }
                        ></li>
                      ))}
                  </ul>
                );
              })} */}
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
                        //TODO Image as dragable component
                        // <img
                        //   className="toys__png"
                        //   style={{ left: coords[idx].left, top: coords[idx].top }}
                        //   src={toysMap[key].link}
                        //   alt="Toy"
                        // />
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
              const coordIdx = toysMap[key].available - toysMap[key].used;
              return (
                <div key={key} className="toys__item">
                  <DragableToy
                    className="toys__png"
                    src={toysMap[key].link}
                    name={key}
                    isDraggable={isDraggable}
                    coordIdx={`${coordIdx}`}
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

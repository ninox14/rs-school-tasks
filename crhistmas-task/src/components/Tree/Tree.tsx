import { FC } from 'react';
import './Tree.scss';

import { Audio, Snow } from '../../assets/svg-comps/index';

import { Footer } from '../Footer';
import { treeBgsArr, treePngArr } from '../tree-logic';
import Snowfall from 'react-snowfall';
export const Tree: FC<TreePagePropsInterface> = ({
  treeBgIndx,
  handleTreeBgChange,
  treePngIndx,
  handleTreePngChange,
}) => {
  const currBgLink = treeBgsArr[treeBgIndx].link;
  const currPngLink = treePngArr[treePngIndx].link;
  return (
    <>
      <div className="tree-page">
        <div className="tree-page__side left">
          <div className="left__btns">
            <button className="left__btn">
              <Audio className="left__sound" width={36} height={36} />
            </button>
            <button className="left__btn">
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
          style={{
            backgroundImage: `url(${currBgLink})`,
          }}
        >
          <div className="snow">
            <Snowfall />
          </div>
          <div className="tree__cover">
            <img className="tree__img" src={currPngLink} alt="Tree Png" />
          </div>
        </div>
        <div className="tree-page__side right">123</div>
      </div>
      <Footer />
    </>
  );
};

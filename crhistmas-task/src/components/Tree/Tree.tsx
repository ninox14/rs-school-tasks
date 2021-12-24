import { FC } from 'react';
import './Tree.scss';

import TreePng from '../../assets/tree/1.png';
import { Audio, Snow } from '../../assets/svg-comps/index';

import { Footer } from '../Footer';
import { treeBgsArr } from '../tree-logic';

console.log(treeBgsArr);

export const Tree: FC<TreePagePropsInterface> = ({
  treeBgIndx,
  handleTreeBgChange,
}) => {
  const currBgLink = treeBgsArr[treeBgIndx].link;
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
                className="left__bg_link"
                style={{
                  backgroundImage: `url(${i.link})`,
                }}
                value={i.id}
                key={i.id}
                onClick={(e) => {
                  handleTreeBgChange(+e.currentTarget.value);
                }}
              />
            ))}
          </div>
        </div>
        <div
          className="tree-page__tree tree"
          style={{
            backgroundImage: `url(${currBgLink})`,
          }}
        >
          <div className="tree__cover">
            <img className="tree__img" src={TreePng} alt="132123" />
          </div>
        </div>
        <div className="tree-page__side right">123</div>
      </div>
      <Footer />
    </>
  );
};

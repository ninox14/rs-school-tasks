import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { ItemType } from '../tree-logic';

interface DragableItemProps {
  name: string;
  coordIdx: string;
  className: string;
  src: string;
  isDraggable: boolean;
}

export const DragableToy: FC<DragableItemProps> = ({
  name,
  coordIdx,
  src,
  className,
  isDraggable,
}) => {
  const [, drag] = useDrag(
    () => ({
      type: ItemType.TOY,
      item: { name, coordIdx },
    }),
    [name, coordIdx]
  );
  return (
    <img
      ref={drag}
      className={className}
      src={src}
      id={name}
      alt="Toy"
      draggable={isDraggable}
    />
  );
};

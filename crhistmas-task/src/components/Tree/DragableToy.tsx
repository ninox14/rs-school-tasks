import { CSSProperties, FC } from 'react';
import { useDrag } from 'react-dnd';
import { ItemType } from '../tree-logic';

interface DragableItemProps {
  name: string;
  coordIdx: string;
  className: string;
  src: string;
  isDraggable: boolean;
  isFromTree?: boolean;
  styles?: CSSProperties;
}

export const DragableToy: FC<DragableItemProps> = ({
  name,
  coordIdx,
  src,
  className,
  isDraggable,
  isFromTree = false,
  styles = {},
}) => {
  const [, drag] = useDrag(
    () => ({
      type: ItemType.TOY,
      item: { name, coordIdx, isFromTree },
    }),
    [name, coordIdx, isFromTree]
  );

  return (
    <img
      ref={drag}
      className={className}
      src={src}
      id={name}
      alt="Toy"
      draggable={isDraggable}
      style={{ ...styles, cursor: !isDraggable ? 'not-allowed' : '' }}
    />
  );
};

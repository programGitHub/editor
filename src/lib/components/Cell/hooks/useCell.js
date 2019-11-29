import { useRef } from 'react';
import DRAG_TYPE from '../dragType';
import { useDrag, useDrop } from 'react-dnd';
import useOver from 'lib/hooks/useOver';

export default function useCell({ id, index, move }) {
  const ref = useRef(null);
  const [over, onMouseEnter, onMouseLeave] = useOver();

  const [, drop] = useDrop({
    accept: DRAG_TYPE,
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      move(dragIndex, hoverIndex);

      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, dragHandle, dragPreview] = useDrag({
    item: {
      id,
      index,
      type: DRAG_TYPE
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  dragPreview(drop(ref));

  return [over, onMouseEnter, onMouseLeave, dragHandle, isDragging, ref];
}

import { useState } from 'react';
export default function useHold() {
  const [hold, setHold] = useState(false);

  const onMouseDown = () => {
    setHold(true);
  };

  const onMouseUp = () => {
    setHold(false);
  };

  return [hold, onMouseDown, onMouseUp, onMouseUp];
}
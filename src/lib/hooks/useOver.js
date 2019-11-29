import { useState } from 'react';

export default function useOver() {
  const [over, setOver] = useState(false);

  const onMouseEnter = () => {
    setOver(true);
  };

  const onMouseLeave = () => {
    setOver(false);
  };

  return [over, onMouseEnter, onMouseLeave];
}

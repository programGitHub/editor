import base from './features/base';
import bold from './features/bold';
import formula from './features/formula';
import link from './features/link';
export default function (list) {
  let menuPos = 1;
  return list.map(el => {
    if (typeof el === 'string') {
      switch (el) {
        case 'bold':
          return bold({
            menuPos: menuPos++,
            type: 'bold'
          });

        case 'formula':
          return formula({
            menuPos: menuPos++,
            type: 'formula'
          });

        case 'link':
          return link({
            menuPos: menuPos++,
            type: 'link'
          });

        case 'paragraph':
          return base({
            type: 'paragraph'
          });

        default:
          return null;
      }
    } else if (typeof el === 'object') {
      if (Object.hasOwnProperty.call(el, 'hasMenu') && el.hasMenu) {
        return { ...el,
          menuPos: menuPos++
        };
      } else {
        return { ...el
        };
      }
    } else {
      return null;
    }
  }).filter(el => typeof el === 'object');
}
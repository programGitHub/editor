import base from './features/base';
import bold from './features/bold';
import formula from './features/formula';
import link from './features/link';

export default function(list) {
  return list
    .map(el => {
      if (typeof el === 'string') {
        switch (el) {
          case 'bold':
            return bold({ type: 'bold' });
          case 'formula':
            return formula({ type: 'formula' });
          case 'link':
            return link({ type: 'link' });
          case 'paragraph':
            return base({ type: 'paragraph' });
          default:
            return null;
        }
      } else if (typeof el === 'object') {
        return { ...el };
      } else {
        return null;
      }
    })
    .filter(el => typeof el === 'object');
}

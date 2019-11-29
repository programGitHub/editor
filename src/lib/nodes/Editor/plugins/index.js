import base from './features/base';
import bold from './features/bold';
import formula from './features/formula';
import link from './features/link';

export default [
  base({ type: 'paragraph' }),
  bold({ menuPos: 1, type: 'bold' }),
  link({ menuPos: 2, type: 'link' }),
  formula({ menuPos: 3, type: 'formula' })
];

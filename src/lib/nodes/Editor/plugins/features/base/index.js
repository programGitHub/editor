import ParagraphBlock from './components/ParagraphBlock';
import { RenderBlock } from 'lib/nodes/Editor/plugins/utils';

export default function(options) {
  const { type } = options;

  return { slate: [RenderBlock(type, ParagraphBlock)] };
}

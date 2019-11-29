import ParagraphBlock from './components/ParagraphBlock';
import { RenderBlock } from 'lib/nodes/Editor/plugins/utils';
export default function (options) {
  const {
    type
  } = options;
  return [RenderBlock(type, ParagraphBlock)];
}
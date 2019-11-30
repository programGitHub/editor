import ParagraphBlock from './components/ParagraphBlock';
import { RenderBlock } from '../../utils';
export default function (options) {
  const {
    type
  } = options;
  return [RenderBlock(type, ParagraphBlock)];
}
import ParagraphBlock from './components/ParagraphBlock';
import { RenderBlock } from 'nodes/Editor/plugins/utils';
export default function (options) {
  const {
    type
  } = options;
  return [RenderBlock(type, ParagraphBlock)];
}
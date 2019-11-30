import Button from './components/Button';
import Mark from './components/Mark';
import { Command, Query, RenderButton, RenderMark } from '../../nodes/Editor/plugins/utils';
import { hasInlines, wrapInline, unwrapInline, updateInline } from '../../nodes/Editor/plugins/commands';
export default function (options) {
  const {
    menuPos,
    type
  } = options;
  return [Query('hasLinks', hasInlines(type)), Command('wrapLink', wrapInline(type)), Command('unwrapLink', unwrapInline(type)), Command('updateLink', updateInline()), RenderMark(type, Mark), RenderButton(Button, menuPos)];
}
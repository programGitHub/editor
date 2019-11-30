import Button from './components/Button';
import Mark from './components/Mark';
import { Command, Query, RenderButton, RenderMark } from '../../utils';
import { hasInlines, wrapInline, unwrapInline } from '../../commands';
export default function (options) {
  const {
    menuPos,
    type
  } = options;
  return [Query('hasBolds', hasInlines(type)), Command('wrapBold', wrapInline(type)), Command('unwrapBold', unwrapInline(type)), RenderMark(type, Mark), RenderButton(Button, menuPos)];
}
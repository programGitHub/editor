import Button from './components/Button';
import Mark from './components/Mark';
import { Command, Query, RenderMark } from 'lib/nodes/Editor/plugins/utils';
import {
  hasInlines,
  wrapInline,
  unwrapInline
} from 'lib/nodes/Editor/plugins/commands';

export default function(options) {
  const { type } = options;

  return {
    menu: Button,
    slate: [
      Query('hasBolds', hasInlines(type)),
      Command('wrapBold', wrapInline(type)),
      Command('unwrapBold', unwrapInline(type)),
      RenderMark(type, Mark)
    ]
  };
}

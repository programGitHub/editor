import Button from './components/Button';
import Mark from './components/Mark';
import { Command, Query, RenderMark } from 'lib/nodes/Editor/plugins/utils';
import {
  hasInlines,
  wrapInline,
  unwrapInline,
  updateInline
} from 'lib/nodes/Editor/plugins/commands';

export default function(options) {
  const { type } = options;

  return {
    menu: Button,
    slate: [
      Query('hasLinks', hasInlines(type)),
      Command('wrapLink', wrapInline(type)),
      Command('unwrapLink', unwrapInline(type)),
      Command('updateLink', updateInline()),
      RenderMark(type, Mark)
    ]
  };
}

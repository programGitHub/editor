import Button from './components/Button';
import Mark from './components/Mark';
import { Command, RenderButton, RenderMark, Schema } from 'nodes/Editor/plugins/utils';
import { insertInline, updateInline } from 'nodes/Editor/plugins/commands';
import schema from './schema';
export default function (options) {
  const {
    menuPos,
    type
  } = options;
  return [Command('insertFormula', insertInline(type)), Command('updateFormula', updateInline()), RenderMark(type, Mark), RenderButton(Button, menuPos), Schema(schema)];
}
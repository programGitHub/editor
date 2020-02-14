import Button from './components/Button';
import Mark from './components/Mark';
import { Command, RenderMark, Schema } from 'lib/nodes/Editor/plugins/utils';
import { insertInline, updateInline } from 'lib/nodes/Editor/plugins/commands';
import schema from './schema';

export default function(options) {
  const { type } = options;

  return {
    menu: Button,
    slate: [
      Command('insertFormula', insertInline(type)),
      Command('updateFormula', updateInline()),
      RenderMark(type, Mark),
      Schema(schema)
    ]
  };
}

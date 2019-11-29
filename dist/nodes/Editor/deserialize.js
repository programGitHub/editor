import { Value } from 'slate';
export default function (value) {
  return JSON.parse(Value.fromJSON(value));
}
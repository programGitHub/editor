import { useContext } from 'react';
import context from '../context';

export default function useEditorContext() {
  return useContext(context);
}

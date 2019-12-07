import Highlight from 'lib/nodes/Highlight';
import Image from 'lib/nodes/Image';
import List from 'lib/nodes/List';
import Paragraph from 'lib/nodes/Paragraph';
import Title from 'lib/nodes/Title';

export default function(list) {
  if (typeof list === 'undefined') {
    list = ['paragraph', 'title', 'highlight', 'image', 'list'];
  }

  return list
    .map(el => {
      if (typeof el === 'string') {
        switch (el) {
          case 'highlight':
            return { plugin: Highlight, type: 'highlight' };
          case 'image':
            return { plugin: Image, type: 'image' };
          case 'list':
            return { plugin: List, type: 'list' };
          case 'paragraph':
            return { plugin: Paragraph, type: 'paragraph' };
          case 'title':
            return { plugin: Title, type: 'title' };
          default:
            return null;
        }
      } else if (typeof el === 'object') {
        return { ...el };
      } else {
        return null;
      }
    })
    .filter(el => typeof el === 'object');
}

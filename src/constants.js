import add from './utils/add';
import divide from './utils/divide';
import multiply from './utils/multiply';
import subtract from './utils/subtract';

export const METHOD_TO_STRING_MAP = {
  [add]: '+',
  [divide]: '/',
  [multiply]: '*',
  [subtract]: '-',
};

export const GROUP = {
  left: '(',
  right: ')',
};

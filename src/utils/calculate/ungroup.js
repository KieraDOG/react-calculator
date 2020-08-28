import { GROUP } from '../../constants';
import multiply from '../multiply';
import calculate from './calculate';

const patch = (value) => {
  if (!value || typeof value === 'function') {
    return null;
  }

  return multiply;
}

const ungroup = (input) => {
  let result = [...input];

  for (let i = 0; i < result.length; i ++) {
    if (result[i] !== GROUP.left) {
      continue;
    }

    for (let j = result.length - 1; j > i; j --) {
      if (result[j] !== GROUP.right) {
        continue;
      }

      const group = result.splice(i, j - i + 1);
      group.pop();
      group.shift();
      const item = calculate(group);

      let items = [patch(result[i - 1]), item, patch(result[i])].filter(v => v != null);
      
      console.log(result);
      result.splice(i, 0, ...items);

      break;
    }
  }

  return result;
};

export default ungroup;

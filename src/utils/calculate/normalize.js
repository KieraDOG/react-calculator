import multiply from '../multiply';
import divide from '../divide';
import operate from './operate';

const TO_NORMALIZE = [multiply, divide];

const normalize = (input) => {
  let result = [...input];

  for (let i = 0; i < result.length; i ++) {
    if (!TO_NORMALIZE.includes(result[i])) {
      continue;
    }

    let j = i - 1;
    const toNormalizes = result.splice(j, 3);
    const item = operate(toNormalizes);
    result.splice(j, 0, item);
    i --;
  }

  return result;
};

export default normalize;

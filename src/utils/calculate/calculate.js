import normalize from './normalize';
import operate from './operate';
import ungroup from './ungroup';

const calculate = (input) => {
  console.log('DEBUG: calculate -> input', input);
  const ungrouped = ungroup(input);
  console.log('DEBUG: calculate -> ungrouped', ungrouped);
  const normalized = normalize(ungrouped);
  console.log('DEBUG: calculate -> normalized', normalized);
  const result = operate(normalized);
  console.log('DEBUG: calculate -> result', result);

  return result;
};

export default calculate;

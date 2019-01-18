import bool from './bool';
import float from './float';
import integer from './integer';

const choice = (max = 1, min = 0, options = {}) => {
  if (options.float === true) {
    return float(max, min);
  } else if (options.bool) {
    return bool(max, min);
  } else {
    return integer(max, min);
  }
}

export default choice;
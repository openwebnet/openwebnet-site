import {} from '../constants/ActionTypes';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'NONE':
      return state;
    default:
      return state;
  }
}

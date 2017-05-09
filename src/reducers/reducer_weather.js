import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Make a new array with the data at the top of the array
      return [ action.payload.data, ...state ];
  }

  return state;
}

import { FETCH_WEATHER } from '../actions/index';

// set inital state to [] instead of null since we will insert into an array
export default function (state = [], action) {
  console.log('Action received ', action);
  console.log('state ', state);

  switch (action.type) {
    case FETCH_WEATHER:
      // WRONG - below piece of code manipulates state directly
      // similar to react, in redux you should never mutate state directly
      // such as through this.state. = xyz
      // return state.push(action.payload.data)

      // CORRECT since it creates an entirely new stance of state
      // return state.concat([action.payload.data]);

      // ALSO CORRECT
      return [action.payload.data, ...state];
  }
  return state;
}

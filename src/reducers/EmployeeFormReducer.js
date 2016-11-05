import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { prop: 'name', value: 'jane' }
      // [action.payload.prop] key interpolation es6 turns into a symbol ex name:
      return { ...state, [action.payload.prop]: action.payload.value }

    case EMPLOYEE_CREATE: 
      return INITIAL_STATE;

    default: 
      return state;
  }
}
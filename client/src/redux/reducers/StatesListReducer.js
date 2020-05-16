// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function StatesListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_STATES_SUCCESS:
      return { ...state, states: action.payload };
    case types.LIST_STATES_SUCCESS:
      return { ...state, listStates: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  states: {}
};

// Reducer
export default function StatesEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_STATES_SUCCESS:
      return { ...state, states: action.payload };
    case types.UPDATE_STATES_SUCCESS:
      return { ...state, states: action.payload };
    case types.GET_STATES_SUCCESS:
      return { ...state, states: action.payload };
    case types.LIST_USERPROFILES_SUCCESS:
      return { ...state, listUserProfiles: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
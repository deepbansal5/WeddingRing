// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function MaritalstatusListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_MARITALSTATUS_SUCCESS:
      return { ...state, maritalstatus: action.payload };
    case types.LIST_MARITALSTATUS_SUCCESS:
      return { ...state, listMaritalstatus: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
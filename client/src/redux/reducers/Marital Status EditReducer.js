// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  maritalstatus: {}
};

// Reducer
export default function Marital Status EditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_MARITALSTATUS_SUCCESS:
      return { ...state, maritalstatus: action.payload };
    case types.UPDATE_MARITALSTATUS_SUCCESS:
      return { ...state, maritalstatus: action.payload };
    case types.GET_MARITALSTATUS_SUCCESS:
      return { ...state, maritalstatus: action.payload };
    case types.LIST_USERPROFILES_SUCCESS:
      return { ...state, listUserProfiles: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
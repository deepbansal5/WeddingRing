// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  cities: {}
};

// Reducer
export default function CitiesEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_CITIES_SUCCESS:
      return { ...state, cities: action.payload };
    case types.UPDATE_CITIES_SUCCESS:
      return { ...state, cities: action.payload };
    case types.GET_CITIES_SUCCESS:
      return { ...state, cities: action.payload };
    case types.LIST_USERPROFILES_SUCCESS:
      return { ...state, listUserProfiles: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
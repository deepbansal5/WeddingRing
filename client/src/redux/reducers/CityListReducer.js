// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function CityListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_CITIES_SUCCESS:
      return { ...state, cities: action.payload };
    case types.LIST_CITIES_SUCCESS:
      return { ...state, listCities: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
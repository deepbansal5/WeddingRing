import { combineReducers } from "redux";

// START IMPORT REDUCERS
import CitiesEditReducer from "./CitiesEditReducer";
import CityListReducer from "./CityListReducer";
import HomeReducer from "./HomeReducer";
import Marital Status EditReducer from "./Marital Status EditReducer";
import MaritalstatusListReducer from "./MaritalstatusListReducer";
import StatesEditReducer from "./StatesEditReducer";
import StatesListReducer from "./StatesListReducer";
import UserProfilesEditReducer from "./UserProfilesEditReducer";
import UserProfilesListReducer from "./UserProfilesListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	CitiesEditReducer,
	CityListReducer,
	HomeReducer,
	Marital Status EditReducer,
	MaritalstatusListReducer,
	StatesEditReducer,
	StatesListReducer,
	UserProfilesEditReducer,
	UserProfilesListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;

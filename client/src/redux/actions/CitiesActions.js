import actionsFunction from "./generated/CitiesActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import CitiesApi from "../../api/CitiesApi";
 
 actionsFunction.loadCitiesList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return CitiesApi
     .getCitiesList()
     .then(list => {
       dispatch(actionsFunction.loadCitiesSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;

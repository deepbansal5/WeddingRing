import actionsFunction from "./generated/StatesActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import StatesApi from "../../api/StatesApi";
 
 actionsFunction.loadStatesList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return StatesApi
     .getStatesList()
     .then(list => {
       dispatch(actionsFunction.loadStatesSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;

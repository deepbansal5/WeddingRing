import actionsFunction from "./generated/MaritalstatusActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import MaritalstatusApi from "../../api/MaritalstatusApi";
 
 actionsFunction.loadMaritalstatusList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return MaritalstatusApi
     .getMaritalstatusList()
     .then(list => {
       dispatch(actionsFunction.loadMaritalstatusSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;

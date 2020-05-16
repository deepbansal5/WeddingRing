import MaritalstatusApiGenerated from "./generated/MaritalstatusApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class MaritalstatusApi extends MaritalstatusApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Maritalstatus List
  static getMaritalstatusList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/maritalstatuss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default MaritalstatusApi;
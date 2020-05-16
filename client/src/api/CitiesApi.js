import CitiesApiGenerated from "./generated/CitiesApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class CitiesApi extends CitiesApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Cities List
  static getCitiesList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/citiess")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default CitiesApi;
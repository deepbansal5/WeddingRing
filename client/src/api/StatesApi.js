import StatesApiGenerated from "./generated/StatesApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class StatesApi extends StatesApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get States List
  static getStatesList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/statess")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default StatesApi;
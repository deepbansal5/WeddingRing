/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN MaritalstatusApiGenerated.js PLEASE EDIT ../MaritalstatusApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class MaritalstatusApiGenerated {

  static contextUrl = properties.endpoint + "/maritalstatus";

  // CRUD METHODS

  /**
  * MaritalstatusService.create
  *   @description CRUD ACTION create
  *
  */
  static createMaritalstatus(maritalstatus) {
    return axios.post(MaritalstatusApiGenerated.contextUrl, maritalstatus )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * MaritalstatusService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteMaritalstatus(id) {
    return axios.delete(MaritalstatusApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * MaritalstatusService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneMaritalstatus(id) {
    return axios.get(MaritalstatusApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * MaritalstatusService.list
  *   @description CRUD ACTION list
  *
  */
  static getMaritalstatusList() {
    return axios.get(MaritalstatusApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * MaritalstatusService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveMaritalstatus(maritalstatus) {
    return axios.post(MaritalstatusApiGenerated.contextUrl + "/" + maritalstatus._id, maritalstatus )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default MaritalstatusApiGenerated;

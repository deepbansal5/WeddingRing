import CitiesModelGenerated from "./generated/CitiesModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CitiesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CitiesModelGenerated,
  ...customModel
};

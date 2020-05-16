import MaritalstatusModelGenerated from "./generated/MaritalstatusModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await MaritalstatusModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...MaritalstatusModelGenerated,
  ...customModel
};

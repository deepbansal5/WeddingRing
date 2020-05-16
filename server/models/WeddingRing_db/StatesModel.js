import StatesModelGenerated from "./generated/StatesModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await StatesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...StatesModelGenerated,
  ...customModel
};

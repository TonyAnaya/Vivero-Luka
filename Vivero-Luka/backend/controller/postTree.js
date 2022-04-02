const postUserModel = require("../model/postUser");

module.exports.postUser = async (datosUser) => {
  try {
    let response = await postUserModel.postUser(datosUser);
    return response;
  } catch (error) {
    console.log(error);
  }
};

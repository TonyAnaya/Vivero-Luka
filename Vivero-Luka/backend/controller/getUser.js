const getUserModel = require("../model/getUser");

module.exports.getUser = async (datosUser) => {
try {
    let response = await getUserModel.getUser(datosUser);
    return response;
} catch (error) {
    console.log(error);
}
};

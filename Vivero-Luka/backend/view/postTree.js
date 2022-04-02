const postTreeController = require("../controller/postTree.js");

module.exports = (app) => {
  app.post("/post-tree", async (req, res) => {
    try {
      let result = await postTreeController.postTree(req.body);
      console.log(req.body);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  });
};

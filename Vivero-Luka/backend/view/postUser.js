const postUserController = require('../controller/postUser')

module.exports = (app) => {
app.post('/post-user', async(req,res)=>{
try {
    let result = await postUserController.postUser(req.body)
    console.log(req.body);
    res.send( result );
} catch (error) {
    console.log(error);
}
  })
}

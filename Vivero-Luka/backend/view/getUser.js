const getUserController = require('../controller/getUser')

module.exports = (app) => {
app.get('/get-user', async(req,res)=>{
try {
    let result = await getUserController.getUser(req.body)
    console.log(req.body);
    res.send( result );
} catch (error) {
    console.log(error);
}
  })
}

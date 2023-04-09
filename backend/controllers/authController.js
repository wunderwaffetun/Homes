class authController {

  async login(req, res) {
    try{
      res.json('working')
    } catch(e) {
      console.log(e)
    }
  }
  async getUsers(req, res){
    try{
      res.json('working')
    } catch(e) {
      console.log(e)
    }
  }
  async getUser(req, res) {
    try{
      res.json('working')
    } catch(e) {
      console.log(e)
    }
  }
}

const authCont = new authController()
export  {authCont}

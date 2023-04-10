import User from "../models/User.js";
import Role from "../models/Role.js";
class UserCl {

  async getUsers(req, res) {
    try {
        const users = await User.find()
        res.json(users)
    } catch (e) {
        console.log(e)
    }
}

  getUser = async (req, res) => {
    res.status(200).json('work')
  }

  getCards = async (req, res) => {
    res.status(200).json('work')
  } 

  getCard = async (req, res) => {
    res.status(200).json('work')
  }

  


}

const userController = new UserCl()

export default userController
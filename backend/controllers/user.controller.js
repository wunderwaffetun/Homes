import User from "../models/User.js";
import Role from "../models/Role.js";
class UserCl {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  }
  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findOne(id);
      res.json(user);
    } catch (e) {
      console.log(e);
    }
  }
}

const userController = new UserCl();

export default userController;

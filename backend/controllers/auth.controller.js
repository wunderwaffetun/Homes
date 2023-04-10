class Auth {
  login = async (req, res) => {
    res.status(200).json('work')
  }
}

const authController = new Auth()

export default authController
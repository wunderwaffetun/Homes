class User {

  getUsers = async (req, res) => {
    res.status(200).json('work')
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

const userRouter = new Auth()

export default userRouter
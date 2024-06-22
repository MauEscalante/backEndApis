import {getUserService,updateUserByIdService} from "../service/user.service"

export const getUser = async (req, res) => {
  try{
    const id = req.body;
    const usuario = await getUserService(id.userId);
    return res.status(200).json({usuario})

  }catch(error){
    res.status(400).json(error.message)
  }
};

export const updateUserById = async (req, res) => {
  try{
    const {userId,password} = req.body

    const response =await updateUserByIdService(userId,password);
    res.status(200).json({response,menssage:"password was update successfully."});

  }catch(error){
    res.status(400).json(error.message)
  }
};

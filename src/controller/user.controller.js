import { getUserService, updateUserByIdService } from "../service/user.service";
import jwt from "jsonwebtoken";
import { SECRET_JWT } from "../config";

export const getUser = async (req, res) => {
  try {
    const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
    const userId = decodedToken.id;
    const usuario = await getUserService(userId);
    return res.status(200).json( usuario );
  } catch (error) {
    console.log(error)
    res.status(400).json(error.message);
  }
};

export const updateUserById = async (req, res) => {
  try {
    const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
    const userId = decodedToken.id;
    const { password } = req.body;

    const response = await updateUserByIdService(userId, password);
    res
      .status(200)
      .json({ response, menssage: "password was update successfully." });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

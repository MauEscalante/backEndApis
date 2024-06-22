import User from "../models/User.js";

export const getUserService = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
          throw new Error("User not found");
        }
        return user;
      } catch (error) {
        throw new Error(error.message);
      }
}

export const updateUserByIdService = async (userId,password) => {
    try{
        const updateUser = await User.findByIdAndUpdate(userId,  {password:password}, {
        new: true,
        }
        );
        if(!updateUser) throw new Error("User not found");
        const savedUser = await updateUser.save();
        return savedUser;
    }catch(error){
      throw new Error(error.message)
    }
}
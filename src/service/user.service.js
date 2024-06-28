import User from "../models/User.js";

export const getUserService = async (email) => {
  try {
   
    const usuario = await User.findOne({ email: email });
    if (!usuario) {
      throw new Error("User not found");
    }
    const user= {
      email: usuario.email,
      password: usuario.password,
      name: usuario.name,
      lastname: usuario.lastName,
      favorites: usuario.favorites,
      watchLater: usuario.watchLater,
      watched: usuario.watched
    };
    return (user); 
  } catch (error) {
    throw new Error(error.message);
  }
}


export const updateUserService = async (newPassword, email) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: email }, 
      { password: newPassword }, 
      {
        new: true, 
      }
    );
    if (!updatedUser) throw new Error("User not found");
    const savedUser = await updatedUser.save();
    return {id: savedUser._id, email: savedUser.email}
  } catch (error) {
    throw new Error(error.message);
  }
};

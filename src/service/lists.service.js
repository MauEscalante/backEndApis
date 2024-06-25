import User from "../models/User.js";

///////////////////////////////FAVORITES/////////////////////////////////////

export const getFavoritesService = async (userId) => {
  try {
    const user = await User.findOne({ _id: userId }).populate("favorites");
    if (!user) throw new Error("User not found.");
    return user.favorites;
  } catch (error) {
    if (error.message === "User not found.") throw new Error("User not found.");
    throw new Error("Error trying to get watched by server.");
  }
};

export const getInFavoriteService = async (userId, movieId) => {
  try {
    const user = await User.findOne({ _id: userId }).populate("favorites");
    if (!user) throw new Error("User not found.");
    const favorite = user.favorites.find((movie) => movie._id === movieId);
    if (favorite == -1) {
      console.log(favorite,"no esta en favoritos")
      return false;
    }else{
      return true;
    }
    
  } catch (error) {
    if (error.message === "User not found.") throw new Error("User not found.");
    throw new Error("Error trying to get watched by server.");
  }
};

export const addFavoritesService = async (userId, movie) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found.");

    user.favorites.push(movie);
    const save = await user.save();
    return save;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteFavoritesService = async (userId, movieId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found.");

    const index = user.favorites.findIndex((movie) => movie._id === movieId);
    if (index === -1) throw new Error("Movie not found.");
    user.favorites.splice(index, 1);
    const save = await user.save();
    return save;
  } catch (error) {
    throw new Error(error.message);
  }
};

///////////////////////////////WATCH LATER/////////////////////////////////////

export const getWatchLaterService = async (userId) => {
  try {
    const user = await User.findOne({ _id: userId }).populate("watchLater");
    if (!user) throw new Error("User not found.");
    return user.watchLater;
  } catch (error) {
    if (error.message === "User not found.") throw new Error(error.message);
    throw new Error("Error trying to get watched by server.");
  }
};

export const getInWatchLaterService = async (userId, movieId) => {
  try {
    const user = await User.findOne({ _id: userId }).populate("watchLater");
    if (!user) throw new Error("User not found.");
    const watchLater = user.watchLater.find((movie) => movie._id === movieId);
    if (watchLater == -1) return false;
    return true;
  } catch (error) {
    if (error.message === "User not found.") throw new Error("User not found.");
    throw new Error("Error trying to get watched by server.");
  }
};

export const addWatchLaterService = async (userId, movie) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found.");

    user.watchLater.push(movie);
    const save = await user.save();
    return save;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteWatchLaterService = async (userId, movieId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found.");

    const index = user.watchLater.findIndex((movie) => movie._id === movieId);
    if (index === -1) throw new Error("Movie not found.");
    user.watchLater.splice(index, 1);
    const save = await user.save();
    return save;
  } catch (error) {
    throw new Error(error.message);
  }
};


///////////////////////////////WATCHED/////////////////////////////////////

export const getWatchedService = async (userId) => {
  try {
    const user = await User.findOne({ _id: userId }).populate("watched");
    if (!user) throw new Error("User not found.");
    return user.watched;
  } catch (error) {
    if (error.message === "User not found.") throw new Error(error.message);
    throw new Error("Error trying to get watched by server.");
  }
};

export const getInWatchedService = async (userId, movieId) => {
  try {
    const user = await User.findOne({ _id: userId }).populate("watched");
    if (!user) throw new Error("User not found.");
    const watched = user.watched.find((movie) => movie._id === movieId);
    if (watched == -1) return false;
    return true;
  } catch (error) {
    if (error.message === "User not found.") throw new Error("User not found.");
    throw new Error("Error trying to get watched by server.");
  }
};

export const addWatchedService = async (userId, movie) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found.");

    user.watched.push(movie);
    const save = await user.save();
    return save;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteWatchedService = async (userId, movieId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found.");
    const index = user.watched.findIndex((movie) => movie._id === movieId);
    if (index === -1) throw new Error("Movie not found.");
    user.watched.splice(index, 1);
    const save = await user.save();
    return save;
  } catch (error) {
    throw new Error(error.message);
  }
};

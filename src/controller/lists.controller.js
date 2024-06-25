import { getInFavoriteService,getInWatchLaterService,getInWatchedService,
    getFavoritesService, addFavoritesService, deleteFavoritesService,
    getWatchLaterService, addWatchLaterService, deleteWatchLaterService,
    getWatchedService, addWatchedService, deleteWatchedService
} from "../service/lists.service";
import jwt from "jsonwebtoken";
import { SECRET_JWT } from "../config";


///////////////////////////////FAVORITES/////////////////////////////////////

export const getFavorites = async (req, res) => {
    try {
        const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
        const userId = decodedToken.id;
        const favorites = await getFavoritesService(userId);
        return res.status(200).json( favorites );
    } catch (error) {
        if (error.message === "User not found.") return res.status(404).json(error.message);
        res.status(500).json(error.message);
    }
};

export const addFavorites = async (req, res) => {
    try {
        const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
        const userId = decodedToken.id;
        const movie = {
            _id: req.body.id ,
            title: req.body.title,
            overview: req.body.overview,
            poster_path:req.body.poster_path
        }
        const response = await addFavoritesService(userId, movie);
        return res.status(200).json( response );
    } catch (error) {
        res.status(400).json(error.message);
    }
};

export const deleteFavorites = async (req, res) => {
    try {
        const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
        const userId = decodedToken.id;
       const movieId = req.body._id;

       const response = await deleteFavoritesService(userId, movieId);
       return res.status(200).json({ response });

    } catch (error) {
        res.status(400).json(error.message);
    }

};

export const getFavorite = async (req, res) => {
    try{
        const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
        const userId = decodedToken.id;

        const movieId = req.params._id;
        const favorite = await getInFavoriteService(userId, movieId);
        return res.status(200).json( favorite);

    }catch(error){
        if (error.message === "User not found.") return res.status(404).json(error.message);
        res.status(500).json(error.message);
    }
}


///////////////////////////////WATCH LATER/////////////////////////////////////

export const getWatchLater = async (req, res) => {
    try {
        const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
        const userId = decodedToken.id;
        const watchLater = await getWatchLaterService(userId);
        return res.status(200).json( watchLater );
    } catch (error) {
        if (error.message === "User not found.") return res.status(404).json(error.message);
        res.status(500).json(error.message);
    }
};

export const addWatchLater = async (req, res) => {
    try {
       
        const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
        const userId = decodedToken.id;
        const movie = {
            _id: req.body.id ,
            title: req.body.title,
            overview: req.body.overview,
            poster_path:req.body.poster_path
        }

        const response = await addWatchLaterService(userId, movie);
        return res.status(200).json({ response });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const deleteWatchLater = async (req, res) => {
    try {
        const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
        const userId = decodedToken.id;
        const movieId = req.body._id;
 
        const response = await deleteWatchLaterService(userId, movieId);
        return res.status(200).json({ response });
 
     } catch (error) {
         res.status(500).json(error.message);
     }
 
};

export const getInWatchLater = async (req, res) => {
    try{
        const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
        const userId = decodedToken.id;

        const movieId = req.params._id;
        const inWatchLater = await getInWatchLaterService(userId, movieId);
        return res.status(200).json(inWatchLater);

    }catch(error){
        if (error.message === "User not found.") return res.status(404).json(error.message);
        res.status(500).json(error.message);
    }
}



///////////////////////////////WATCHED/////////////////////////////////////

export const getWatched = async (req, res) => {
    try {
        const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
        const userId = decodedToken.id;
        const watched = await getWatchedService(userId);
        return res.status(200).json( watched );
    } catch (error) {
        if (error.message === "User not found.") return res.status(404).json(error.message);
        res.status(500).json(error.message);
    }
};

export const addWatched = async (req, res) => {
    try {
       
        const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
        const userId = decodedToken.id;
        const movie = {
            _id: req.body.id ,
            title: req.body.title,
            overview: req.body.overview,
            poster_path:req.body.poster_path
        }

        const response = await addWatchedService(userId, movie);
        return res.status(200).json({ response });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const deleteWatched = async (req, res) => {
    try {
        const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
        const userId = decodedToken.id;
       const movieId = req.body._id;

       const response = await deleteWatchedService(userId, movieId);
       return res.status(200).json({ response });

    } catch (error) {
        res.status(400).json(error.message);
    }
};

export const getInWatched = async (req, res) => {
    try{
        const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
        const userId = decodedToken.id;

        const movieId = req.params._id;
        const inWatched = await getInWatchedService(userId, movieId);
        return res.status(200).json( inWatched );

    }catch(error){
        if (error.message === "User not found.") return res.status(404).json(error.message);
        res.status(500).json(error.message);
    }
}

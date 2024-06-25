import { Router } from "express";
import {
  getInWatchLater,
  getInWatched,
  getFavorite,
  getFavorites,
  addFavorites,
  deleteFavorites,
  getWatchLater,
  addWatchLater,
  deleteWatchLater,
  getWatched,
  addWatched,
  deleteWatched,
} from "../controller/lists.controller.js";
const checkFields = require("../middlewares/validateFields.js");
const { check } = require("express-validator");

const router = Router();

router.get("/favorites", getFavorites);
router.post(
  "/favorites",
  [
    check("id").not().isEmpty(),
    check("title").not().isEmpty(),
    check("overview").not().isEmpty(),
    check("poster_path").not().isEmpty(),
    checkFields,
  ],
  addFavorites
);
router.delete(
  "/favorites",
  [check("_id").not().isEmpty(), checkFields],
  deleteFavorites
);
router.get("/favorites/:_id", getFavorite);

router.get("/watchLater", getWatchLater);
router.post(
  "/watchLater",
  [
    check("id").not().isEmpty(),
    check("title").not().isEmpty(),
    check("overview").not().isEmpty(),
    check("poster_path").not().isEmpty(),
    checkFields,
  ],
  addWatchLater
);
router.delete(
  "/watchLater",
  [check("_id").not().isEmpty(), checkFields],
  deleteWatchLater
);
router.get("/watchLater/:_id", getInWatchLater);

router.get("/watched", getWatched);
router.post(
  "/watched",
  [
    check("id").not().isEmpty(),
    check("title").not().isEmpty(),
    check("overview").not().isEmpty(),
    check("poster_path").not().isEmpty(),
    checkFields,
  ],
  addWatched
);
router.delete(
  "/watched",
  [check("_id").not().isEmpty(), checkFields],
  deleteWatched
);
router.get("/watched/:_id", getInWatched);

export default router;

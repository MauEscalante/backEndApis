import { Router } from "express";
import { getUser, updateUserById } from "../controller/user.controller.js";
const checkFields = require("../middlewares/validateFields.js");
const { check } = require("express-validator")

const router = Router();

router.get("/", [check("userId").not().isEmpty(), checkFields], getUser);

router.put("/", [check("userId").not().isEmpty(), checkFields], updateUserById);

export default router;

import { Router } from "express";
import { getUser, updateUserById } from "../controller/user.controller.js";
const checkFields = require("../middlewares/validateFields.js");
const { check } = require("express-validator")

const router = Router();

router.get("/",   getUser);

router.put("/",   updateUserById);

export default router;

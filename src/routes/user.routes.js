import { Router } from "express";
import { getUser, updateUser,validateCode,getCode } from "../controller/user.controller.js";
const checkFields = require("../middlewares/validateFields.js");
const { check } = require("express-validator")

const router = Router();

router.get("/",   getUser);

router.put("/",   updateUser);


router.get("/validateCode" ,[check("code").not().isEmpty(),checkFields],validateCode);

router.get("/getCode",[check("email").not().isEmpty(),checkFields],getCode);

export default router;

import { getUserService, updateUserService } from "../service/user.service";
import jwt from "jsonwebtoken";
import { SECRET_JWT } from "../config";
import nodemailer from "nodemailer";

// Configura el transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ignaciomorinigo850@gmail.com",
    pass: "pyci vkhe cdbc dfrv",
  },
});

// Función para enviar el correo electrónico
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: "ignaciomorinigo850@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  return transporter.sendMail(mailOptions);
};

export const getCode = async (req, res) => {
  try {
    const { email } = req.query;
    const userFound =getUserService(email);

    if (userFound) {
      const code = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

      // Crear el token con el código
      const token = jwt.sign({ email, code }, SECRET_JWT, { expiresIn: "1h" });

      // Enviar el correo electrónico con el código
      await sendEmail(
        email,
        "Password Reset Code",
        `Your password reset code is: ${code}`
      );
      res
        .status(200)
        .json({token});
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
};

export const validateCode = (req, res) => {
  try {
    const { code } = req.query;
    const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);

    if (!decodedToken) {
      return res.status(400).json({ message: "No token provided" });
    }

    if (Number(decodedToken.code)===Number(code)) {
      res.status(200).json({ message: "Code is valid" });
    } else {
      res.status(400).json({ message: "Invalid code" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error occurred" });
  }
};

export const getUser = async (req, res) => {
  try {
    const decodedToken = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
    const userEmail = decodedToken.email;
    const usuario = await getUserService(userEmail);
    return res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const token = jwt.verify(req.headers["x-acces-token"], SECRET_JWT);
    const { password } = req.body;
    if (!token) {
      return res.status(400).json({ message: "No token provided" });
    }
    const response = await updateUserService(password,token.email);
    res
      .status(200)
      .json({  menssage: "password was update successfully." });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

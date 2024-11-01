import express from "express";
import { getAllmessage, sendMessage } from "../controller/messageControler.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAdminAuthenticated, getAllmessage)


export default router;
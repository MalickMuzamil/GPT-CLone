import express from 'express';
import { fetchFunction, RegisterUser, LoginUser} from "../Controller/controller.js";

const router = express.Router();

router.post("/message", fetchFunction);
router.post("/" , RegisterUser)
router.post("/login", LoginUser);

export default router;
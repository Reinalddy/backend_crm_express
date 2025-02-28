import { Router } from "express";
import * as UserController from "../controllers/userController";
import * as AuthController from "../controllers/authController";
import * as AiController from "../controllers/aiController";

const router = Router();

// MERCHAT REGISTER, MERCHANT SHOULD REGISTER FIRST AND GET TOKEN TO USE AI API
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

router.get("/users/get", UserController.getAllUsers);
router.get("/user/:id", UserController.getUserById);
router.post("/users", UserController.createUser);
router.put("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);

// AI API
router.post("/ai/ask", AiController.askAi);


export default router;
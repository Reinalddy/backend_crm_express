import { Router } from "express";
import * as UserController from "../controllers/userController";

const router = Router();

router.get("/users/get", UserController.getAllUsers);
router.get("/user/:id", UserController.getUserById);
router.post("/users", UserController.createUser);
router.put("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);


export default router;
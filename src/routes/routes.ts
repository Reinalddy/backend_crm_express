import { Router } from "express";
import * as UserController from "../controllers/userController";

const router = Router();

router.get("/users/get", async (req, res, next) => {
    try {
        await UserController.getAllUsers(req, res);
    } catch (error) {
        next(error); // ✅ Proper error handling in Express
    }
});
router.get("/user/:id", UserController.getUserById);
router.post("/users", UserController.createUser);
router.put("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);


export default router;
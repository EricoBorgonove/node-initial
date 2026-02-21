import { Router } from "express";
import * as usersController from "../controllers/users.controller.js";

const router = Router();

router.post ("/users", usersController.create);
router.get ("/users", usersController.list);
router.get ("/users/:id", usersController.getById);
router.put ("/users/:id", usersController.update);
router.delete ("/users/:id", usersController.remove);

export default router;
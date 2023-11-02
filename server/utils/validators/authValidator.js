import { body, validationResult } from "express-validator";
import validatorResult from "../../middlwares/validatorMiddlwares.js";

export const loginValidator = [
  body("username")
    .notEmpty()
    .withMessage("Username is not allowed to be empty"),

  body("password")
    .notEmpty()
    .withMessage("Password is not allowed to be empty"),
  validatorResult,
];

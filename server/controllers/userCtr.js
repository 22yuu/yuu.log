import User from "../model/User.js";
import { createOne } from "./handlersFactory.js";

export const createUser = createOne(User);

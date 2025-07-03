import connectDB from "./DB/connection.js";
import authController from "./modules/auth/auth.controller.js";
import { globalErrorHandling } from "./utils/response/error.response.js";

const bootstrap = (app, express) => {
  app.use(express.json());
  app.get("/", (req, res) => res.send("Hello World!"));
  app.use("/auth", authController);
  app.use((req, res, next) => {
    return res.status(404).json({ message: "In-valid routing" });
  });

  // error handling
  app.use(globalErrorHandling);

  //connect to the database
  connectDB();
};

export default bootstrap;

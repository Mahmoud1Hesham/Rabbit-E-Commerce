import connectDB from "./DB/connection.js";
import authController from "./modules/auth/auth.controller.js";

const bootstrap = (app, express) => {
  app.use(express.json());
  app.get("/", (req, res) => res.send("Hello World!"));
  app.use("/auth", authController);
  app.use((req, res, next) => {
    return res.status(404).json({ message: "In-valid routing" });
  });

  //connect to the database
  connectDB();
};

export default bootstrap;

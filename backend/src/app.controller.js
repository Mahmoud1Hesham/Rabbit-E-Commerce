import connectDB from "./DB/connection.js";
import productController from "./modules/product/product.controller.js"
import authController from "./modules/auth/auth.controller.js";
import userController from "./modules/user/user.controller.js"
import { globalErrorHandling } from "./utils/response/error.response.js";

const bootstrap = (app, express) => {
  app.use(express.json());
  //main routing
  app.get("/", (req, res) => res.send("Hello World!"));
  app.use("/auth", authController);
  app.use("/user" , userController)
app.use("/product", productController);

  app.use((req, res, next) => {
    return res.status(404).json({ message: "In-valid routing" });
  });

  // error handling
  app.use(globalErrorHandling);

  //connect to the database
  connectDB();
};

export default bootstrap;

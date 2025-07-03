import bootstrap from "./src/app.controller.js";
import express from "express";
import path from "node:path";
import * as dotenv from "dotenv";
dotenv.config({ path: path.resolve("./config/.env") });

const app = express();
const port = process.env.PORT || 5000;

//  bootstrap function to set up the app
bootstrap(app, express);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

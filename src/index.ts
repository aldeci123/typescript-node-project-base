import express from "express";
import { router } from "./router/index";

const app = express();

router(app);

app.listen(3000, () => {
    console.log("Ola mundo!");
});
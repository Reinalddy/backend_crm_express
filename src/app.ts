import express from "express";
import cors from "cors";
import  router  from "./routes/routes";

const app = express();

app.use(express.json()); // ✅ Enable JSON parsing
app.use(express.urlencoded({ extended: true })); // ✅ Support URL-encoded form data
// app.use(cors());
app.use(router);

export default app;
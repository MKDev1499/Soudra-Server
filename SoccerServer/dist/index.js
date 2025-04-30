import express from "express";
import answerRoutes from "./routes/answer.routes"; // Ensure the file extension is correct
const app = express();
const port = 3001;
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
app.use("/answers", answerRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

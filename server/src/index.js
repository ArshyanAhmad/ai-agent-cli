import express from "express";
import "dotenv/config";

const port = process.env.PORT || 3005;

const app = express();

// localhost:3005/health
app.get("/health", (req, res) => {
   res.send("Server is healthy");
});

app.listen(port, () => {
   console.log(`Server is running on port localhost:${port}`);
});

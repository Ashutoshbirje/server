import express from "express";
import dotenv from "dotenv";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;

const tokens = process.env.GITHUB_TOKENS ? process.env.GITHUB_TOKENS.split(",") : [];

app.get("/token", (req, res) => {
  res.json({
    message: "Secure API",
    count: tokens.length,
    tokens: tokens.map(() => "****PROTECTED****") 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

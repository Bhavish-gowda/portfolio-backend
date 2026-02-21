import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.post("/api/contact", (req, res) => {
  console.log("Contact form:", req.body);

  res.json({
    success: true,
    message: "Message received successfully"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

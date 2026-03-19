import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true, //Cho phép client gửi cookie/session/token kèm request (dùng cho auth), và khi bật thì phải chỉ định origin cụ thể (không dùng "*")
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

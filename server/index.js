const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cpu_e_learn",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

app.get("/user", (req, res) => {
  const sql = "SELECT * FROM userdata";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/", (req, res) => {
  return res.json("from backend side");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM userdata WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, data) => {
    if (err) return res.json(err);
    if (data.length > 0) {
      return res.json({ success: true, message: "Login successful" });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  });
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const sql = "INSERT INTO userdata (username, password) VALUES (?, ?)";
  db.query(sql, [username, password], (err, result) => {
    if (err) return res.json(err);
    return res.json({ success: true, message: "Signup successful" });
  });
});

app.listen(8081, () => {
  console.log("listening on port 8081");
});

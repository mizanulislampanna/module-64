const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("look mama i can code node js now");
});

const users = [
  { id: 1, name: "sabana", email: "sabana@gamil.com", phone: "0178888888" },
  { id: 2, name: "sabnur", email: "sabnur@gamil.com", phone: "0178888888" },
  {
    id: 3,
    name: "srita",
    email: "srita@gamil.com",
    phone: "0178888888",
  },
  { id: 4, name: "suchonda", email: "suchonda@gamil.com", phone: "0178888888" },
  { id: 5, name: "srabonti", email: "srabonti@gamil.com", phone: "0178888888" },
  { id: 6, name: "sabila", email: "sabila@gamil.com", phone: "0178888888" },
  { id: 7, name: "sohana", email: "sohana@gamil.com", phone: "0178888888" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port", port);
});

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3007;

app.use(cors());
const router = express.Router();

router.get("/iss-now", async (req, res) => {
  try {
    const response = await fetch("http://api.open-notify.org/iss-now.json");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
});

router.get("/astros", async (req, res) => {
  try {
    const response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
});

app.use("/", router);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

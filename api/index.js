const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const UserSchema = require("./UserModel/UserModel");
const cors = require("cors");
const app = express();
const port = 4000;
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://samaddxb004:samad123@cluster0.zbjjd1v.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"));

async function fetchFromApi() {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const data = Object.entries(response.data)
      .slice(0, 10)
      .map((item) => {
        const [key, value] = item;
        return {
          name: value.name,
          last: value.last,
          buy: value.buy,
          sell: value.sell,
          volume: value.volume,
          base_unit: value.base_unit,
        };
      });
    await UserSchema.insertMany(data);
  } catch (error) {
    console.log(error);
  }
}
app.get("/api/crypto-data", async (req, res) => {
  try {
    const data = await UserSchema.find();
    res.json(data.slice(0, 10));
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  fetchFromApi();
});

// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/Any?type=twopart";

app.use(express.static("public"));


app.get("/", async (req, res) => {
    try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", { setup: result.data.setup, delivery: result.data.delivery });
    } catch (error) {
        console.log("An error happened: " + error.response.data);
        res.status(500)
      }
});


app.get("/get-joke", async (req, res) => {
    try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", { setup: result.data.setup, delivery: result.data.delivery });
    } catch (error) {
        console.log("An error happened: " + error.response.data);
        res.status(500)
      }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/api/mostPopular", async (req, res) => {
  try {
    const response = await axios.get(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
        process.env.GOOGLE_KEY
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch treding videos" });
  }
});

app.get("/api/search", async (req, res) => {
  try {
    const response = await axios.get(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&regionCode=IN&key=" +
        process.env.GOOGLE_KEY +
        "&q=" +
        req.query.q
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch treding videos" });
  }
});

app.get("/api/searchSuggestions", async (req, res) => {
  try {
    const response = await axios.get(
      "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        req.query.q
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch treding videos" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

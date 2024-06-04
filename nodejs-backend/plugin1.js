import express from "express";
import cors from 'cors'
const app = express();
app.use(cors());
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/query", async (req, res) => {
  try {
    const str = req.body.text;
    const api_key = "peEBJJdSsmBVc6AcUgQjjht73rY7W1JF";
    const externalUserId = "hackbrokers";

    const sessionResponse = await fetch(
      "https://gateway-dev.on-demand.io/chat/v1/sessions",
      {
        method: "POST",
        headers: {
          apikey: api_key,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pluginIds: [], externalUserId: externalUserId }),
      }
    );
    const sessionData = await sessionResponse.json();
    const sessionId = sessionData.chatSession.id;

    const queryResponse = await fetch(
      `https://gateway-dev.on-demand.io/chat/v1/sessions/${sessionId}/query`,
      {
        method: "POST",
        headers: {
          apikey: api_key,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          endpointId: "predefined-openai-gpt4o",
          query: str,
          pluginIds: ["plugin-1717428904", "plugin-1717420060"],
          responseMode: "sync",
        }),
      }
    );
    const queryData = await queryResponse.json();
    console.log(queryData);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow requests from this origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allowed methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
    res.json(queryData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

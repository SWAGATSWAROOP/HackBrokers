import express from 'express'

const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello");
});

app.post('/query', async (req, res) => {
    try {
        const str = req.body.text;
        const api_key = "peEBJJdSsmBVc6AcUgQjjht73rY7W1JF";
        const externalUserId = "hackbrokers";

        const sessionResponse = await fetch('https://gateway-dev.on-demand.io/chat/v1/sessions', {
            method: 'POST',
            headers: {
                'apikey': api_key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "pluginIds": [], "externalUserId": externalUserId })
        });
        const sessionData = await sessionResponse.json();
        const sessionId = sessionData.chatSession.id;

        const queryResponse = await fetch(`https://gateway-dev.on-demand.io/chat/v1/sessions/${sessionId}/query`, {
            method: 'POST',
            headers: {
                'apikey': api_key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "endpointId": "predefined-openai-gpt4o",
                "query": str,
                "pluginIds": ["plugin-1717428904", "plugin-1717420060"],
                "responseMode": "sync"
            })
        });
        const queryData = await queryResponse.json();
        console.log(queryData);
        res.json(queryData); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

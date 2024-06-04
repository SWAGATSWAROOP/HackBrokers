import express from 'express~'
const app = express();

app.get('/',(req,res)=>{
    res.send("helo")
})

app.post('/query',(req,res)=>{
    const api_key = "peEBJJdSsmBVc6AcUgQjjht73rY7W1JF";
    const externalUserId = "hackbrokers";
    fetch('https://gateway-dev.on-demand.io/chat/v1/sessions', {
        method: 'POST',
        headers: {
            'apikey': api_key,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "pluginIds": [], "externalUserId":externalUserId })
    })
    .then(response => 
        response.json(),
        )
    .then(data => {
        console.log(data)
        const sessionId =  data.chatSession.id ;
    

        fetch(`https://gateway-dev.on-demand.io/chat/v1/sessions/${sessionId}/query`, {
            method: 'POST',
            headers: {
                'apikey': api_key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                "endpointId": "predefined-openai-gpt4o", 
                "query": "i have 2 Bitcoins analyze my account", 
                "pluginIds": ["plugin-1717428904", "plugin-1717420060"], 
                "responseMode": "sync" 
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
})

app.listen(4000)
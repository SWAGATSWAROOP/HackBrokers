import { NextResponse } from "next/server";

export async function POST() {
    const api_key = "peEBJJdSsmBVc6AcUgQjjht73rY7W1JF";
    const externalUserId = "hackbrokers";
    
    try {
        const sessionResponse = await fetch('https://gateway-dev.on-demand.io/chat/v1/sessions', {
            method: 'POST',
            headers: {
                'apikey': api_key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "pluginIds": [], "externalUserId": externalUserId })
        });
        
        if (!sessionResponse.ok) {
            return NextResponse.error();
        }
        console.log(sessionResponse)
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
                "query": "i have 2 Bitcoins analyze my account", 
                "pluginIds": ["plugin-1717428904", "plugin-1717420060"], 
                "responseMode": "sync" 
            })
        });
        
        if (!queryResponse.ok) {
            return NextResponse.error();
        }
        
        const queryData = await queryResponse.json();
        console.log(queryData);
        
        return NextResponse.json(queryData);
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}

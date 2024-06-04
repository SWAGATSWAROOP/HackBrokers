import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

async function makePostRequest(url: string, headers: any, body: any): Promise<any> {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: url,
        headers: headers,
        data: body
    };

    try {
        const response: AxiosResponse = await axios(config);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Error making POST request: ${error.message} - ${error.response?.data}`);
        } else {
            throw new Error(`Error making POST request: ${error}`);
        }
    }
}

function createChatSession(apiKey: string, externalUserId: string): Promise<any> {
    const url = 'https://gateway-dev.on-demand.io/chat/v1/sessions';
    const headers = {
        'apikey': '344fa7d6-b410-4a2b-93da-e44129ace034' // Use the apiKey parameter
    };
    const body = {
        "pluginIds": [],
        "externalUserId": 'HackBrokers' // Use the externalUserId parameter
    };

    return makePostRequest(url, headers, body);
}

function answerQuery(apiKey: string, sessionId: string, query: string): Promise<any> {
    const url = `https://gateway-dev.on-demand.io/chat/v1/sessions/${sessionId}/query`; // Use backticks for string interpolation
    const headers = {
        'apikey': apiKey
    };
    const body = {
        "endpointId": "predefined-openai-gpt4o",
        "query": query,
        "pluginIds": ["plugin-1717428904"],
        "responseMode": "sync"
    };

    return makePostRequest(url, headers, body);
}

// Usage example
const apiKey = "<replace_api_key>";
const externalUserId = "<replace_external_user_id>";
const query = "Put your query here";

createChatSession(apiKey, externalUserId)
    .then((chatSession: any) => {
        const sessionId = chatSession.id;
        return answerQuery(apiKey, sessionId, query);
    })
    .then((response: any) => {
        console.log(response);
    })
    .catch((error: any) => {
        console.error(error);
    });

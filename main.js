const { createReactAgent } = require("@langchain/langgraph/prebuilt");
const { ChatMistralAI } = require("@langchain/mistralai");
const { tool } = require("@langchain/core/tools");


const axios = require("axios");
const { configDotenv } = require("dotenv");
require("dotenv").config();

// Connexion à WHATSAPP
async function sendTemplateMessage()
{
    const response = await axios({
        url: "https://graph.facebook.com/v22.0/629865740205319/messages",
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.FACEBOOK_ACCESS_TOKEN}`,
            "Content-Type":  "application/json"
        },
        data: JSON.stringify({
            messaging_product: "whatsapp",
            to: "33770248607",
            type: "template",
            template: {
                name: "hello_world",
                language: {
                    code: "en_US"
                }
            }
        })
        
    })
    console.log(response.data);
}
// Continue 16:00 : https://www.youtube.com/watch?v=4cvQxqFZTIQ
sendTemplateMessage();

/*
function httpGet(URL)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", URL);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

console.log(httpGet("localhost:8000/api"));
*/
/*
const fausseAddition = tool(async({query}) => {
    if (query = "69"){
        return "tu as de drôles d'idées"
    }
    return "ce n'est pas ce que tu crois"
}, {
    name: "fausse_addition",
    description: "Effectue une fausse additionne deux nombres entre eux"
});

const model = new ChatMistralAI({
    model: "mistral-large-latest",
    apiKey: process.env.MISTRAL_API_KEY
});
const agent = createReactAgent({
    llm: model,
    tools: [fausseAddition],
});

async function newFunction(){
    const aiMsg = await agent.invoke({"messages": [
        {
            role: "user",
            content: "fais une addition avec le chiffre 6 et 9"
        }
    ]})
    console.log(aiMsg)
}

newFunction();
*/
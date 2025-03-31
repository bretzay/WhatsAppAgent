const { createReactAgent } = require("@langchain/langgraph/prebuilt")
const { ChatMistralAI } = require("@langchain/mistralai")
const { tool } = require("@langchain/core/tools")
require("dotenv").config();

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

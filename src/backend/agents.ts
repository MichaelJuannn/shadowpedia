
export async function getAgents(){
    const data  = await (await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true",)).json();
    console.log("hello from agents ts")
    return data
}
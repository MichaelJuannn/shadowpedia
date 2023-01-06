import { GetStaticProps } from "next"
import AgentPage from "../../components/agentsolo"

interface agentById {
    [name: string]: string
}
const agentDict: agentById = {
    fade: "dade69b4-4f5a-8528-247b-219e5a1facd6",
    breach: "5f8d3a7f-467b-97f3-062c-13acf203c006",
    raze: "f94c3b30-42be-e959-889c-5aa313dba261",
    chamber: "22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
    kayo: "601dbbe7-43ce-be57-2a40-4abd24953621",
    skye: "6f2a04ca-43e0-be17-7f36-b3908627744d",
    cyper: "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
    sova: "ded3520f-4264-bfed-162d-b080e2abccf9",
    killjoy: "1e58de9c-4950-5125-93e9-a0aee9f98746",
    harbor: "95b78ed7-4637-86d9-7e41-71ba8c293152",
    viper: "707eab51-4836-f488-046a-cda6bf494859",
    phoenix: "eb93336a-449b-9c1b-0a54-a891f7921d69",
    astra: "41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
    brimstone: "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
    neon: "bb2a4828-46eb-8cd1-e765-15848195d751",
    yoru: "7f94d92c-4234-0a36-9646-3a87eb8b5c89",
    sage: "569fdd95-4d10-43ab-ca70-79becc718b46",
    reyna: "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
    omen: "8e253930-4c05-31dd-1b6c-968525494517",
    jett: "add6443a-41bd-e414-f6ad-e58d267f4e95",
}

/* this code below use map because return path must be array 0f object
contains params. agentIndex contains agent name. using get static path because its needed
for get static props in static site */

export async function getStaticPaths() {
    const agentArray = Object.keys(agentDict)
    const pathParams = agentArray.map((agentIndex) => {
        return { params: { agent: agentIndex } }
    })
    return {
        paths: pathParams,
        fallback: false, // can also be true or 'blocking'
    }
}

/* using key because of dynamic pages that accept agents name. key can be string, array of string or 
undefined so we need to filter those with if statement
 to only accept STRING otherwise return empty props */

export const getStaticProps: GetStaticProps = async (context) => {
    const key = context.params?.agent
    if (typeof key !== "string") return { props: {} }
    const agent = agentDict[key]
    const data = await (await fetch(`https://valorant-api.com/v1/agents/${agent}`)).json()
    return {
        props: data
    }
}

export default function Agent({ data }: any) {
    return (
        <>
            <AgentPage data={data} />
        </>
    )
}
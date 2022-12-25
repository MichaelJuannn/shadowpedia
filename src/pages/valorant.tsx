import { GetStaticProps } from "next";
import Agentcard from "../components/agentcard";

export const getStaticProps: GetStaticProps = async (context) => {

    const data = await (await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true",)).json();
    return {
        props: data
    }
}

export default function Agents(props: any) {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {props.data.map((agentData: any) => <Agentcard data={agentData} />)}
            </div>
        </>
    )
}
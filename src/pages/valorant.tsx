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
            <div>
                {props.data.map((agentData: any) => <Agentcard data={agentData} />)}
            </div>
        </>
    )
}
interface Abilities {
    displayName: string,
    displayIcon: string
}

interface Agent {
    data: {
        displayName: string,
        displayIcon: string,
        role: {
            displayName: string,
            displayIcon: string
        },
        abilities: Abilities[]
    }
}


export default function Agentcard(props: Agent) {
    return (
        <>
            <div>
                {props.data.role.displayName}
            </div>
            <img src={props.data.displayIcon} alt="" />
        </>)

}
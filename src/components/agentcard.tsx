
import Link from "next/link"
import { useEffect, useState } from "react"
interface Abilities {
    displayName: string,
    displayIcon: string
}

interface Agent {
    data: {
        displayName: string,
        displayIcon: string,
        description: string,
        role: {
            displayName: string,
            displayIcon: string
        },
        abilities: Abilities[]
    }
}


export default function Agentcard(props: Agent) {
    if (props.data.displayName == "KAY/O")
        props.data.displayName = "Kayo"

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><Link href={`/valorant/${props.data.displayName.toLowerCase()}`}><img src={props.data.displayIcon} alt={props.data.displayName} width={256} /></Link></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.data.displayName}</h2>
                    <p>{props.data.description}</p>
                    <div className="card-actions ">
                        <div className="tooltip tooltip-primary" data-tip={props.data.abilities[0].displayName}>
                            <img src={props.data.abilities[0].displayIcon} alt="" width={40} />
                        </div>
                        <div className="tooltip tooltip-primary" data-tip={props.data.abilities[1].displayName}>
                            <img src={props.data.abilities[1].displayIcon} alt="" width={40} />
                        </div>
                        <div className="tooltip tooltip-primary" data-tip={props.data.abilities[2].displayName}>
                            <img src={props.data.abilities[2].displayIcon} alt="" width={40} />
                        </div>
                        <div className="tooltip tooltip-primary" data-tip={props.data.abilities[3].displayName}>
                            <img src={props.data.abilities[3].displayIcon} alt="" width={40} />
                        </div>
                    </div>
                </div>
            </div>
        </>)

}
import {Destination} from "../../../model/destination";
import React, {useEffect} from "react";
import {useDestination} from "../../../hook/useDestination";
import {DestinationCard} from "../../element/destination-card/destination-card";
import './destination.scss'

export const Destinations = () => {
    const {destinations, loadDestination} = useDestination();

    useEffect(() => {
        loadDestination()
    }, [])

    return (
        <div className='destinations-container'>
            {
                destinations.length > 0 ? destinations.map((destination: Destination, i: number) => (
                   <DestinationCard destination={destination} key={i} indexDestination={i}></DestinationCard>
                ))
                    : <label>Aucune destinations enregistrées.</label>
            }
        </div>
    )
}
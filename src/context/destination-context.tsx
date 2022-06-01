import React, {createContext, FunctionComponent, useState} from "react";
import {Destination} from "../model/destination";
import {DestinationType} from "../type/destination-type";
import {Props} from "../interface/props";

export const DestinationContext = createContext<DestinationType | null>(null);

const DestinationProvider: FunctionComponent<Props> = ({children}) => {
    const [destinations, setDestinations] = useState<Destination[]>([])

    const loadDestination = (): void => {
        const destinations: Destination[] = JSON.parse(String(localStorage.getItem('destinations')))
        if (destinations && destinations.length > 0) {
            setDestinations(destinations)
        }
    }

    const saveDestination = (newDestination: Destination): void => {
        const newStateDestination = [newDestination, ...destinations]
        setDestinations(newStateDestination)
        localStorage.setItem('destinations', JSON.stringify(newStateDestination));
    }

    const updateCheck = (key: number): void => {
        const destinationUpdated = destinations;
        destinationUpdated[key].checked = !destinationUpdated[key].checked

        setDestinations(destinationUpdated)
        localStorage.setItem('destinations', JSON.stringify(destinationUpdated));
    }

    return (
        <DestinationContext.Provider value={{destinations, loadDestination, saveDestination, updateCheck}}>
            {children}
        </DestinationContext.Provider>
    )
}

export default DestinationProvider;


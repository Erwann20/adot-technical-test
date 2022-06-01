import {useContext} from "react";
import {DestinationContext} from "../context/destination-context";
import {DestinationType} from "../type/destination-type";

export const useDestination = () => {
    const {destinations, loadDestination, saveDestination, updateCheck} = useContext(DestinationContext) as DestinationType;

    return {
        destinations, loadDestination, saveDestination, updateCheck
    };
}
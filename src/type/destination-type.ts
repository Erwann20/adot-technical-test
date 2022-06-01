import {Destination} from "../model/destination";

export type DestinationType = {
    destinations: Destination[];
    loadDestination: () => void;
    saveDestination: (newDestination: Destination) => void;
    updateCheck: (key: number) => void;
}
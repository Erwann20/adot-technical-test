import {RequestDestination} from "../model/request-destination";

export type CreateDestinationType = {
    setDestination: (newDestination: RequestDestination) => void
}
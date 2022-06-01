import {CountItemDestinationType} from "../../../type/count-item-destination-type";
import {CountItem} from "../../fundamentale/count-item/count-item";
import {DestinationLibelleEnum} from "../../../enum/destination-libelle-enum";
import './count-item-destination.scss';

export const CountItemDestination = ({destinationDetail}: CountItemDestinationType) => {
    return(
        <div className='count-item-destination'>
            <CountItem number={destinationDetail.countHabitant} unit='M' libelle={DestinationLibelleEnum.HABITANTS}/>
            <CountItem number={destinationDetail.countHotel} libelle={DestinationLibelleEnum.HOTEl}/>
            <CountItem number={destinationDetail.averageRevenue} unit='€' libelle={DestinationLibelleEnum.REVENUE_MOY}/>
            <CountItem number={destinationDetail.area} libelle={DestinationLibelleEnum.AREA}/>
        </div>
    )
}
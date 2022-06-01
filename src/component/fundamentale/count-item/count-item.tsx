import {CountItemType} from "../../../type/count-item-type";
import './count-item.scss'
export const CountItem = ({number, unit, libelle}: CountItemType) => {
    return(
        <div className='count-item'>
            <label>
                {number}<span>{unit}</span>
            </label>
            <span>{libelle}</span>
        </div>
    )
}
import {TitleDescriptionType} from "../../../type/title-description-type";
import './title-description.scss'
export const TitleDescription = ({title, description}: TitleDescriptionType) => {
    return(
        <div className='title-description'>
            <label>{title}</label>
            <p>{description}</p>
        </div>
    )
}
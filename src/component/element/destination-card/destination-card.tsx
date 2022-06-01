import {DestinationCardType} from "../../../type/destination-card-type";
import {TitleDescription} from "../../fundamentale/title-description/title-description";
import {ActionSwitch} from "../../fundamentale/action-switch/action-switch";
import {CountItemDestination} from "../../layout/count-item-destination/count-item-destination";
import './destination-card.scss';
import {useEffect, useState} from "react";
import {useDestination} from "../../../hook/useDestination";

export const DestinationCard = ({destination, indexDestination}: DestinationCardType) => {
    const {updateCheck} = useDestination()
    const [isChecked, setIsChecked] = useState<boolean>(destination.checked);

    const imageStyle = {
        width: '100%',
        height: '130px',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(${destination.imageLink})`,
    };

    useEffect(() => {
        setIsChecked(destination.checked);
    }, [destination.checked]);

    const updateChecked = (): void => {
        updateCheck(indexDestination);
        setIsChecked(!isChecked);
    }
    return(
        <div className='destination-card'>
            <div style={imageStyle}>
            </div>
            <div className='destination-header'>
                <TitleDescription title={destination.name} description={destination.adress}></TitleDescription>
                <ActionSwitch id={`action-switch-${indexDestination}`} value={isChecked} handleToggle={updateChecked}></ActionSwitch>
            </div>
            <CountItemDestination destinationDetail={destination.detail}></CountItemDestination>
        </div>
    );
}
import {ActionInput} from "../../fundamentale/action-input/action-input";
import {ChangeEvent, useState} from "react";
import {CreateDestinationType} from "../../../type/create-destination-type";
import {RequestDestination} from "../../../model/request-destination";
import './create-destination.scss'
import {ActionSwitch} from "../../fundamentale/action-switch/action-switch";

export const CreateDestination = ({setDestination}: CreateDestinationType) => {
    const [newDestination] = useState<RequestDestination>({
        checked: false
    });
    const [isChecked, setIsChecked] = useState<boolean>(false);


    const updateNewDestination = (event: ChangeEvent<HTMLInputElement>): void => {
        const key: keyof RequestDestination = event.target.name as keyof RequestDestination;
        if (key && event.target.value) {
            newDestination[key] = event.target.value as any;
            setDestination(newDestination);
        }
    };

    const updateDestinationChecked = (): void => {
        const checkedUpdate = !isChecked
        setIsChecked(checkedUpdate)
        newDestination.checked = checkedUpdate;
        setDestination(newDestination)
    };

    return (
        <div className='create-destination'>
            <ActionInput placeholder={'Nom de la destination'}
                         autoFocus={true}
                         name='name'
                         required={true}
                         changeValue={(newDestinationEvent: ChangeEvent<HTMLInputElement>) => updateNewDestination(newDestinationEvent)}/>
            <ActionInput placeholder={'Adresse'}
                         name='adress'
                         required={true}
                         changeValue={(newAdressEvent: ChangeEvent<HTMLInputElement>) => updateNewDestination(newAdressEvent)}/>
            <ActionInput placeholder={'Lien de l\'image'}
                         name='imageLink'
                         required={true}
                         changeValue={(newImageLinkEvent: ChangeEvent<HTMLInputElement>) => updateNewDestination(newImageLinkEvent)}/>
            <div className="destinations-detail">
                <ActionInput placeholder={'Nb Habitants'}
                             type='number'
                             required={true}
                             name='countHabitant'
                             changeValue={(newNbHabitantEvent: ChangeEvent<HTMLInputElement>) => updateNewDestination(newNbHabitantEvent)}/>
                <ActionInput placeholder={'Nb. Hôtels'}
                             type='number'
                             name='countHotel'
                             required={true}
                             changeValue={(newNbHotelEvent: ChangeEvent<HTMLInputElement>) => updateNewDestination(newNbHotelEvent)}/>
                <ActionInput placeholder={'Revenu Moy'}
                             type='number'
                             name='averageRevenue'
                             required={true}
                             changeValue={(averageRevenueEvent: ChangeEvent<HTMLInputElement>) => updateNewDestination(averageRevenueEvent)}/>
                <ActionInput placeholder={'Superficie'}
                             required={true}
                             type='number'
                             name='area'
                             changeValue={(areaEvent: ChangeEvent<HTMLInputElement>) => updateNewDestination(areaEvent)}/>
            </div>
            <div className="checked-container">
                <ActionSwitch id={`action-switch-create`} value={isChecked} handleToggle={() => updateDestinationChecked()}></ActionSwitch>
                <label>Activer</label>
            </div>
        </div>
    )
}
import React, {useState} from "react";
import {useDestination} from "../../../hook/useDestination";
import {Destination} from "../../../model/destination";
import {HeaderAction} from "../../element/header-action/header-action";
import {ModalContainer} from "../modal-container/modal-container";
import {CreateDestination} from "../create-destination/create-destination";
import {RequestDestination} from "../../../model/request-destination";
import {ActionButton} from "../../fundamentale/action-button/action-button";
import iconSvg from '../../../assets/icon/add.svg'

export const HeaderActionDestination = () => {
    const {saveDestination} = useDestination()
    const [modalCreate, setModalCreate] = useState<boolean>(false);
    const [newDestination, setNewDestination] = useState<RequestDestination>();

    const save = (): void => {
        if (newDestination) {
            const {name, adress, area, countHotel, averageRevenue, countHabitant, imageLink, checked} = newDestination
            if (name && adress && area && countHotel && averageRevenue && countHabitant && imageLink && checked !== undefined) {
                const destinationToSave: Destination = {
                    adress: adress,
                    name: name,
                    detail: {
                        area: area,
                        countHotel: countHotel,
                        averageRevenue: averageRevenue,
                        countHabitant: countHabitant
                    },
                    imageLink: imageLink,
                    checked: checked
                };

                saveDestination(destinationToSave);
                setModalCreate(false);
            }
        }
    }

    return(
        <HeaderAction>
            <h2 className='title'>Destinations</h2>
            <ActionButton  actionClick={() => setModalCreate(true)}>
                <img src={iconSvg}/>
                AJOUTER
            </ActionButton>
            <ModalContainer title='Ajouter une nouvelle destination'
                            isOpen={modalCreate}
                            okAction={() => save()}
                            cancelAction={() => setModalCreate(false)}>
                <CreateDestination setDestination={setNewDestination}/>
            </ModalContainer>
        </HeaderAction>
    )
}
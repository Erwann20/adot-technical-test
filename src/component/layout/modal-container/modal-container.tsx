import {useCallback, useEffect} from "react";
import './modal-container.scss';
import {ModalContainerType} from "../../../type/modal-container-type";
import {ActionLink} from "../../fundamentale/action-link/action-link";

export const ModalContainer = ({
                               children,
                               title,
                               isOpen,
                               okAction,
                               cancelAction
                           }: ModalContainerType) => {

    const escFunction = useCallback((event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            cancelAction()
        }
    }, []);

    useEffect(() => {
        if (document) {
            document.addEventListener("keydown", escFunction);
            return (): void => {
                document.removeEventListener("keydown", escFunction);
            };
        }
    }, [escFunction]);


    return (
        <>
            {
                isOpen &&
                <>
                    <div className='modal-shadow' onClick={() => cancelAction()}>
                    </div>
                    <div className='modal-container'>
                        <label>{title}</label>
                        <div className='modal-content'>
                            {children}
                        </div>
                        <div className='modal-action'>
                            <ActionLink libelle='CANCEL' isPrimary={false} actionClick={() => cancelAction()}></ActionLink>
                            <ActionLink libelle='CONFIRM' isPrimary={true} actionClick={() => okAction()}></ActionLink>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
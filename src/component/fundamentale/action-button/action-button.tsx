import './action-button.scss'
import {ActionButtonType} from "../../../type/action-button-type";

export const ActionButton = ({children, actionClick, id = 'action-button'}: ActionButtonType) => {
    return (
        <button className="button is-primary"
                id={id}
                onClick={() => actionClick()}>
            {children}
        </button>

    )
}
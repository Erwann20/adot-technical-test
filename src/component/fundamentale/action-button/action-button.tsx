import './action-button.scss'
import {ActionButtonType} from "../../../type/action-button-type";

export const ActionButton = ({children, actionClick}: ActionButtonType) => {
    return (
        <button className="button is-primary" onClick={() => actionClick()}>
            {children}
        </button>

    )
}
import './action-switch.scss'
import {ActionSwitchType} from "../../../type/action-switch-type";
export const ActionSwitch = ({id, value, handleToggle}: ActionSwitchType) => {
    return(
        <div className='action-switch'>
            <input id={id} type='checkbox' checked={value} onChange={() => handleToggle()}/>
            <label className='switch-label' htmlFor={id}></label>
        </div>
    )
}
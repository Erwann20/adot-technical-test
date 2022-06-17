import {FormFieldType} from "../../../type/form-field-type";
import './action-input.scss'
export const ActionInput = ({type, placeholder, name, autoFocus, changeValue, required}: FormFieldType) => {
    return (
        <div className='action-input'>
            <input autoFocus={autoFocus}
                   required={required}
                   name={name}
                   id={name}
                   type={type ? type : 'text'}
                   placeholder={placeholder}
                   onChange={(e) => changeValue(e)}/>
        </div>
    )
}
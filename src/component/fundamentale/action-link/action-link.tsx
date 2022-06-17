import {ActionLinkType} from "../../../type/action-link-type";
import './action-link.scss';

export const ActionLink = ({libelle, isPrimary, actionClick, id = 'action-link'}: ActionLinkType) => {
    return(
        <a id={id} className={isPrimary ? 'link primary-link' : 'link secondary-link'} onClick={() => actionClick()}>
            {libelle}
        </a>
    )
}
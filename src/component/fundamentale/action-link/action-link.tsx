import {ActionLinkType} from "../../../type/action-link-type";
import './action-link.scss';

export const ActionLink = ({libelle, isPrimary, actionClick}: ActionLinkType) => {
    return(
        <a data-testid="action-link" className={isPrimary ? 'link primary-link' : 'link secondary-link'} onClick={() => actionClick()}>
            {libelle}
        </a>
    )
}
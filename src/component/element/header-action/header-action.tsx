import {FunctionComponent} from "react";
import {Props} from "../../../interface/props";

export const HeaderAction: FunctionComponent<Props> = ({children}) => {
    return(
        <div className="is-flex is-justify-content-space-between is-align-items-center is-full mb-5">
            {children}
        </div>
    )
}
import {ReactNode} from "react";

export type ActionButtonType = {
    children: ReactNode;
    actionClick: () => void;
}
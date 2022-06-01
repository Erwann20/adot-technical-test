import {ReactNode} from "react";

export type ModalContainerType = {
    children: ReactNode;
    title: string,
    isOpen: boolean;
    cancelAction: () => void;
    okAction: () => void;
}
import {ChangeEvent} from "react";

export type FormFieldType = {
    type?: string;
    placeholder: string;
    name?: string;
    autoFocus?: boolean;
    changeValue: (value: ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
}
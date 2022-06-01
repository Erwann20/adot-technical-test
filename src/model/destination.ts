import {DestinationDetail} from "./destination-detail";

export class Destination {
    name: string;
    adress: string;
    imageLink: string;
    detail: DestinationDetail;
    checked: boolean;


    constructor(name: string, adress: string, imageLink: string, detail: DestinationDetail) {
        this.name = name;
        this.adress = adress;
        this.imageLink = imageLink;
        this.detail = detail;
        this.checked = false;
    }
}
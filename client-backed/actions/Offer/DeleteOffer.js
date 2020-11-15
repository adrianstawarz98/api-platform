import {baseURL} from "../../src/config.js";

export class DeleteOffer {
    DeleteOffer(delete_offer){
        axios.delete(baseURL + delete_offer).then( response => {
            console.log(response);
        } )
            .catch(error => {
                console.log(error);
            })
    }
}
import {baseURL} from "./config.js";
import { show } from "./view.js";
export const getData = () => {
    axios.get(baseURL + '/api/products').then(function(response){
       show(response.data['hydra:member'])
    })
        .catch(function (error) {
            console.log(error);
        })
}
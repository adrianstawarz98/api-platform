import {baseURL} from '../src/config'
import {email} from '../src/config'
import {password} from '../src/config'

export class Login {


    getJWTToken() // login
    {
        let params = {
            "email": email,
            "password": password
        }

        let config = {
            headers: {
                'accept': 'application/json',
            }
        }

        axios.post(baseURL+'/authentication_token', params, config)
            .then((response) => {
                //localStorage.setItem("jwt_token", response.data.token)
                 console.log(response.data.token);
            }).catch((error) => {
             console.log(error)
        })


    }

    logout()
    {
        localStorage.removeItem('jwt_token')
    }

}

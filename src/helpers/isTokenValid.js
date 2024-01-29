
import {jwtDecode} from "jwt-decode";

function isTokenValid(token){
    localStorage.setItem('token', token);
    const decoded=jwtDecode(token)

    const validTime = decoded.iat
    const expTime = decoded.exp
    console.log(validTime,expTime)
    if (expTime > validTime){
        console.log('yay')
        return true
    }else {
        console.log('nay')
        return false
    }


}
export default isTokenValid
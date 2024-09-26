import { useState } from "react"
import Cookies from 'js-cookie'

export const useLogin = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('login') === 'true');

    const handleLogin = () => {
        Cookies.set('login', 'true')
        setIsLoggedIn(true)
    }

    const handleLogOut = () => {
        Cookies.remove('login');
        setIsLoggedIn(false);
    }

    return{
        isLoggedIn,
        handleLogin,
        handleLogOut
    }
}
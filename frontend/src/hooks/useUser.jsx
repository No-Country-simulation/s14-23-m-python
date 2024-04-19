import Context from 'context/UserContext'
import { useCallback, useContext } from 'react'

export default function useUser() {
    const {jwt, setJWT } = useContext(Context);

    const login = useCallback(() => {
        setJWT('test')
    }, [setJWT])

    return {
        isLoggedIn: Boolean(jwt),
        login
    }
}
import { useEffect } from "react"
import { useAppSelector } from "../redux/hooks"
import { useNavigate } from "react-router-dom"



export const useRedirect = (redirectTo: string) => {

    const { currentUser } = useAppSelector(state => state.user)

    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser) {
            navigate(redirectTo)
        }
    }, [currentUser, navigate, redirectTo])

}
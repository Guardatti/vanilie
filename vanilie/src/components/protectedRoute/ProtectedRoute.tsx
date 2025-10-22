import React, { ReactNode } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { Navigate } from 'react-router-dom'


interface ProtectedRouteProps {
    children: ReactNode;
    redirectTo: string;
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children, redirectTo}) => {

    const { currentUser } = useAppSelector(state => state.user)

    if (currentUser) {
        return children
    } else {
        return <Navigate to={redirectTo}/>
    }

}

export default ProtectedRoute

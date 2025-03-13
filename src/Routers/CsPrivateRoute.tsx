import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import UnauthroisedAccess from "../Pages/UnauthroisedAccess";

interface privateRouteProps {
    roles?: number[];
    component: React.ReactElement
}

const CsPrivateRoute: React.FC<privateRouteProps> = ({ roles, component }) => {
    window.scrollTo(0,0);
    if (roles && roles?.length > 0) {
        const user = useSelector((state: RootState) => state.local.userToken);
        var userRoles = user?.token?.accessToken?.roles;
        const isAuthorised = userRoles?.some(x => roles.includes(x));
        if (isAuthorised) {
            return component;
        }
    }
    else{
        return component;
    }

    return <UnauthroisedAccess/>;
}

export default CsPrivateRoute
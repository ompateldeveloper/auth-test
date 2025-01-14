import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

export default function PrivateRoute({children}) {
    const user = useAuth();
    return <div>
        {
            user? children: <Navigate to={'/signin'} />
        }
    </div>;
}

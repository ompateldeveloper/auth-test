import { Route, Routes, useNavigate } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Secret from "./components/Secret";
import PrivateRoute from "./PrivateRoute";
import useAuth from "./hooks/useAuth";

export default function App() {
    const navi = useNavigate();
    const handleLogout = () => {
        window.localStorage.removeItem("user");
        navi("/signin");
    };
    const user = useAuth();
    return (
        <>
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/"
                    element={
                        <>
                            <div>email:{user?.userpayload?.email}</div>
                            <div>name:{user?.userpayload?.name}</div>
                            <ul>
                                <li>signup: create user POST:email,password,name RESPONSE:token,email,name</li>
                                <li>signin: validating user POST:email,password RESPONSE:token,email,name</li>
                            </ul>

                            {user && <button onClick={handleLogout}>Logout</button>}
                        </>
                    }
                />
                <Route
                    path="/secret"
                    element={
                        <PrivateRoute>
                            <Secret />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
}

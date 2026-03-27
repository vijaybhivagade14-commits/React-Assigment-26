import React, { useContext} from "react";   
import { UserContext } from "../context/UserContext";   

function Navbar() {
    const { user } = useContext(UserContext);

    return<h3>Logged in as: {user}</h3>

}

export default Navbar;
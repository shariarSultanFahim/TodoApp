import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [triggerEffect, setTriggerEffect] = useState(false);

    const triggerAllEffects = () =>{
        setTriggerEffect(prevState => !prevState);
    }

    const authInfo = {
        triggerEffect,
        triggerAllEffects
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )

}


export default AuthProvider;
import { createContext, useContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";

const SurveyContext = createContext();

const SurveyContextProvider = ({children}) => {

    const [user, setUser] = useState();
    const sub = user?.attributes?.sub;

    useEffect(() => {
        Auth.currentAuthenticatedUser({bypassCache: true}).then(setUser);
    }, []);

    return (
        <SurveyContext.Provider value = {{sub, user}}>
            {children}
        </SurveyContext.Provider>
    );
};

export default SurveyContextProvider;

export const useSurveyContext = () => useContext(SurveyContext);

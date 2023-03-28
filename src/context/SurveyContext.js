import { createContext, useContext, useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Survey } from "../models";

const SurveyContext = createContext();

const SurveyContextProvider = ({children}) => {

    const [user, setUser] = useState();
    const [survey, setSurvey] = useState();
    const sub = user?.attributes?.sub;

    useEffect(() => {
        Auth.currentAuthenticatedUser({bypassCache: true}).then(setUser);
    }, []);

    //console.log(user);
    //console.log(sub);

    useEffect(() => {
        if (!sub) {
            return;
        }
        DataStore.query(Survey, (r) => r.adminSub.eq(sub)).then(
            (surveys) => setSurvey(surveys[0])
        );
    }, [sub]);

    console.log(survey);

    return (
        <SurveyContext.Provider value = {{sub, survey, setSurvey}}>
            {children}
        </SurveyContext.Provider>
    );
};

export default SurveyContextProvider;

export const useSurveyContext = () => useContext(SurveyContext);

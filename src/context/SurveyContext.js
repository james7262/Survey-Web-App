import { createContext, useContext, useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Survey } from "../models";
import { Respondent } from "../models";
import { Question } from "../models";

const SurveyContext = createContext();

const SurveyContextProvider = ({children}) => {

    const [user, setUser] = useState();
    const [survey, setSurvey] = useState();
    const [respondent, setRespondent] = useState();
    const [question, setQuestion] = useState();

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
        DataStore.query(Respondent, (r) => r.adminSub.eq(sub)).then(
            (respondents) => setRespondent(respondents[0])
        );
        DataStore.query(Question, (r) => r.adminSub.eq(sub)).then(
            (questions) => setQuestion(questions[0])
        );
    }, [sub]);

    return (
        <SurveyContext.Provider value = {{sub, survey, setSurvey, respondent, setRespondent, question, setQuestion}}>
            {children}
        </SurveyContext.Provider>
    );
};

export default SurveyContextProvider;

export const useSurveyContext = () => useContext(SurveyContext);

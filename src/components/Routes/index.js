import { Route, Routes } from "react-router-dom";
import Surveys from "../../pages/Surveys";
import Respondents from "../../pages/Respondents";
import DetailedSurvey from "../../pages/DetailedSurvey";
import DetailedRespondent from "../../pages/DetailedRespondent";
import CreateSurvey from "../../pages/CreateSurvey";
import CreateRespondent from "../../pages/CreateRespondent";
import CreateQuestion from "../../pages/CreateQuestion";


const AppRoutes = () => {

    return (
        <Routes>
            <Route path = "/" element = {<Surveys/>}/>
            <Route path = "survey/create" element = {<CreateSurvey/>}/>
            <Route path = "survey/:id" element = {<DetailedSurvey />}/>
            <Route path = "respondent" element = {<Respondents/>}/>
            <Route path = "respondent/create" element = {<CreateRespondent/>}/>
            <Route path = "respondent/:id" element = {<DetailedRespondent/>}/>
            <Route path = "survey/:id/createQuestion" element = {<CreateQuestion/>}/>
        </Routes>
    );

};

export default AppRoutes;
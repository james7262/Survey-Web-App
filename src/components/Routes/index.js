import { Route, Routes } from "react-router-dom";
import Surveys from "../../pages/Surveys";
import Respondents from "../../pages/Respondents";
import Questions from "../../pages/Questions";
import DetailedSurvey from "../../pages/DetailedSurvey";
import DetailedRespondent from "../../pages/DetailedRespondent";
import DetailedQuestion from "../../pages/DetailedQuestion";
import CreateSurvey from "../../pages/CreateSurvey";
import CreateRespondent from "../../pages/CreateRespondent";
import CreateQuestion from "../../pages/CreateQuestion";
import UpdateSurvey from "../../pages/UpdateSurvey";
import UpdateRespondent from "../../pages/UpdateRespondent";
import UpdateQuestion from "../../pages/UpdateQuestion";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path = "/" element = {<Surveys/>}/>
            <Route path = "survey/create" element = {<CreateSurvey/>}/>
            <Route path = "survey/:id" element = {<DetailedSurvey />}/>
            <Route path = "survey/:id/updateSurvey" element = {<UpdateSurvey/>}/>
            <Route path = "respondent" element = {<Respondents/>}/>
            <Route path = "respondent/create" element = {<CreateRespondent/>}/>
            <Route path = "respondent/:id" element = {<DetailedRespondent/>}/>
            <Route path = "respondent/:id/updateRespondent" element = {<UpdateRespondent/>}/>
            <Route path = "question" element = {<Questions/>}/>
            <Route path = "question/create" element = {<CreateQuestion/>}/>
            <Route path = "question/:id" element = {<DetailedQuestion/>}/>
            <Route path = "question/:id/updateQuestion" element = {<UpdateQuestion/>}/>
        </Routes>
    );

};

export default AppRoutes;
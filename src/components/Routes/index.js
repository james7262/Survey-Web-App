import { Route, Routes } from "react-router-dom";
import Surveys from "../../pages/Surveys";
import Respondents from "../../pages/Respondents";
import DetailedSurvey from "../../pages/DetailedSurvey";
import CreateSurvey from "../../pages/CreateSurvey";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path = "/" element = {<Surveys/>}/>
            <Route path = "survey/create" element = {<CreateSurvey/>}/>
            <Route path = "survey/:id" element = {<DetailedSurvey />}/>
            <Route path = "respondents" element = {<Respondents/>}/>
        </Routes>
    );

};

export default AppRoutes;
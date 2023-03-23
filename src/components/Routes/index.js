import { Route, Routes } from "react-router-dom";
import Surveys from "../../pages/Surveys";
import Respondents from "../../pages/Respondents";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path = "/" element = {<Surveys/>}/>
            <Route path = "respondents" element = {<Respondents/>}/>
        </Routes>
    );

};

export default AppRoutes;
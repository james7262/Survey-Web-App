import { Route, Routes } from "react-router-dom";
import Surveys from "../../pages/Surveys";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path = "/" element = {<Surveys/>}/>
        </Routes>
    );

};

export default AppRoutes;
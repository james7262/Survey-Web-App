import { useState, useEffect } from "react";
import { Card, Table, Button } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { Survey } from "../../models";
import { DataStore } from "aws-amplify";
import { useSurveyContext } from "../../context/SurveyContext";

const Surveys = () => {

    const navigate = useNavigate();
    const [survey, setSurvey] = useState([]);
    const { user } = useSurveyContext();
    const sub = user?.attributes?.sub;

    useEffect(() => {
        DataStore.query(Survey, (r) => r.adminSub.eq(sub)).then(
            (surveys) => setSurvey(surveys)
        );
    });

    const tableColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt'
        }
    ];

    const renderNewSurveyButton = () => {
        return (
            <Link to = {'survey/create'}>
                <Button type = "primary" style = {StyleSheet.ButtonText}> New Survey </Button>
            </Link>
        );
    };

    return (
        <Card title = 'Surveys' style = {StyleSheet.Card} extra = {renderNewSurveyButton()}>
            <Table
                columns = {tableColumns}
                rowKey = 'id'
                dataSource = {survey}
                onRow = {(survey) => ({
                   onClick: () => navigate(`survey/${survey.id}`) 
                })}
            />
        </Card>
    )

};

const StyleSheet = {
    Card: {
        margin: 40,
        textAlign: 'left',
        fontSize: 40,
    },
    ButtonText: {
        fontWeight: 'bold'
    }
};

export default Surveys;
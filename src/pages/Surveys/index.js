import { Card, Table, Button } from "antd";
import { DataStore } from "aws-amplify";
import { useNavigate, Link } from "react-router-dom";
import { useSurveyContext } from "../../context/SurveyContext";
import { Survey } from '../../models/';
import { useState, useEffect } from "react";

const Surveys = () => {

    const navigate = useNavigate();

    const [surveys, setSurveys] = useState([]);

    const { survey } = useSurveyContext();

    useEffect(() => {
        if (!survey) {
            return;
        }
        DataStore.query(Survey).then(setSurveys);
    }, [survey]);

    const tableColumns = [
        /*{
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },*/
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

    const renderNewItemButton = () => {
        return (
            <Link to = {'survey/create'}>
                <Button type = "primary" style = {StyleSheet.ButtonText}> New Survey </Button>
            </Link>
        );
    };

    return (
        <Card title = 'Surveys' style = {StyleSheet.Card} extra = {renderNewItemButton()}>
            <Table
                columns = {tableColumns}
                rowKey = 'id'
                dataSource = {surveys}
                onRow = {(order) => ({
                   onClick: () => navigate(`survey/${survey.id}`) 
                })}
            />
        </Card>
    )

};

const StyleSheet = {
    Card: {
        margin: 40,
        textAlign: 'center',
        backgroundColor: 'white',
        fontSize: 20,
    },
    ButtonText: {
        fontWeight: 'bold'
    }
};

export default Surveys;
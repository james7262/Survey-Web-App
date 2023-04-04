import { Card, Table, Button } from "antd";
import { DataStore } from "aws-amplify";
import { useNavigate, Link } from "react-router-dom";
import { useSurveyContext } from "../../context/SurveyContext";
import { Respondent } from '../../models/';
import { useState, useEffect } from "react";

const Respondents = () => {

    const navigate = useNavigate();

    const [respondents, setRespondents] = useState([]);

    const { survey } = useSurveyContext();

    useEffect(() => {
        if (!survey) {
            return;
        }
        DataStore.query(Respondent).then(setRespondents);
    }, [survey]);

    const tableColumns = [
        /*{
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },*/
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName'
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName'
        },
        {
            title: 'Email Address',
            dataIndex: 'emailAddress',
            key: 'emailAddress'
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt'
        },
    ];

    const renderNewRespondentButton = () => {
        return (
            <Link to = {'create'}>
                <Button type = "primary" style = {StyleSheet.ButtonText}> New Respondent </Button>
            </Link>
        );
    };

    return (
        <Card title = 'Respondents' style = {StyleSheet.Card} extra = {renderNewRespondentButton()}>
            <Table 
                columns = {tableColumns}
                rowKey = 'id'
                dataSource = {respondents}
                onRow = {(respondent) => ({
                    onClick: () => navigate(`${respondent.id}`)
                })}
            />
        </Card>
    )

};

const StyleSheet = {
    Card: {
        margin: 40,
        textAlign: 'left',
        backgroundColor: 'white',
        fontSize: 20,
    },
    ButtonText: {
        fontWeight: 'bold',
    },
};

export default Respondents;
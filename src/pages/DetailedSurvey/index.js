// Import statements.
import { useState, useEffect } from "react";
import { Survey } from "../../models";
import { Respondent } from "../../models";
import { Question } from "../../models";
import { DataStore } from "aws-amplify";
import { message, Button, Popconfirm, Card, Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const DetailedSurvey = () => {

    // Page constants.
    const navigate = useNavigate();                         // Navigation constant.
    const { id } = useParams();                             // Survey ID constant.
    const [survey, setSurvey] = useState();                 // Specified survey object constant.
    const [questions, setQuestions] = useState([]);         // Associated questions object constant.
    const [respondents, setRespondents] = useState([]);     // Associated respondents object constant.

    // Queries specific survey via Survey ID.
    useEffect(() => {
        if (!id) {
            return;
        };
        DataStore.query(Survey, s => s.id.eq(id)).then(setSurvey);
    }, [id]);

    // Queries questions assoiciated with specified survey via Survey Name.
    useEffect(() => {
        DataStore.query(Question, q => q.surveyName.eq(survey.name)).then(setQuestions);
    }, [survey]);

    // Queries respondents associated with specified survey via Survey Name.
    useEffect(() => {
        DataStore.query(Respondent, r => r.surveyName.eq(survey.name)).then(setRespondents);
    }, [survey]);

    // Function to delete a Survey item.
    const deleteSurvey = async (item) => {
        await DataStore.delete(Survey, s => s.id.eq(item.id));
        setSurvey(survey.filter((s) => s.id !== item.id));
        message.success('Survey deleted!');
        navigate('/');
    };

    // Table columns for Survey Table.
    const surveyTableColumns = [
        {
            title: 'Survey Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Updated At',
            dataIndex: 'updatedAt',
            key: 'updatedAt'
        },
        {
            title: 'Edit',
            key: 'edit',
            render: () => (
                <Popconfirm
                    placement = "topLeft"
                    title = {'Are you sure you want to edit this survey?'}
                    onConfirm = {() => navigate(`updateSurvey`)}
                    okText = 'Yes'
                    cancelText = 'No'
                >
                    <Button type = "primary" style = {StyleSheet.ButtonText}> Edit </Button>
                </Popconfirm>
            )
        },
        {
            title: 'Delete',
            key: 'delete',
            render: (_, item) => (
                <Popconfirm
                    placement = "topLeft"
                    title = {'Are you sure you want to delete this survey?'}
                    onConfirm = {() => deleteSurvey(item)}
                    okText = 'Yes'
                    cancelText = 'No'
                >
                    <Button danger type = "primary" style = {StyleSheet.ButtonText}> Delete </Button>
                </Popconfirm>
            )
        }
    ];

    // Table columns for Questions table.
    const questionsTableColumns = [
        {
            title: 'Questions',
            dataIndex: 'text',
            key: 'text'
        },
    ];

    // Table columns for Respondents table.
    const respondentsTableColumns = [
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
    ];

    return (
        // Detailed Survey Page format with tables.
        <Card title = {`Survey ID: ${id}`} style = {StyleSheet.Card}>
            <Table 
                dataSource = {survey}
                columns = {surveyTableColumns}
                rowKey = 'id' 
            />
            <Table 
                dataSource = {questions}
                columns = {questionsTableColumns}
                rowKey = 'id'
            />
            <Table 
                dataSource = {respondents}
                columns = {respondentsTableColumns}
                rowKey = 'id'
            />
        </Card>   
    );

};

// Page StyleSheet.
const StyleSheet = {
    Card: {
        margin: 40,
    },
    ButtonText: {
        fontWeight: 'bold',
    },
    TableHeader: {
        fontWeight: 'bold',
        textAlign: 'left',
    }
};

export default DetailedSurvey;
import { useState, useEffect } from "react";
import { Survey } from "../../models";
import { Respondent } from "../../models";
import { Question } from "../../models";
import { DataStore } from "aws-amplify";
import { message, Button, Popconfirm, Card, Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const DetailedSurvey = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [survey, setSurvey] = useState();
    const [questions, setQuestions] = useState([]);
    const [respondents, setRespondents] = useState([]);

    useEffect(() => {
        if (!id) {
            return;
        };
        DataStore.query(Survey, s => s.id.eq(id)).then(setSurvey);
    }, [id]);

    useEffect(() => {
        DataStore.query(Question/*, q => q.surveyName.eq(survey.name)*/).then(setQuestions);
    }, [survey]);

    useEffect(() => {
        DataStore.query(Respondent/*, r => r.surveyName.eq(survey.name)*/).then(setRespondents);
    }, [survey]);

    const deleteSurvey = async (item) => {
        await DataStore.delete(Survey, s => s.id.eq(item.id));
        setSurvey(survey.filter((s) => s.id !== item.id));
        message.success('Survey deleted!');
        navigate('/');
    };

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

    const questionsTableColumns = [
        {
            title: 'Questions',
            dataIndex: 'text',
            key: 'text'
        },
    ];

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
import { useSurveyContext } from "../../context/SurveyContext";
import { useState, useEffect } from "react";
import { Survey } from "../../models";
import { DataStore } from "aws-amplify";
import { message, Button, Popconfirm, Card, Table } from "antd";
import { Link, useParams } from "react-router-dom";

const DetailedSurvey = () => {

    const { id } = useParams();
    
    const [surveys, setSurveys] = useState([]);

    const { survey } = useSurveyContext();

    useEffect(() => {
        if (!survey.id) {
            return
        };
        DataStore.query(Survey, s =>
            s.id.eq(id)).then(setSurveys);
    }, [survey?.id]);

    const deleteSurvey = async (item) => {
        await DataStore.delete(Survey, s => s.id.eq(item.id));
        setSurveys(surveys.filter((s) => s.id !== item.id));
        message.success('Survey deleted!');
    };

    const tableColumns = [
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
                    <Button danger type = "primary"> Remove </Button>
                </Popconfirm>
            )
        }
    ];

    const renderNewQuestionButton = () => {
        return (
            <Link to = "createQuestion">
                <Button  type = "primary" style = {StyleSheet.ButtonText}> New Question </Button>
            </Link>
        );
    };

    return (
     <Card title = {`Survey ID: ${id}`} style = {StyleSheet.Card} extra = {renderNewQuestionButton()}>
        <Table 
            dataSource = {surveys}
            columns = {tableColumns}
            rowKey = 'id'
            
        />
     </Card>   

    );

};

const StyleSheet = {
    ButtonText: {
        fontWeight: 'bold',
    },
    Card: {
        margin: 40,
    },
};

export default DetailedSurvey;
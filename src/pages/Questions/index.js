import { Card, Table, Button } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { useSurveyContext } from "../../context/SurveyContext";

const Questions = () => {

    const navigate = useNavigate();
    const { question } = useSurveyContext([]);

    const tableColumns = [
        {
            title: 'Text',
            dataIndex: 'text',
            key: 'text'
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt'
        }
    ];

    const renderNewQuestionButton = () => {
        return (
            <Link to = {'create'}>
                <Button type = "primary" style = {StyleSheet.ButtonText}> New Question </Button>
            </Link>
        );
    };

    return (
        <Card title = 'Questions' style = {StyleSheet.Card} extra = {renderNewQuestionButton()}>
            <Table
                columns = {tableColumns}
                rowKey = 'id'
                dataSource = {question}
                onRow = {(question) => ({
                   onClick: () => navigate(`${question.id}`) 
                })}
            />
        </Card>
    );

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

export default Questions;
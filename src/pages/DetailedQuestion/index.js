import { useState, useEffect } from "react";
import { Question } from "../../models";
import { DataStore } from "aws-amplify";
import { message, Button, Popconfirm, Card, Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const DetailedQuestion = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [detailedQuestion, setDetailedQuestion] = useState([]);

    useEffect(() => {
        if (!id) {
            return;
        };
        DataStore.query(Question, s =>
            s.id.eq(id)).then(setDetailedQuestion);
    }, [id]);

    const deleteQuestion = async (item) => {
        await DataStore.delete(Question, s => s.id.eq(item.id));
        setDetailedQuestion(detailedQuestion.filter((s) => s.id !== item.id));
        message.success('Question deleted!');
        navigate('../question');
    };

    const tableColumns = [
        {
            title: 'Question Text',
            dataIndex: 'text',
            key: 'text'
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Edit',
            key: 'edit',
            render: (_, item) => (
                <Popconfirm
                    placement = "topLeft"
                    title = {'Are you sure you want to edit this question?'}
                    onConfirm = {() => navigate('../updateQuestion')}
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
                    title = {'Are you sure you want to delete this question?'}
                    onConfirm = {() => deleteQuestion(item)}
                    okText = 'Yes'
                    cancelText = 'No'
                >
                    <Button danger type = "primary" style = {StyleSheet.ButtonText}> Delete </Button>
                </Popconfirm>
            )
        }
    ];

    return (
        <Card title = {`Question ID: ${id}`} style = {StyleSheet.Card}>
        <Table 
            dataSource = {detailedQuestion}
            columns = {tableColumns}
            rowKey = 'id'
            
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

export default DetailedQuestion;
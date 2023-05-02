// Import statements.
import { useState, useEffect } from "react";
import { Question } from "../../models";
import { DataStore } from "aws-amplify";
import { message, Button, Popconfirm, Card, Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const DetailedQuestion = () => {

    // Page constants.
    const navigate = useNavigate();                                     // Navigation constant.
    const { id } = useParams();                                         // Question ID field constant.
    const [detailedQuestion, setDetailedQuestion] = useState([]);       // Specified Question object constant.

    // Queries Question table for specified Question via Question ID.
    useEffect(() => {
        if (!id) {
            return;
        };
        DataStore.query(Question, s =>
            s.id.eq(id)).then(setDetailedQuestion);
    }, [id]);

    // Function to delete a Question object.
    const deleteQuestion = async (item) => {
        await DataStore.delete(Question, s => s.id.eq(item.id));
        setDetailedQuestion(detailedQuestion.filter((s) => s.id !== item.id));
        message.success('Question deleted!');
        navigate('../question');
    };

    // Constant for Question Table.
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
                    onConfirm = {() => navigate('updateQuestion')}
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
        // Detailed Question page formatting with Detailed Question Table.
        <Card title = {`Question ID: ${id}`} style = {StyleSheet.Card}>
        <Table 
            dataSource = {detailedQuestion}
            columns = {tableColumns}
            rowKey = 'id'
            
        />
     </Card>
    );

};

// Page StyleSheet.
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
import { useState, useEffect } from "react";
import { Survey } from "../../models";
import { DataStore } from "aws-amplify";
import { message, Button, Popconfirm, Card, Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const DetailedSurvey = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [detailedSurvey, setDetailedSurvey] = useState([]);

    useEffect(() => {
        if (!id) {
            return;
        };
        DataStore.query(Survey, s =>
            s.id.eq(id)).then(setDetailedSurvey);
    }, [id]);

    const deleteSurvey = async (item) => {
        await DataStore.delete(Survey, s => s.id.eq(item.id));
        setDetailedSurvey(detailedSurvey.filter((s) => s.id !== item.id));
        message.success('Survey deleted!');
        navigate('/');
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
            title: 'Edit',
            key: 'edit',
            render: (_, item) => (
                <Popconfirm
                    placement = "topLeft"
                    title = {'Are you sure you want to edit this survey?'}
                    onConfirm = {(survey) => navigate(`updateSurvey`)}
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

    return (
     <Card title = {`Survey ID: ${id}`} style = {StyleSheet.Card}>
        <Table 
            dataSource = {detailedSurvey}
            columns = {tableColumns}
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
};

export default DetailedSurvey;
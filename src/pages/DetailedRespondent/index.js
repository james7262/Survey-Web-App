import { useState, useEffect } from "react";
import { Respondent } from "../../models";
import { DataStore } from "aws-amplify";
import { message, Button, Popconfirm, Card, Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const DetailedRespondent = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [detailedRespondent, setDetailedRespondent] = useState([]);

    useEffect(() => {
        if (!id) {
            return;
        };
        DataStore.query(Respondent, r =>
            r.id.eq(id)).then(setDetailedRespondent);
    }, [id]);

    const deleteRespondent = async (item) => {
        await DataStore.delete(Respondent, s => s.id.eq(item.id));
        setDetailedRespondent(detailedRespondent.filter((s) => s.id !== item.id));
        message.success('Respondent deleted!');
        navigate('../respondent');
    };

    const tableColumns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName'
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Email Address',
            dataIndex: 'emailAddress',
            key: 'emailAddress',
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'Created At',
        },
        {
            title: 'Edit',
            key: 'edit',
            render: (_, item) => (
                <Popconfirm
                    placement = "topLeft"
                    title = {'Are you sure you want to edit this question?'}
                    onConfirm = {() => navigate('../updateRespondent')}
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
                    title = {'Are you sure you want to delete this respondent?'}
                    onConfirm = {() => deleteRespondent(item)}
                    okText = 'Yes'
                    cancelText = 'No'
                >
                    <Button danger type = "primary" style = {StyleSheet.ButtonText}> Remove </Button>
                </Popconfirm>
            )
        }
    ];

    return (
        
     <Card title = {`Respondent ID: ${id}`} style = {StyleSheet.Card}>
        <Table 
            dataSource = {detailedRespondent}
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

export default DetailedRespondent;
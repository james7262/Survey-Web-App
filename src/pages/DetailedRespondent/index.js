import { useSurveyContext } from "../../context/SurveyContext";
import { useState, useEffect } from "react";
import { Respondent } from "../../models";
import { DataStore } from "aws-amplify";
import { message, Button, Popconfirm, Card, Table } from "antd";
import { useParams } from "react-router-dom";

const DetailedRespondent = () => {

    const { id } = useParams();
    
    const [respondents, setRespondents] = useState([]);

    const { survey } = useSurveyContext();

    useEffect(() => {
        if (!survey.id) {
            return
        };
        DataStore.query(Respondent, r =>
            r.id.eq(id)).then(setRespondents);
    }, [survey?.id]);

    const deleteRespondent = async (item) => {
        await DataStore.delete(Respondent, s => s.id.eq(item.id));
        setRespondents(respondents.filter((s) => s.id !== item.id));
        message.success('Respondent deleted!');
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
            title: 'Delete',
            key: 'delete',
            render: (_, item) => (
                <Popconfirm
                    placement = "topLeft"
                    title = {'Are you sure you want to delete this survey?'}
                    onConfirm = {() => deleteRespondent(item)}
                    okText = 'Yes'
                    cancelText = 'No'
                >
                    <Button danger type = "primary"> Remove </Button>
                </Popconfirm>
            )
        }
    ];

    /*const renderNewQuestionButton = () => {
        return (
            <Link to = {'create'}>
                <Button type = "primary" style = {StyleSheet.ButtonText}> New Question </Button>
            </Link>
        );
    };*/

    return (
        
     <Card title = {`Respondent ID: ${id}`} style = {StyleSheet.Card} /*extra = {renderNewQuestionButton()}*/>
        <Table 
            dataSource = {respondents}
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
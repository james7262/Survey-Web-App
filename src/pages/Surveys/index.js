import { Card, Table } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Survey } from '../../models/';

const Surveys = () => {

    const [surveys, setSurveys] = useState([]);

    const navigate = useNavigate();

    const tableColumns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt'
        }
    ];

    return (
        <Card title = 'Surveys' style = {StyleSheet.Card}>
            <Table>

            </Table>

        </Card>
    )

};

const StyleSheet = {
    Card: {
        margin: 40,
        textAlign: 'center',
        backgroundColor: 'white',
        fontSize: 20,
    },
};

export default Surveys;
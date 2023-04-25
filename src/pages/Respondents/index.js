import { Card, Table, Button } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { useSurveyContext } from "../../context/SurveyContext";

const Respondents = () => {

    const navigate = useNavigate();
    const { respondent } = useSurveyContext([]);

    const tableColumns = [
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
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt'
        },
    ];

    const renderNewRespondentButton = () => {
        return (
            <Link to = {'create'}>
                <Button type = "primary" style = {StyleSheet.ButtonText}> New Respondent </Button>
            </Link>
        );
    };

    return (
        <Card title = 'Respondents' style = {StyleSheet.Card} extra = {renderNewRespondentButton()}>
            <Table 
                columns = {tableColumns}
                rowKey = 'id'
                dataSource = {respondent}
                onRow = {(respondent) => ({
                    onClick: () => navigate(`${respondent.id}`)
                })}
            />
        </Card>
    )

};

const StyleSheet = {
    Card: {
        margin: 40,
        textAlign: 'left',
        backgroundColor: 'white',
        fontSize: 20,
    },
    ButtonText: {
        fontWeight: 'bold',
    },
};

export default Respondents;
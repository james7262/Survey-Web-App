import { useState, useEffect } from "react";
import { Survey } from "../../models";
import { DataStore } from "aws-amplify";
import { message, Button, Card, Form, Input } from "antd";
import { useParams, useNavigate } from "react-router-dom";

const UpdateSurvey = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [survey, setSurvey] = useState({});

    useEffect(() => {
        if (!id) {
            return;
        } 
        DataStore.query(Survey, id).then(setSurvey);
    }, [id]);

    useEffect(() => {
        setName(survey.name);
    }, [survey]);

    const updateSurvey = async () => {
        const updateSurvey = await DataStore.save(
            Survey.copyOf(survey, (updated) => {
                updated.name = name;
            })
        );
        setSurvey(updateSurvey);
        message.success('Survey updated!');
        navigate('/');
    };

    const onFinish = async () => {
        if (!name) {
            message.error('Name Required!');
            return;
        } 
        await updateSurvey(); 
    };

    return (
        <Card title = {`Update Survey ${id}`} style = {StyleSheet.Card}>
            <Form layout = "vertical" onFinish = {onFinish}>
                <Form.Item label = {'Name'} required>
                    <Input 
                    placeholder = "Enter Name" 
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type = "primary" htmlType = "submit" style = {StyleSheet.ButtonText}> Submit </Button>
                </Form.Item>
            </Form>
        </Card>

    );

};

const StyleSheet = {
    Card: {
        margin: 40,
    },
    ButtonText: {
        fontWeight: 'bold',
    }
};

export default UpdateSurvey;
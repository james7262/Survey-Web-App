import { Card, Input, Button, message, Form, } from "antd"; 
import { useState } from "react";
import { DataStore } from "aws-amplify";
import { Survey } from "../../models";
import { useSurveyContext } from "../../context/SurveyContext";
import { useNavigate } from "react-router-dom";

const CreateSurvey = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [survey, setSurvey] = useState([]);
    const { sub } = useSurveyContext();

    const onFinish = async () => {
        if (!name) {
            message.error('Name Required!');
            return;
        } 
        else {
            await createNewSurvey();
        }
    };

    const createNewSurvey = async () => {
        const newSurvey = DataStore.save(new Survey({
            name,
            adminSub: sub
        }));
        setSurvey(newSurvey);
        message.success('Survey created!');
        navigate('/')
    };

    return (
        <Card title = {'Create Survey'} style = {StyleSheet.Card}>
            <Form layout = "vertical" onFinish = {onFinish}>
                <Form.Item label = {'Name'} required name = {'name'}>
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
    ButtonText: {
        fontWeight: 'bold',
    },
    Card: {
        margin: 20,
    }
};

export default CreateSurvey;
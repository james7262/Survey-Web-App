// Import statements.
import { Card, Input, Button, message, Form, } from "antd"; 
import { useState } from "react";
import { DataStore } from "aws-amplify";
import { Survey } from "../../models";
import { useSurveyContext } from "../../context/SurveyContext";
import { useNavigate } from "react-router-dom";

const CreateSurvey = () => {

    // Page constants.
    const navigate = useNavigate();                 // Navigation field constant.
    const [name, setName] = useState('');           // Name field constant.
    const [survey, setSurvey] = useState([]);       // Survey objects constant.
    const { sub } = useSurveyContext();             // User sub field constant.

    // Function to be executed on form submission.
    const onFinish = async () => {
        // Data validation.
        if (!name) {
            message.error('Name Required!');
            return;
        } 
        // Function to be executed to create a new survey.
        else {
            await createNewSurvey();
        }
    };

    // Function to create a new survey.
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
        // CreateSurvey page formatting with form.
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

// Page StyleSheet.
const StyleSheet = {
    ButtonText: {
        fontWeight: 'bold',
    },
    Card: {
        margin: 20,
    }
};

export default CreateSurvey;
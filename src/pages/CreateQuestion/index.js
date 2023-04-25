import { Card, Input, message, Form, Button} from "antd"; 
import { useState } from "react";
import { DataStore } from "aws-amplify";
import { Question } from "../../models";
import { useNavigate } from "react-router-dom";

const CreateQuestion = () => {

    const navigate = useNavigate();
    const [text, setQuestionText] = useState('');
    const [question, setQuestion] = useState([]);

    const onFinish = async () => {
        if (!text) {
            message.error('Question Text Required!');
            return;
        } 
        else {
            await createNewQuestion();
        } 
    };

    const createNewQuestion = async () => {
        const newQuestion = DataStore.save(new Question({
            text,
        }));
        setQuestion(newQuestion);
        message.success('Question created!');
        navigate('../question');
    };

    return (
        <Card title = {'Create Question'} style = {StyleSheet.Card}>
            <Form layout = "vertical" onFinish = {onFinish}>
                <Form.Item label = {'Question Text'} required name = {'text'}>
                    <Input 
                    placeholder = "Enter Question Text"
                    value = {text}
                    onChange = {(e) => setQuestionText(e.target.value)}
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
        margin: 20,
    },
    ButtonText: {
        fontWeight: 'bold',
    }
};

export default CreateQuestion;
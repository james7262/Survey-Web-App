import { useState, useEffect } from "react";
import { Question } from "../../models";
import { DataStore } from "aws-amplify";
import { message, Button, Card, Form, Input } from "antd";
import { useParams, useNavigate } from "react-router-dom";

const UpdateQuestion = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [text, setQuestionText] = useState('');
    const [surveyName, setSurveyName] = useState('');
    const [question, setQuestion] = useState({});

    useEffect(() => {
        if (!id) {
            return;
        } 
        DataStore.query(Question, id).then(setQuestion);
    }, [id]);

    useEffect(() => {
        setQuestionText(question.text);
        setSurveyName(question.surveyName);
    }, [question]);

    const updateQuestion = async () => {
        const updateQuestion = await DataStore.save(
            Question.copyOf(question, (updated) => {
                updated.text = text;
                updated.surveyName = surveyName;
            })
        );
        setQuestion(updateQuestion);
        message.success('Question updated!');
        navigate('../question');
    };

    const onFinish = async () => {
        if (!text) {
            message.error('Question Text Required!');
            return;
        } 
        await updateQuestion(); 
    };

    return (
        <Card title = {`Update Question ${id}`} style = {StyleSheet.Card}>
            <Form layout = "vertical" onFinish = {onFinish}>
                <Form.Item label = {'Question Text'} required>
                    <Input 
                    placeholder = "Enter Question Text" 
                    value = {text}
                    onChange = {(e) => setQuestionText(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label = {'Survey'}>
                    <Input 
                    placeholder = "Enter Survey Name for Question" 
                    value = {surveyName}
                    onChange = {(e) => setSurveyName(e.target.value)}
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

export default UpdateQuestion;
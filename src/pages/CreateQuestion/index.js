// Import statements.
import { Card, Input, message, Form, Button} from "antd"; 
import { useState } from "react";
import { DataStore } from "aws-amplify";
import { Question } from "../../models";
import { useNavigate } from "react-router-dom";

const CreateQuestion = () => {

    // Page constants.
    const navigate = useNavigate();                         // Navigation constant.
    const [text, setQuestionText] = useState('');           // QuestionText field constant.
    const [surveyName, setSurveyName] = useState('');       // SurveyName field constant.
    const [question, setQuestion] = useState([]);           // Question object constant.

    // Function that will be executed on Form Submission.
    const onFinish = async () => {
        // Data validation.
        if (!text) {
            message.error('Question Text Required!');
            return;
        } 
        // Executes function to create new question.
        else {
            await createNewQuestion();
        } 
    };

    // Function to create a new question.
    const createNewQuestion = async () => {
        const newQuestion = DataStore.save(new Question({
            text,
            surveyName,
        }));
        setQuestion(newQuestion);
        message.success('Question created!');
        navigate('../question');
    };

    return (
        // Create Question page formatting with form.
        <Card title = {'Create Question'} style = {StyleSheet.Card}>
            <Form layout = "vertical" onFinish = {onFinish}>
                <Form.Item label = {'Question Text'} required name = {'text'}>
                    <Input 
                    placeholder = "Enter Question Text"
                    value = {text}
                    onChange = {(e) => setQuestionText(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label = {'Survey Name'} name = {'surveyName'}>
                    <Input 
                    placeholder = "Enter Survey Name"
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

// Page StyleSheet.
const StyleSheet = {
    Card: {
        margin: 20,
    },
    ButtonText: {
        fontWeight: 'bold',
    }
};

export default CreateQuestion;
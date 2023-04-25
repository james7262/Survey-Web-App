import { Card, Input, message, Form, Button} from "antd"; 
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Question } from "../../models";
import { useSurveyContext } from "../../context/SurveyContext";

const CreateQuestion = () => {

    const [text, setQuestionText] = useState('');
    const { setQuestion, question } = useSurveyContext();

    useEffect(() => {
        if (!question) {
            return;
        }
        setQuestionText(question.text);
    }, [question]);

    const onFinish = async () => {
        if (!text) {
            message.error('Question Text Required!');
            return;
        } 
        else {
            await createNewQuestion();
        } 
    };

    /*const updateQuestion = async () => {
        const updateQuestion = await DataStore.save(
            Question.copyOf(question, (updated) => {
                updated.text = text;
            })
        );
        setQuestion(updateQuestion);
        message.success('Question updated!');
    };*/

    const createNewQuestion = async () => {
        const newQuestion = DataStore.save(new Question({
            text,
        }));
        setQuestion(newQuestion);
        message.success('Question created!');
    };

    return (
        <Card title = {'Create Question'} style = {StyleSheet.page}>
            <Form layout = "vertical" onFinish = {onFinish}>
                <Form.Item label = {'Question Text'} required name = {'text'}>
                    <Input 
                    placeholder = "Enter Question Text"
                    value = {text}
                    onChange = {(e) => setQuestionText(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type = "primary" htmlType = "submit"> Submit </Button>
                </Form.Item>
            </Form>
        </Card>
    );

};

const StyleSheet = {
    page: {
        margin: 20,
    }
};

export default CreateQuestion;
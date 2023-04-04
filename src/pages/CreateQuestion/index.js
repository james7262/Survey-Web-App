import { Card, Input, message, Form, } from "antd"; 
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Question } from "../../models";
import { useSurveyContext } from "../../context/SurveyContext";

const TextArea = {Input};

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

    const updateQuestion = async () => {
        const updateQuestion = await DataStore.save(
            Question.copyOf(question, (updated) => {
                updated.text = text;
            })
        );
        setQuestion(updateQuestion);
        message.success('Question updated!');
    };

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
                <Form.Item label = {'Text'} required name = {'text'}>
                    <TextArea 
                        rows = {4}
                        placeholder = {'Enter Question Text'}
                    />
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
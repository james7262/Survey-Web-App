import { Card, Input, Button, message, Form, } from "antd"; 
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Survey } from "../../models";
import { useSurveyContext } from "../../context/SurveyContext";

const CreateSurvey = () => {

    const [name, setName] = useState('');

    const { sub, setSurvey, survey } = useSurveyContext();

    useEffect(() => {
        if (!survey) {
            return;
        }
        setName(survey.name);
    }, [survey]);

    const onFinish = async () => {
        if (!name) {
            message.error('Name Required!');
            return;
        } else {
            await createNewSurvey();
        } /*else {
            await updateSurvey();
        }*/
    };

    /*const updateSurvey = async () => {
        const updateSurvey = await DataStore.save(
            Survey.copyOf(survey, (updated) => {
                updated.name = name;
            })
        );
        setSurvey(updateSurvey);
        message.success('Survey updated!');
    };*/

    const createNewSurvey = async () => {
        const newSurvey = DataStore.save(new Survey({
            name,
            adminSub: sub
        }));
        setSurvey(newSurvey);
        message.success('Survey created!');
    };

    return (
        <Card title = {'Create Survey'} style = {StyleSheet.page}>
            <Form layout = "vertical" onFinish = {onFinish}>
                <Form.Item label = {'Name'} required name = {'name'}>
                    <Input 
                    placeholder = "Enter Name"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type = "primary" htmlType = "submit">Submit</Button>
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

export default CreateSurvey;
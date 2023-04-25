import { useState, useEffect } from "react";
import { Survey } from "../../models";
import { DataStore } from "aws-amplify";
import { message, Button, Card, Form, Input } from "antd";
import { useParams } from "react-router-dom";

const UpdateSurvey = () => {

    const { id } = useParams();
    const [name, setName] = useState('');
    const [detailedSurvey, setDetailedSurvey] = useState([]);

    useEffect(() => {
        if (!id) {
            return;
        };
        DataStore.query(Survey, s =>
            s.id.eq(id)).then(setDetailedSurvey);
        setName(detailedSurvey.name)
    }, [id]);

    const updateSurvey = async () => {
        const updateSurvey = await DataStore.save(
            Survey.copyOf(detailedSurvey, (updated) => {
                updated.name = name;
            })
        );
        setDetailedSurvey(updateSurvey);
        message.success('Survey updated!');
    };

    const onFinish = async () => {
        if (!name) {
            message.error('Name Required!');
            return;
        } 
        else {
            await updateSurvey();
        }
    };

    return (
        <Card title = {'Update Survey'} style = {StyleSheet.Card}>
            <Form layout = "vertical" onFinish = {onFinish}>
                <Form.Item label = {'Name'} required>
                    <Input 
                    placeholder = "Enter Name" 
                    value = {detailedSurvey}
                    onChange = {(e) => setName(e.target.value)}
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
    Card: {
        margin: 40,
    },
};

export default UpdateSurvey;
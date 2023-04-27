import { useState, useEffect } from "react";
import { Respondent } from "../../models";
import { DataStore } from "aws-amplify";
import { message, Button, Card, Form, Input } from "antd";
import { useParams, useNavigate } from "react-router-dom";

const UpdateRespondent = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [respondent, setRespondent] = useState({});

    useEffect(() => {
        if (!id) {
            return;
        } 
        DataStore.query(Respondent, id).then(setRespondent);
    }, [id]);

    useEffect(() => {
        setFirstName(respondent.firstName);
        setLastName(respondent.lastName);
        setEmailAddress(respondent.emailAddress);
    }, [respondent]);

    const updateRespondent = async () => {
        const updateRespondent = await DataStore.save(
            Respondent.copyOf(respondent, (updated) => {
                updated.firstName = firstName;
                updated.lastName = lastName;
                updated.emailAddress = emailAddress;
            })
        );
        setRespondent(updateRespondent);
        message.success('Respondent updated!');
        navigate('../respondent');
    };

    const onFinish = async () => {
        if (!firstName) {
            message.error('First Name Required!');
            return;
        } 
        if (!lastName) {
            message.error('Last Name Required!');
            return;
        }
        if (!emailAddress) {
            message.error('Email Address Required!');
            return;
        }
        await updateRespondent(); 
    };

    return (
        <Card title = {`Update Respondent ${id}`} style = {StyleSheet.Card}>
            <Form layout = "vertical" onFinish = {onFinish}>
                <Form.Item label = {'First Name'} required>
                    <Input 
                    placeholder = "Enter First Name" 
                    value = {firstName}
                    onChange = {(e) => setFirstName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label = {'Last Name'} required>
                    <Input 
                    placeholder = "Enter Last Name" 
                    value = {lastName}
                    onChange = {(e) => setLastName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label = {'Email Address'} required>
                    <Input 
                    placeholder = "Enter Email Address" 
                    value = {emailAddress}
                    onChange = {(e) => setEmailAddress(e.target.value)}
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

export default UpdateRespondent;
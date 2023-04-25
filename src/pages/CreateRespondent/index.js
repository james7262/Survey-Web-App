import { Card, Input, Button, message, Form, } from "antd"; 
import { useState } from "react";
import { DataStore } from "aws-amplify";
import { Respondent } from "../../models";
import { useNavigate } from "react-router-dom";

const CreateRespondent = () => {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [respondent, setRespondent] = useState([]);

    const onFinish = async () => {
        if (!firstName) {
            message.error('First Name Required!');
            return;
        } if (!lastName) {
            message.error('Last Name Required!');
            return;
        }
        if (!emailAddress) {
            message.error('Email Address Required!');
            return;
        }
        if (!emailAddress.includes('@')) {
            message.error('Email Address not vaild!')
            return;
        }
        else {
            await createNewRespondent();
        } 
    };

    const createNewRespondent = async () => {
        const newRespondent = DataStore.save(new Respondent({
            firstName,
            lastName,
            emailAddress,
        }));
        setRespondent(newRespondent);
        message.success('Respondent created!');
        navigate('../respondent');
    };

    return (
        <Card title = {'Create Respondent'} style = {StyleSheet.Card}>
            <Form layout = "vertical" onFinish = {onFinish}>
                <Form.Item label = {'First Name'} required name = {'firstName'}>
                    <Input 
                    placeholder = "Enter First Name"
                    value = {firstName}
                    onChange = {(e) => setFirstName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label = {'Last Name'} required name = {'lastName'}>
                    <Input 
                    placeholder = "Enter Last Name"
                    value = {lastName}
                    onChange = {(e) => setLastName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label = {'Email Address'} required name = {'emailAddress'}>
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
    ButtonText: {
        fontWeight: 'bold',
    },
    Card: {
        margin: 20,
    }
};

export default CreateRespondent;
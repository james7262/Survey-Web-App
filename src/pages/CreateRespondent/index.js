import { Card, Input, Button, message, Form, } from "antd"; 
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Respondent } from "../../models";
import { useSurveyContext } from "../../context/SurveyContext";

const CreateRespondent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');

    const { setRespondent, respondent } = useSurveyContext();

    useEffect(() => {
        if (!respondent) {
            return;
        }
        setFirstName(respondent.firstName);
        setLastName(respondent.lastName);
        setEmailAddress(respondent.emailAddress);
    }, [respondent]);

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

    /*const updateRespondent = async () => {
        const updateRespondent = await DataStore.save(
            Respondent.copyOf(respondent, (updated) => {
                updated.firstName = firstName;
                updated.lastName = lastName;
                updated.emailAddress = emailAddress;
            })
        );
        setRespondent(updateRespondent);
        message.success('Respondent updated!');
    };*/

    const createNewRespondent = async () => {
        const newRespondent = DataStore.save(new Respondent({
            firstName,
            lastName,
            emailAddress,
        }));
        setRespondent(newRespondent);
        message.success('Respondent created!');
    };

    return (
        <Card title = {'Create Respondent'} style = {StyleSheet.page}>
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
                    <Button type = "primary" htmlType = "submit"> Submit </Button>
                </Form.Item>
            </Form>
        </Card>
    );

};

const StyleSheet = {
    page: {
        margin: 20,
    },
};

export default CreateRespondent;
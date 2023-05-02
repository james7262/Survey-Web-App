// Import statements.
import { Card, Input, Button, message, Form, } from "antd"; 
import { useState } from "react";
import { DataStore } from "aws-amplify";
import { Respondent } from "../../models";
import { useNavigate } from "react-router-dom";

const CreateRespondent = () => {

    // Page constants.
    const navigate = useNavigate();                             // Navigation constant.
    const [firstName, setFirstName] = useState('');             // FirstName field constant.
    const [lastName, setLastName] = useState('');               // LastName field constant.
    const [emailAddress, setEmailAddress] = useState('');       // EmailAddress field constant. 
    const [surveyName, setSurveyName] = useState('')            // SurveyName field constant.
    const [respondent, setRespondent] = useState([]);           // Respondent object field constant. 

    // Function to be executed on form submission.
    const onFinish = async () => {
        // Data validation.
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
        // Executes function to create a new respondent.
        else {
            await createNewRespondent();
        } 
    };

    // Function to create new respondent.
    const createNewRespondent = async () => {
        const newRespondent = DataStore.save(new Respondent({
            firstName,
            lastName,
            emailAddress,
            surveyName,
        }));
        setRespondent(newRespondent);
        message.success('Respondent created!');
        navigate('../respondent');
    };

    return (
        // Create Respondent page format with form.
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
    ButtonText: {
        fontWeight: 'bold',
    },
    Card: {
        margin: 20,
    }
};

export default CreateRespondent;
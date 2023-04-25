import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

const MenuBar = () => {

    const navigate = useNavigate();

    const menuBarItems = [
        {
            key: '/',
            label: 'Surveys'
        },
        {
            key: 'respondent',
            label: 'Respondents',
        },
        {
            key: 'question',
            label: 'Questions'
        },
        {
            key: 'signout',
            label: 'Sign Out',
        },
    ];

    const onClick = async (menuBarItem) => {
        if (menuBarItem.key === 'signout') {
            await Auth.signOut();
            window.location.reload();
        } else {
            navigate(menuBarItem.key);
        }
    };

    return (
        <>
            
            <Menu items = {menuBarItems} onClick = {onClick} mode = "horizontal" style = {StyleSheet.MenuBar}/>
        </>
    );

};
 const StyleSheet = {
    MenuBar: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
    }
 }

 


export default MenuBar;
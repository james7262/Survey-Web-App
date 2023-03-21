import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const SideBar = () => {

    const navigate = useNavigate();

    const sideBarItems = [
        {
            key: '/',
            label: 'Surveys'
        },
    ];

    const onClick = async (sideBarItem) => {
        navigate(sideBarItem.key);
    };

    return (
        <>
            
            <Menu items = {sideBarItems} onClick = {onClick} style = {StyleSheet.SideMenu}/>
        </>
    );

};

const StyleSheet = {
    SideMenu: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
};

export default SideBar;
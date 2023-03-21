import './App.css';
import AppRoutes from './components/Routes';
import SideBar from './components/SideBar';
import { Layout, Image } from "antd";
import Sider from 'antd/es/layout/Sider';

const { Content, Footer } = Layout;

function App() {

  return (
    <Layout>
      <Sider style = {{backgroundColor: 'white'}}>
          <Image
            src = "https://images-platform.99static.com//FZl7mxT3QfUyDLbpk_I4OfGuQfs=/240x289:1750x1799/fit-in/500x500/99designs-contests-attachments/97/97093/attachment_97093827"
            preview = {false}
            alt = "Survey Plus Logo"
            style = {{display: 'block', left: 'auto', right: 'auto'}}
          />
        <SideBar />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style = {{
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          Survey Plus Dashboard @2023
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;

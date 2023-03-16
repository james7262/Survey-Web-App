import './App.css';
import AppRoutes from './components/Routes';
import { Layout } from "antd";

const { Content, Footer } = Layout;

function App() {

  return (
    <Layout>
      <Content>
        <AppRoutes />
      </Content>
      <Footer style = {{
        textAlign: 'center',
        fontWeight: 'bold'
        }}>
            Surveyer Dashboard @2023
          </Footer>
    </Layout>
  );

};

export default App;

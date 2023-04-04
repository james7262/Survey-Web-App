import AppRoutes from './components/Routes';
import MenuBar from './components/MenuBar';
import { Layout } from "antd";
import { Header } from 'antd/es/layout/layout';
import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports';
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import SurveyContextProvider from './context/SurveyContext';

Amplify.configure(awsconfig);

const { Content, Footer } = Layout;

function App() {

  return (
    <SurveyContextProvider>
      <Layout>
      <Header style = {StyleSheet.Header}>
        <MenuBar />
      </Header>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style = {StyleSheet.Footer}>
          Survey Plus Dashboard @2023
        </Footer>
      </Layout>
    </Layout>
    </SurveyContextProvider>
  );
};

const StyleSheet = {
  Header: {
    backgroundColor: 'white',
  },
  Footer : {
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

export default withAuthenticator(App);

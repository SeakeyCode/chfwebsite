import 'antd/dist/antd.css'
import './App.scss'
import * as React from 'react';
import { Layout } from 'antd'
import Headers from './components/header/headers'
import Contents from './components/content/contents'

const { Header, Footer, Content } = Layout;

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <Headers />
          </Header>
          <Content>
            <Contents />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    )
  }
}

export default App;

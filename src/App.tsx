import 'antd/dist/antd.css'
import './App.scss'
import * as React from 'react';
import { Layout } from 'antd'
import {HashRouter, Route, Switch} from 'react-router-dom';
import Headers from './components/header/headers'
import Home from './components/home/home'
import Article from './components/article/article'
import About from './components/about/about'

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
            <HashRouter>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/article" component={Article}/>
                  <Route exact path="/about" component={About}/>
              </Switch>
            </HashRouter>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    )
  }
}

export default App;

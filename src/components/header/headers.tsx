import * as React from 'react';
import './headers.scss'
import logoImg from '../../images/logo.f012ce39.jpg'
import { Menu, Button } from 'antd'

class Headers extends React.Component<{}, {}> {
  render() {
    return (
      <div className="nav">
        <div className="nav-left">
          <div className="logo">
            <img src={logoImg} alt="" />
          </div>
            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">文章</Menu.Item>
              <Menu.Item key="3">归档</Menu.Item>
            </Menu>
          </div>
          <div className="nav-right">
            <Button className="login" type="primary">登录</Button>
            <Button type="primary">注册</Button>
          </div>
      </div>
    )
  }
}

export default Headers;

import * as React from 'react';
import './headers.scss'
import logoImg from '../../images/logo.f012ce39.jpg'
import { Menu, Button } from 'antd'
import { useHistory } from "react-router-dom";

function Headers () {
  const history = useHistory();
  function handleClick() {
    console.log(history)
  }
  return (
    <div className="nav">
      <div className="nav-left">
        <div className="logo">
          <img src={logoImg} alt="" />
        </div>
          <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <a href='#/'>首页</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href='#/article'>文章</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href='#/about'>关于</a>
            </Menu.Item>
          </Menu>
        </div>
        <div className="nav-right">
          <Button className="login" type="primary">登录</Button>
          <Button type="primary">注册</Button>
        </div>
    </div>
  )
}

export default Headers;

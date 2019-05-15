import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import Home from './Home';
import './App.css';

const { Header, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu mode="horizontal" theme="dark"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">主页</Menu.Item>
            <Menu.Item key="2">关于</Menu.Item>
            <Menu.Item key="3">联系我们</Menu.Item>
          </Menu>
        </Header>
        <Home />
        <Footer style={{ textAlign: 'center' }}>浪民 ©2019 </Footer>
      </Layout>
    );
  }
}
export default App;

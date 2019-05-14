import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';

const { Header, Footer, Content } = Layout;

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
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>主页</Breadcrumb.Item>
            {/* <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>内容</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>浪民 ©2019 </Footer>
      </Layout>
    );
  }
}
export default App;

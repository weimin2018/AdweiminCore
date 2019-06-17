import React, { Component } from 'react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider,Layout, Menu,Icon } from 'antd';
import Home from './Home';
import './App.css';

const { Header, Footer } = Layout;

class App extends Component {  
  render() {
    let currentDate = new Date();
    const themeAndBgColor =currentDate.getHours()>17?['dark','#001529']:['light','#fff'];
    return (
      <LocaleProvider locale={zhCN}>
        <Layout className="layout">
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%',height:'52px',background:themeAndBgColor[1] }}>
            <div className="logo" />
              <Menu mode="horizontal" theme={themeAndBgColor[0]} defaultSelectedKeys={['1']} style={{ lineHeight: '52px' }} >
                <Menu.Item key="1"><Icon type="home" theme="filled" />首页</Menu.Item>
                <Menu.Item key="2"><Icon type="eye" theme="filled" />发现</Menu.Item>
              </Menu>
          </Header>
          <Home />
          <Footer style={{ textAlign: 'center' }}>浪民 ©2019 </Footer>
        </Layout>
      </LocaleProvider>
    );
  }
}
export default App;

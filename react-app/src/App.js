import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider,Layout, Menu,Icon,Switch } from 'antd';
import Home from './Home';
import './App.css';

const { Header, Footer } = Layout;

class App extends Component {
  state = {
    theme: 'dark',
    current: '1',
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };


  render() {
    const bgColor=this.state.theme ==='dark'?'#001529':'#fff';
    return (
      <LocaleProvider locale={zhCN}>
        <Layout className="layout">
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%',height:'52px',backgroundColor:bgColor}} theme={this.state.theme}>
              <Menu mode="horizontal" theme={this.state.theme} defaultSelectedKeys={['1']} style={{ lineHeight: '52px' }} >
                <Menu.Item key="1"><Icon type="home" theme="filled" />首页</Menu.Item>
                <Menu.Item key="2"><Icon type="eye" theme="filled" />发现</Menu.Item>
                <Menu.Item key="9" disabled>
                  <Switch checked={this.state.theme === 'dark'} onChange={this.changeTheme} checkedChildren="暗" unCheckedChildren="明" />
                </Menu.Item>
              </Menu>
            </Header>
            <Home  />
            <Footer style={{ textAlign: 'center' }}>浪民 ©2019 </Footer>
        </Layout>
      </LocaleProvider>
    );
  }
}
export default App;

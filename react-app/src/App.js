import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider,LocaleProvider,Layout, Menu,Icon,Switch,Avatar,Breadcrumb  } from 'antd';
import Home from './Home';
import Explore from './Explore';
// import Chart from './Chart';
import './App.css';

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
    const { Header, Footer } = Layout;
    const bgColor=this.state.theme ==='dark'?'#001529':'#fff';


    // const breadcrumbNameMap = {
    //   '/apps': 'Application List',
    //   '/apps/1': 'Application1',
    //   '/apps/2': 'Application2',
    //   '/apps/1/detail': 'Detail',
    //   '/apps/2/detail': 'Detail',
    // };



    return (
      <ConfigProvider>
        <LocaleProvider locale={zhCN}>
            <Router>
              <Layout className="layout">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%',height:'52px',backgroundColor:bgColor}} theme={this.state.theme}>
                  <Menu mode="horizontal" theme={this.state.theme} defaultSelectedKeys={['1']} style={{ lineHeight: '52px' }} >
                    <Menu.Item key="0"><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Menu.Item>
                    <Menu.Item key="1">
                      <Icon type="home" theme="filled" />
                      <Link to='/' className="link-inline">首页</Link >
                    </Menu.Item>
                    <Menu.Item key="2"><Icon type="eye" theme="filled" />
                      <Link to='/explore' className="link-inline">发现</Link >
                    </Menu.Item>
                    <Menu.Item key="9" disabled>
                      <Switch checked={this.state.theme === 'dark'} onChange={this.changeTheme} checkedChildren="暗" unCheckedChildren="明" />
                    </Menu.Item>
                  </Menu>
                </Header>
                

                <Route exact path="/" component={Home} />
                <Route path="/explore" component={Explore} />
                <Footer style={{ textAlign: 'center' }}>浪民 ©2019 </Footer>
            </Layout>
          </Router>
        </LocaleProvider>
      </ConfigProvider>
    );
  }
}
export default App;
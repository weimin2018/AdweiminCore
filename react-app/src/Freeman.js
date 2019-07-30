import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider, LocaleProvider, Layout, Menu, Icon, Switch, Avatar, Typography, Divider, Button } from 'antd';
import Read from './Read';
import LogoSvg from './img/logo.svg';
import './App.css';


class FreeMan extends Component {
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
        const { Text } = Typography;
        const bgColor = this.state.theme === 'dark' ? '#001529' : '#fff';
        const githubPage = "https://github.com/weimin2018";
        // const iconColor=this.state.theme ==='dark'?'#1DA57A':'#fff';
        return (
            <ConfigProvider>
                <LocaleProvider locale={zhCN}>
                    <Router>
                        <Layout className="layout">
                            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: '52px', backgroundColor: bgColor }} theme={this.state.theme}>
                                <div className="logo">
                                    <Avatar size={40} src={LogoSvg} shape="circle" alt="浪民的博客"></Avatar>
                                    <Text strong={true} className="logo-text">浪民的博客</Text>
                                </div>
                                <Menu mode="horizontal" theme={this.state.theme} defaultSelectedKeys={['1']} style={{ lineHeight: '52px' }} >
                                    <Menu.Item key="1">
                                        {/* <Icon type="home" theme="filled" /> */}
                                        <Icon type="read" theme="filled" />
                                        <Link to='/Read' className="link-inline">Read</Link >
                                    </Menu.Item>
                                    <div className="theme-switch" >
                                        <Switch checked={this.state.theme === 'dark'} onChange={this.changeTheme} checkedChildren="暗" unCheckedChildren="明" />
                                    </div>
                                </Menu>
                            </Header>
                            <Route exact path="/" component={Read} />
                            <Route exact path="/read" component={Read} />
                            <Footer className="footer" style={{ backgroundColor: bgColor }}>
                                <Divider>
                                    <Button type="link" block href={githubPage} target="_blank">
                                        <Text ><Icon type="github" theme="outlined" /> 浪民</Text>
                                    </Button>
                                </Divider>
                            </Footer>
                        </Layout>
                    </Router>
                </LocaleProvider>
            </ConfigProvider>
        );
    }
}
export default FreeMan;
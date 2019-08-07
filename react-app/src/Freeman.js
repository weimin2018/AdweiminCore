import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider, Layout, Menu, Icon, Avatar, Typography, Divider, Button } from 'antd';
import Read from './Read';
import LogoSvg from './img/logo.svg';
import './App.css';

function FreeMan() {
    const { Header, Footer } = Layout;
    const { Text } = Typography;
    const bgColor = '#001529';
    const githubPage = "https://github.com/weimin2018";
    return (
        <ConfigProvider locale={zhCN}>
            <Router>
                <Layout className="layout">
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: '52px', backgroundColor: bgColor }} theme={"dark"}>
                        <div className="logo">
                            <Avatar size={40} src={LogoSvg} shape="circle" alt="浪民的博客"></Avatar>
                            <Text strong={true} className="logo-text">浪民的博客</Text>
                        </div>
                        <Menu mode="horizontal" theme={"dark"} defaultSelectedKeys={['1']} style={{ lineHeight: '52px' }} >
                            <Menu.Item key="1">
                                <Icon type="read" theme="filled" />
                                <Link to='/Read' className="link-inline">Read</Link >
                            </Menu.Item>
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
        </ConfigProvider>
    );
}
export default FreeMan;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout,Menu, Icon, Avatar,Typography } from 'antd';
import LogoSvg from '../img/logo.svg';


const Navigation = () => {
    const { Header } = Layout;
    const { Text } = Typography;
    const bgColor = '#001529';

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: '52px', backgroundColor: bgColor }} theme={"dark"}>
            <div className="logo">
                <Avatar size={40} src={LogoSvg} shape="circle" alt="浪民的博客"></Avatar>
                <Text strong={true} className="logo-text">浪民的博客</Text>
            </div>
            <Menu mode="horizontal" theme={"dark"} defaultSelectedKeys={['1']} style={{ lineHeight: '52px' }} >
                <Menu.Item key="1">
                    <Icon type="read" theme="filled" />
                    <NavLink to='/' className="link-inline">博客</NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="appstore" theme="filled" />
                    <NavLink to='/explore' className="link-inline">探索</NavLink>
                </Menu.Item>
            </Menu>
        </Header>
    )
}
export default Navigation;
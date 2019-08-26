import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider, Layout, Menu, Icon, Avatar, Typography, Divider, Button } from 'antd';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Explore from './components/Explore';
import SportsLottery from './components/SportsLottery';
import Winningrules from './components/Winningrules';
import Error from './components/Error';
// import SportsLottery from './components/SportsLottery';
import './Freeman.css';


function FreeMan() {
    const { Content, Footer } = Layout;
    const { Text } = Typography;
    const bgColor = '#001529';
    const githubPage = "https://github.com/weimin2018";
    return (
        <ConfigProvider locale={zhCN}>
            <BrowserRouter>
                <Layout className="layout">
                    <Navigation />
                    <Content className="container">
                    {/* 路由定义 */}
                        <Switch >
                            <Route path='/' component={Home} exact />
                            <Route path='/explore' exact component={Explore} />
                            <Route path='/explore/sportsLottery' exact component={SportsLottery} />
                            <Route path='/explore/winningrules' exact component={Winningrules} />
                            
                            <Route component={Error} />
                        </Switch>
                    </Content>
                    <Footer className="footer" style={{ backgroundColor: bgColor }}>
                        <Divider>
                            <Button type="link" block href={githubPage} target="_blank">
                                <Text ><Icon type="github" theme="outlined" /> 浪民</Text>
                            </Button>
                        </Divider>
                    </Footer>
                </Layout>
            </BrowserRouter>
        </ConfigProvider>
    );
}
export default FreeMan;
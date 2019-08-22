import React, { Component } from 'react';
import { Layout, Icon, Result } from 'antd';

class Home extends Component {
    render() {
        const { Content } = Layout;
        return (
            <Content className="container" >
                <Result
                    icon={<Icon type="smile" theme="twoTone" />}
                    title="浪民的博客正在构思开发中,请敬请期待..."
                />,
            </Content>
        );
    }
}
export default Home;
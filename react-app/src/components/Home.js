import React, { Component } from 'react';
import { Layout, Icon, Result } from 'antd';

class Home extends Component {
    render() {
        return (
            <Result
                icon={<Icon type="smile" theme="twoTone" />}
                title="浪民的博客正在构思开发中,请敬请期待..."
            />
        );
    }
}
export default Home;
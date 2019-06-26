import React, { Component } from 'react';
import { Layout,Card } from 'antd';
import './index.css';
const { Content } = Layout;
const { Meta } = Card;
class Home extends Component {
    render() {
        return (
            <Content style={{ padding: '0 50px',minHeight: 280 }}>
                <Card hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Content>
        );
    }
}
export default Home;
import React, { Component } from 'react';
import { Layout,Card ,Icon} from 'antd';
import './index.css';
const { Content } = Layout;
const { Meta } = Card;
class Home extends Component {
    render() {
        return (
            <Content style={{ padding: '0 50px',minHeight: 280,marginTop:180 }}>
                <Card hoverable  style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} 
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                </Card>
            </Content>
        );
    }
}
export default Home;
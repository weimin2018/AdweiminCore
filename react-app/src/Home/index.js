import React, { Component } from 'react';
import { Layout,Card ,Icon} from 'antd';
import './index.css';
import Chart from '../img/chart.svg';

class Home extends Component {
    render() {
        const { Content } = Layout;
        const { Meta } = Card;
        return (
            <Content style={{ padding: '0 50px',minHeight: 280,marginTop:80 }}>
                <Card hoverable  style={{ width: 240 }}
                    cover={<img alt="example" src={Chart} />} 
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta title="Chart" description="图表示例" />
                </Card>
            </Content>
        );
    }
}
export default Home;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout,Card,Icon,Row,Col} from 'antd';
import './index.css';
import ChartSvg from '../img/area chart.svg';
import MapSvg from '../img/wan_map.svg';
import TableSvg from '../img/table.svg';

class Explore extends Component {
    handleApi(type){
        console.log('type:',type);
    }
    render() {
        const { Content } = Layout;
        const { Meta } = Card;
        return (
            <Content className="container">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card hoverable  style={{ width: 240 }}
                            cover={<img alt="example" src={ChartSvg} />} 
                            actions={[<Link to="/Chart/"><Icon type="link" /></Link>,<Icon type="api" onClick={this.handleApi.bind(this,'chart')} />,  <Icon type="ellipsis" />]}>
                            <Meta title="Chart" description="图表示例" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable  style={{ width: 240 }}
                            cover={<img alt="example" src={MapSvg} />} 
                            actions={[<Icon type="api" onClick={this.handleApi.bind(this,'map')} />, <Icon type="link" />,<Icon type="ellipsis" />]}>
                            <Meta title="Map" description="地图示例" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable  style={{ width: 240 }}
                            cover={<img alt="example" src={TableSvg} />} 
                            actions={[<Icon type="api" onClick={this.handleApi.bind(this,'table')} />, <Icon type="link" />,<Icon type="ellipsis" />]}>
                            <Meta title="Table" description="表格示例" />
                        </Card>
                    </Col>
                </Row>
            </Content>
        );
    }
}
export default Explore;
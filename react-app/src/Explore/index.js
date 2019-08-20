import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Card, Icon, Row, Col } from 'antd';
import './index.css';

function Explore() {
    const { Content } = Layout;
    const { Meta } = Card;
    return (
        <Content className="container">
            <Row gutter={16}>
                <Col span={8}>
                    <Card hoverable style={{ width: 240 }}
                        // onClick={this.handleApi.bind(this, 'chart')}
                        actions={[<Link to="/explore/sportsLottery"><Icon type="link" /></Link>, <Icon type="api" />, <Icon type="ellipsis" />]}>
                        <Meta title="幸运体彩" description="体育彩票中奖数字生成器" />
                    </Card>
                </Col>
            </Row>
        </Content>
    );
}
export default Explore;
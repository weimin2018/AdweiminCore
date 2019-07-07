import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout,Statistic, Card, Row, Col, Icon} from 'antd';

class Home extends Component {

    onFinish() {
        console.log('finished!');
      }
    render() {
        const { Content } = Layout;
        const { Countdown } = Statistic;
        const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
        
        return (
            <Content style={{ padding: '0 50px',minHeight: 280,marginTop:80 }}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card>
                            <Countdown title="最近一次放假倒计时" value={deadline} onFinish={this.onFinish} />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                        <Statistic
                            title="Idle"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<Icon type="arrow-down" />}
                            suffix="%"
                        />
                        </Card>
                    </Col>
                </Row>
            </Content>
        );
    }
}
export default Home;
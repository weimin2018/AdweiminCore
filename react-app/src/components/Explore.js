import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {  Card, Icon, Row, Col } from 'antd';
import './Explore.css';

function Explore() {
    const { Meta } = Card;
    return (
            <Row gutter={16}>
                <Col span={8}>
                    <Card hoverable style={{ width: 240 }}
                        // onClick={this.handleApi.bind(this, 'chart')}
                        actions={[
                            <Link to="/explore/winningrules"><Icon type="trademark" />中奖规则</Link>,
                            <Link to="/explore/winningrules"><Icon type="search" />往期查询</Link>, 
                            <Link to="/explore/winningrules"><Icon type="smile" />幸运随机数</Link>, 
                             ]}>
                        <Meta title="幸运体彩" description="体育彩票中奖数字生成器" />
                    </Card>
                </Col>
            </Row>
    );
}
export default Explore;
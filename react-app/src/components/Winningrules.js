// 中奖规则
import React from 'react';
import { Table, Row, Col,Divider } from 'antd';
import './Winningrules.css';

const RuleCircle = (props) => {
    const { circleArray, isText } = props;
    if (isText) {
        return (
            <Row>
                {
                    circleArray.map(item => (
                        <div>
                            <Col span={2}><div className={"circle " + item.color}></div></Col>
                            <Col span={4}>{item.title}</Col>
                        </div>
                    )
                    )
                }
            </Row>
        )
    } else {
        return (
            <Row>
                {
                    circleArray.map(item => (
                        item=="|"?
                        <Col span={1}><Divider type="vertical" /></Col>:
                        <Col span={2}><div className={"circle " + item}></div></Col>
                    )
                    )
                }
            </Row>
        )
    }

}


const columns = [
    {
        title: '等级',
        dataIndex: 'level',
        key: 'level',
        width: '20%',
        render: text => <a>{text}</a>,
    },
    {
        title: '奖金',
        dataIndex: 'bonus',
        width: '20%',
        key: 'bonus',
    },
    {
        title: '中奖条件',
        dataIndex: 'conditions',
        width: '30%',
        key: 'conditions',
    }, {
        title: '中奖描述',
        dataIndex: 'remark',
        width: '30%',
        rowSpan: 6,
        key: 'remark',
        render: (value, row, index) => {
            const obj = {
                children: value,
                props: {},
            };
            if (index === 0) {
                obj.props.rowSpan = 6;
            }
            return obj;
        },
    }
];

const data = [
    {
        key: '1',
        level: '一等奖',
        bonus: '浮动',
        conditions: <RuleCircle circleArray={["red", "red", "red", "red", "red", "red","|","blue"]} />,
        remark: <div><RuleCircle isText={true} circleArray={[{color:"red",title:"前区中奖"},{color:"blue",title:"后区中奖"},{color:"grey",title:"未中"}]} /></div>
    },
{
    key: '2',
        level: '二等奖',
            bonus: '浮动',
                conditions: <RuleCircle circleArray={["red", "red", "red", "red", "red", "red", "|","grey"]} /> ,
    },
{
    key: '3',
        level: '三等奖',
            bonus: '3,000元',
                conditions: <RuleCircle circleArray={["red", "red", "red", "red", "red", "grey", "|","blue"]} />
},
{
    key: '4',
        level: '四等奖',
            bonus: '200元',
                conditions: <div><RuleCircle circleArray={["red", "red", "red", "red", "red", "grey", "|","grey"]} /><br /><RuleCircle circleArray={["red", "red", "red", "red", "grey", "grey", "|","blue"]} /></div>
},
{
    key: '5',
        level: '五等奖',
            bonus: '10元',
                conditions: <div><RuleCircle circleArray={["red", "red", "red", "red", "grey", "grey", "|","grey"]} /><br /><RuleCircle circleArray={["red", "red", "red", "grey", "grey", "grey","|","blue"]} /></div>
},
{
    key: '6',
        level: '六等奖',
            bonus: '5元',
                conditions:
    <div>
        <RuleCircle circleArray={["red", "red", "grey", "grey", "grey", "grey", "|","blue"]} /><br />
        <RuleCircle circleArray={["red", "grey", "grey", "grey", "grey", "grey", "|","blue"]} /><br />
        <RuleCircle circleArray={["grey", "grey", "grey", "grey", "grey", "grey", "|","blue"]} />
    </div>
},
];
const WinningRules = () => {

    return (
        <Table columns={columns} dataSource={data} pagination={false}
            title={() => '双色球中奖规则'} size={"middle"} bordered={true} style={{ backgroundColor: "white" }} />
    );
}
export default WinningRules;

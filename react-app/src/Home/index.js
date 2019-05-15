import React, { Component } from 'react';
import { Layout, Breadcrumb, Carousel, Typography } from 'antd';
import './index.css'

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

class Home extends Component {
    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Carousel autoplay>
                        <Typography>
                            <Title type="warning">create-react-app</Title>
                            <Paragraph type="warning">
                                In the process of internal desktop applications development, many different design specs and
                                implementations would be involved, which might cause designers and developers difficulties and
                                duplication and reduce the efficiency of development.
                            </Paragraph>
                            <Paragraph type="warning">
                                After massive project practice and summaries, Ant Design, a design language for background
      applications, is refined by Ant UED Team, which aims to{' '}
                                <Text type="warning" strong>
                                    uniform the user interface specs for internal background projects, lower the unnecessary
                                    cost of design differences and implementation and liberate the resources of design and
                                    front-end development.
                                </Text>
                            </Paragraph>
                        </Typography>
                        <Typography>
                            <Title>Ant Design</Title>
                            <Paragraph>
                                蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
                            </Paragraph>
                            <Paragraph>
                                随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
                                Ant Design。基于<Text mark>『确定』和『自然』</Text>
                                的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
                                <Text strong>更好的用户体验</Text>。
                            </Paragraph>
                            <Paragraph>
                                我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和{' '}
                                <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
                            </Paragraph>
                        </Typography>
                        <Typography>
                            <Title>ASP.NET Core</Title>
                            <Paragraph>
                                蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
                            </Paragraph>
                            <Paragraph>
                                随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
                                Ant Design。基于<Text mark>『确定』和『自然』</Text>
                                的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
                                <Text strong>更好的用户体验</Text>。
                            </Paragraph>
                            <Paragraph>
                                我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和{' '}
                                <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
                            </Paragraph>
                        </Typography>


                        {/* <div>
                            <h3>Hello</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div> */}
                    </Carousel>
                </div>
            </Content>
        );
    }
}
export default Home;
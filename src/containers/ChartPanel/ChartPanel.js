import React, { Component } from 'react'
import Chart from '../../components/Chart'
import Toolbar from '../../components/Toolbar'
import { Layout } from 'antd';

const { Header, Content } = Layout;

export default class ChartPanel extends Component {

    render() {
        return (
            <Layout>
                <Header style={{ height: '60px', background: '#fff' } }>
                    <Toolbar {...this.props} />
                </Header>
                <Content style={{ background: '#fff' } }>
                    <Chart data={this.props.currentData} spec={this.props.currentSpec}/>
                </Content>
                {/* <Footer style={{ height: '60px', background: '#fff' } }></Footer> */}
            </Layout>
        )
    }
}

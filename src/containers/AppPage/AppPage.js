import React, { Component } from 'react'
import { Layout } from 'antd';
import ChartPanel from '../ChartPanel';
import SequencePanel from '../SequencePanel';
import WizardPanel from '../WizardPanel';
import BookmarkPanel from '../BookmarkPanel';
import AppHeader from '../../components/AppHeader';
import "./apppage.css";

const { Header, Sider, Content } = Layout;

class AppPage extends Component {

    render() {
        return (
        <div className="App">
            <Layout>
                <Header>
                    <AppHeader />
                </Header>
                <Layout>
                    <Layout>
                        <Layout style={{ height: '480px' }}>
                            <Sider width={420} className="pane">
                                <WizardPanel/>
                            </Sider>
                            <Layout>
                            <Content className="pane">
                                <ChartPanel/>
                            </Content>
                            </Layout>
                        </Layout>
                        <div className="pane" style={{ height: '100px' }}>
                            <SequencePanel/>
                        </div>
                    </Layout>
                    <Sider className="pane" width={300} style={{ background: '#fff', height: '740px' }} trigger={null} collapsible collapsedWidth={0} collapsed={this.props.isSidebarDisplayed}>
                        <BookmarkPanel/>
                    </Sider>
                </Layout>
            </Layout>
        </div>
        );
    }
}

export default AppPage;

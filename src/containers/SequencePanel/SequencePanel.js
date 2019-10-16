import React, { Component } from 'react'
// import SequenceView from '../../components/SequenceView';
import ActionSequenceView from '../../components/SequenceView/ActionSequenceView';
import { Row } from 'antd';

export default class SequencePanel extends Component {

    render() {
        return (
            <div>
                <Row>
                    <div style = { {float:'left',padding: '5px'} }>Action History</div>
                </Row>
                <ActionSequenceView { ...this.props }/>
                
                {/* <SequenceView  { ...this.props }/> */}
            </div>
        );
    }
}

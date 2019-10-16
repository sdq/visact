import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend';
import { Row, Col } from 'antd';
import FieldList from '../../components/FieldList';
import Encoding from '../../components/Encoding';
import './wizardpanel.css'

class WizardPanel extends Component {
    
    render() {
        return (
            <DndProvider backend={HTMLBackend}>
                <Row>
                    <Col span={11} className="dataPanel">
                        <h3 style={{color:"#000000"}}>Data Fields</h3>
                        <FieldList  { ...this.props }/>
                    </Col>
                    <Col span={13} className="encodingPanel">
                        <Encoding { ...this.props }/>
                    </Col>
                </Row>
            </DndProvider>
        )
    }
}

export default WizardPanel;

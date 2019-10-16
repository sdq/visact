import React, { Component } from 'react';
import { List } from 'antd';
import './fieldlist.css';
import DragBox from '../DragBox';

export default class FieldList extends Component {
    render() {
        return (
            <div className="column-list-container">
                <List
                    size="small"
                    split = {false}
                    dataSource={this.props.currentFields}
                    renderItem={item => <List.Item>
                        <DragBox field={item} { ...this.props }/>
                    </List.Item>}
                />
            </div>
        )
    }
}

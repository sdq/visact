import React, { Component } from 'react'
import { Icon } from 'antd';
import './toolbar.css'

export default class Toolbar extends Component {

    toggle = () => {
        this.props.toggle(!this.props.isSidebarDisplayed)
    };

    render() {
        return (
            <div className="toolbar">
                {/* <Button size="small">Undo</Button>
                <Button size="small">Redo</Button>
                <Button size="small">Swap</Button>
                <Button size="small" float = "right">Bookmark</Button> */}
                <Icon type="left-circle" onClick={this.props.undo} style = { {padding: '10px'} }/>
                <Icon type="right-circle" onClick={this.props.redo} style = { {padding: '10px'} }/>
                <Icon
                    className="trigger"
                    type={this.props.isSidebarDisplayed ? 'menu-fold' : 'menu-unfold'}
                    onClick={this.toggle} 
                    float = "right"
                    style = { {padding: '10px'} }
                />
            </div>
        )
    }
}

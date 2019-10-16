import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';
import DragDropType from '../../constants/DragDropType';
import { Row, Col, Button } from 'antd';
import './shelf.css'

const boxTarget = {
	// 当有对应的 drag source 放在当前组件区域时，会返回一个对象，可以在 monitor.getDropResult() 中获取到
	drop: (props) => ({ 
        name: props.channel,
        isEncoded: props.slot.isEncoded,
    })
}

class DropBox extends Component {
    
    constructor(props) {
        super(props);
        this.removeEncoding = this.removeEncoding.bind(this);
    }
    
    removeEncoding() {
        this.props.removeEncoding(this.props.channel, this.props.slot.name)
    }

    render() {
        const { canDrop, isOver, connectDropTarget } = this.props;
        const isActive = canDrop && isOver;
        const isAvailable = this.props.dropAvailable;
        let backgroundColor = this.props.slot.isEncoded ? '#FE9900' : '#fff';
        if (!isAvailable) {
            backgroundColor = 'darkgrey';
        }
		else if (isActive) {
			backgroundColor = 'darkgreen';
		} 
		else if (canDrop) {
			backgroundColor = '#c8e6c9';
		}
        return connectDropTarget(
            <div>
                <Row className="dropbox">
                    <Col span={4} className="channelName">{this.props.channel}</Col>
                    <Col span={ this.props.slot.isEncoded ? 14 : 18} className="channelSlot" style={{ backgroundColor: backgroundColor, color: this.props.slot.isEncoded ? "#ffffff" : "#37415C" }}>{this.props.slot.isEncoded ? this.props.slot.name : 'drop field here'}</Col>
                    <Col span={ this.props.slot.isEncoded ? 4 : 0} className="channelSlot" style={{ backgroundColor }}>
                        <Button shape="circle" type="link" size="small" icon="close" onClick={this.removeEncoding}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DropTarget(
	// type 标识，这里是字符串 'box'
	DragDropType.DATA_FIELD,
	// 接收拖拽的事件对象
	boxTarget,
	// 收集功能函数，包含 connect 和 monitor 参数
	// connect 里面的函数用来将 DOM 节点与 react-dnd 的 backend 建立联系
	(connect, monitor) => ({
		// 包裹住 DOM 节点，使其可以接收对应的拖拽组件
		connectDropTarget: connect.dropTarget(),
		// drag source是否在 drop target 区域
		isOver: monitor.isOver(),
		// 是否可以被放置
		canDrop: monitor.canDrop()
	})
)(DropBox);

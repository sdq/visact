import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import DragDropType from '../../constants/DragDropType';
import './field.css';

const boxSource = {
	/**
	 * 开始拖拽时触发当前函数
	 * @param {*} props 组件的 props
	 */
	beginDrag(props) {
		// 返回的对象可以在 monitor.getItem() 中获取到
		return {
			field: props.field,
		}
	},

	/**
	 * 拖拽结束时触发当前函数
	 * @param {*} props 当前组件的 props
	 * @param {*} monitor DragSourceMonitor 对象
	 */
	endDrag(props, monitor) {
		// 当前拖拽的 item 组件
		const item = monitor.getItem();
		// 拖拽元素放下时，drop 结果
		const dropResult = monitor.getDropResult();

		// 如果 drop 结果存在，就弹出 alert 提示
		if (dropResult) {
			console.log(`You dropped ${item.field.name} into ${dropResult.name}!`);
			props.encoding(dropResult.name, item.field, dropResult.isEncoded);
		}
	},
}

class DragBox extends Component {
    render() {
        const { connectDragSource } = this.props
        return connectDragSource(
            <div className="dragbox">
				{/* <div className="fieldType" style={{display: "inline-block"}}>c</div> */}
				<div style={{display: "inline-block"}}>{this.props.field.name}</div>
            </div>
        )
    }
}

export default DragSource(
    DragDropType.DATA_FIELD,
    boxSource,
    // 收集功能函数，包含 connect 和 monitor 参数
	// connect 里面的函数用来将 DOM 节点与 react-dnd 的 backend 建立联系
	(connect, monitor) => ({
		// 包裹住 DOM 节点，使其可以进行拖拽操作
		connectDragSource: connect.dragSource(),
		// 是否处于拖拽状态
		isDragging: monitor.isDragging()
	}),
)(DragBox)
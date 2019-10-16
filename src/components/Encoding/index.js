import React, { Component } from 'react';
import DropBox from '../DropBox';
import { Row, Select } from 'antd';
import * as ActionType from '../../constants/ActionType';
import './encoding.css';
import MarkType from '../../constants/MarkType';
import SortType from '../../constants/SortType';

const { Option } = Select;

export default class Encoding extends Component {

    constructor() {
        super();
        this.handleChangeMark = this.handleChangeMark.bind(this);
        this.handleChangeFunctionX = this.handleChangeFunctionX.bind(this);
        this.handleChangeFunctionY = this.handleChangeFunctionY.bind(this);
    }

    handleChangeMark(marktype) {
        this.props.changeMark(marktype);
    }

    handleChangeFunctionX(value) {
        this.handleChangeFunction("x", value);
    }

    handleChangeFunctionY(value) {
        this.handleChangeFunction("y", value);
    }

    handleChangeFunction(axis, value) {
        switch (value) {
            case ActionType.BIN:
                this.props.bin(axis);
                break;
            case ActionType.MIN:
                this.props.min(axis);
                break;
            case ActionType.MAX:
                this.props.max(axis);
                break;
            case ActionType.MEAN:
                this.props.mean(axis);
                break;
            case ActionType.MEDIAN:
                this.props.median(axis);
                break;
            case ActionType.SUM:
                this.props.sum(axis);
                break;
        
            default:
                this.props.removeFunction(axis);
                break;
        }
    }

    render() {
        return (
            <div style={{marginTop: 40}}>
                <Row className="typebox">
                    <Select value={this.props.marktype} style={{ width: 200 }} onChange={this.handleChangeMark}>
                        <Option value={MarkType.POINT}>mark type - {MarkType.POINT}</Option>
                        <Option value={MarkType.BAR}>mark type - {MarkType.BAR}</Option>
                        <Option value={MarkType.LINE}>mark type - {MarkType.LINE}</Option>
                        <Option value={MarkType.AREA}>mark type - {MarkType.AREA}</Option>
                        <Option value={MarkType.TICK}>mark type - {MarkType.TICK}</Option>
                    </Select>
                </Row>
                <DropBox channel="x" slot={this.props.slots.x} dropAvailable={this.props.isSlotAvailable.x} {...this.props}/>
                
                <DropBox channel="y" slot={this.props.slots.y} dropAvailable={this.props.isSlotAvailable.y} {...this.props}/>
                
                <DropBox channel="color" slot={this.props.slots.color} dropAvailable={this.props.isSlotAvailable.color} {...this.props}/>
                {/* <ColorPicker/> */}
                <DropBox channel="size" slot={this.props.slots.size} dropAvailable={this.props.isSlotAvailable.size} {...this.props}/>
                {/* <SizePicker/> */}
                <DropBox channel="shape" slot={this.props.slots.shape} dropAvailable={this.props.isSlotAvailable.shape} {...this.props}/>

                <Row className="functionbox">
                    <Select placeholder="function for x" style={{ width: 200 }} value={this.props.functions.x} onChange={this.handleChangeFunctionX}>
                        <Option value={ActionType.REMOVE_FUNCTION}>--function on x axis--</Option>
                        <Option value={ActionType.BIN}>{ActionType.BIN}</Option>
                        <Option value={ActionType.MIN}>{ActionType.MIN}</Option>
                        <Option value={ActionType.MAX}>{ActionType.MAX}</Option>
                        <Option value={ActionType.MEAN}>{ActionType.MEAN}</Option>
                        <Option value={ActionType.MEDIAN}>{ActionType.MEDIAN}</Option>
                        <Option value={ActionType.SUM}>{ActionType.SUM}</Option>
                    </Select>
                </Row>
                <Row className="functionbox">
                    <Select placeholder="sort for x" style={{ width: 200 }} 
                        // value={this.props.functions.x} 
                        onChange={this.handleChangeSortX}>
                        <Option value={SortType.ORIGIN}>--no sort on x--</Option>
                        <Option value={SortType.ASCENDING}>{SortType.ASCENDING}</Option>
                        <Option value={SortType.DESCENDING}>{SortType.DESCENDING}</Option>
                    </Select>
                </Row>

                <Row className="functionbox">
                    <Select placeholder="sort for y" style={{ width: 200 }} value={this.props.functions.y} onChange={this.handleChangeFunctionY}>
                        <Option value={ActionType.REMOVE_FUNCTION}>--function on y axis--</Option>
                        <Option value={ActionType.BIN}>{ActionType.BIN}</Option>
                        <Option value={ActionType.MIN}>{ActionType.MIN}</Option>
                        <Option value={ActionType.MAX}>{ActionType.MAX}</Option>
                        <Option value={ActionType.MEAN}>{ActionType.MEAN}</Option>
                        <Option value={ActionType.MEDIAN}>{ActionType.MEDIAN}</Option>
                        <Option value={ActionType.SUM}>{ActionType.SUM}</Option>
                    </Select>
                </Row>
                <Row className="functionbox">
                    <Select placeholder="sort for y" style={{ width: 200 }} 
                        // value={this.props.functions.x} 
                        onChange={this.handleChangeSortX}>
                        <Option value={SortType.ORIGIN}>--no sort on y--</Option>
                        <Option value={SortType.ASCENDING}>{SortType.ASCENDING}</Option>
                        <Option value={SortType.DESCENDING}>{SortType.DESCENDING}</Option>
                    </Select>
                </Row>
            </div>
        )
    }
}

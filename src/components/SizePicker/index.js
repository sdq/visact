import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col} from 'antd';
import "./sizepicker.css";

export default class SizePicker extends Component {
    state = {
        inputValue: 30,
    };
    onChange = value => {
        this.setState({
            inputValue: value,
        });
        console.log(value);
    };
    render() {
        const { inputValue } = this.state;
        return (
            <div className="sizepicker">
                {/* <InputNumber
                    min={1}
                    max={200}
                    value={inputValue}
                    onChange={this.onChange}
                /> */}
                <Row>
                    <Col span={12}>
                        <Slider
                            min={1}
                            max={200}
                            onChange={this.onChange}
                            value={typeof inputValue === 'number' ? inputValue : 30}
                        />
                    </Col>
                    <Col span={12}>
                        <InputNumber
                            size="small"
                            min={1}
                            max={200}
                            style={{ marginLeft: 16 }}
                            value={inputValue}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

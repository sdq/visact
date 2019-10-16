import React, { Component } from 'react'
import VegaLite from 'react-vega-lite';

export default class ChartPreview extends Component {

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
    }

    get spec() {
        var sizedSpec = JSON.parse(this.props.spec);
        sizedSpec.width = this.props.size;
        sizedSpec.height = this.props.size;
        return sizedSpec;
    }

    handleHover(...args) {
        this.setState({
          info: JSON.stringify(args),
        });
    }
    
    render() {
        return (
            <div>
                <div>{this.props.action}</div>
                <VegaLite data={this.props.data} spec={this.spec} onSignalHover={this.handleHover} />
            </div>
        )
    }
}

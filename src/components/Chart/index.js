import React, { Component } from 'react'
import VegaLite from 'react-vega-lite';

export default class Chart extends Component {

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
    }
    
    get spec() {
        var sizedSpec = JSON.parse(this.props.spec);
        sizedSpec.width = 440;
        sizedSpec.height = 440;
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
                <VegaLite data={this.props.data} spec={this.spec} onSignalHover={this.handleHover} />
            </div>
        )
    }
}

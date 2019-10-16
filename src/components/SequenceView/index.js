import React, { Component } from 'react'
import ChartPreview from '../../components/ChartPreview';
import './sequence.css';
  
// const spec = {
//     description: 'A simple bar chart with embedded data.',
//     encoding: {
//         x: { field: 'a', type: 'ordinal' },
//         y: { field: 'b', type: 'quantitative' },
//     },
//     mark: 'bar',
// };

export default class SequenceView extends Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
      
    componentDidMount() {
        this.scrollToBottom();
    }
    
    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const sequence = this.props.specHistory.map((spec, i) =>
            <div className="chartpreview"  key={i}><ChartPreview data={this.props.currentData} spec={spec} size={200}/></div>
        );
        return (
            <div className="sequence-container">
                {sequence}
                <div style={{ float:"left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        )
    }
}

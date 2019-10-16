import React, { Component } from 'react';
import ActionCard from '../../components/ActionCard';
import './sequence.css';

export default class ActionSequenceView extends Component {

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
        const sequence = this.props.actionHistory.map((action, i) =>
            <ActionCard key={i} action={action}/>
        );
        return (
            <div className="action-sequence-container">
                {sequence}
                <div style={{ float:"left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        )
    }
}

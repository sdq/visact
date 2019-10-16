import React, { Component } from 'react';
import './actioncard.css'

export default class ActionCard extends Component {
    render() {
        return (
            <div className="actionCard">
                {this.props.action.description}
            </div>
        )
    }
}

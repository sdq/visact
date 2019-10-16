import React, { Component } from 'react'
import Papa from 'papaparse';
import _ from 'lodash';
import './filebar.css'

export default class FileBar extends Component {

    constructor() {
        super();
        this.completeParse = this.completeParse.bind(this);
    }

    handleFileSelect = (e) => {
        e.preventDefault();
        this.fileSelector.click();
    }

    onChange = (event) => {
        event.persist();
        const csvfile = event.target.files[0];
        Papa.parse(csvfile, {
            header: true,
            complete: this.completeParse
        });
    }

    completeParse = (results) => {
        console.log(results.meta.fields);
        if (_.isEmpty(this.props.currentData)) {
            this.props.uploadFile(results.data);
        } else {
            this.props.changeFile(results.data);
        }
    }

    render() {
        return (
            <div className="filebar">
                <input type="file" id="uploadfile" accept="text/csv" style={{width: 200+'px'}}  onChange={this.onChange.bind(this)}/>
            </div>
        )
    }
}

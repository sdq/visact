import React, { Component } from 'react'
import { List, Button } from 'antd';
import ChartPreview from '../../components/ChartPreview';
import './bookmarkpanel.css';

export default class BookmarkPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="bookmark-panel">
                <Button type="primary" block
                    onClick={() => this.props.bookmark()}
                >
                    Add Bookmark
                </Button>
                <List
                    className="bookmark-list"
                    size="large"
                    
                    dataSource={this.props.bookmarks}
                    renderItem={(spec,i) => 
                        <List.Item 
                            //onClick={() => this.restore(i)}
                        >
                            <ChartPreview data={this.props.currentData} spec={JSON.stringify(spec)} action={spec.action} size={160}/>
                        </List.Item>
                    }
                />
            </div>
        )
    }
}

import React, { Component } from 'react';
import { SketchPicker } from 'react-color';


export default class ColorPicker extends Component {
	state = {
		displayColorPicker: false,
		color: {
			r: '241',
			g: '112',
			b: '19',
			a: '1',
		},
	}

	handleClick = () => {
		this.setState({ displayColorPicker: !this.state.displayColorPicker });
	};
	
	handleClose = () => {
		this.setState({ displayColorPicker: false });
	};

	handleChange = (color) => {
		this.setState({ color: color.rgb });
		console.log(color.rgb);
	};

	render() {
		const popover = {
			position: 'absolute',
			zIndex: '2',
		};
		const cover = {
			position: 'fixed',
			top: '0px',
			right: '0px',
			bottom: '0px',
			left: '0px',
		};
		return (
			<div>
				<button onClick={ this.handleClick }>Pick Color</button>
				{ this.state.displayColorPicker ? <div style={ popover }>
				<div style={ cover } onClick={ this.handleClose }/>
				<SketchPicker color={ this.state.color } onChange={ this.handleChange } />
				</div> : null }
			</div>
		)
	}
}

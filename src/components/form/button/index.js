import React, { Component } from 'react';
import './../form.scss'

class Button extends Component {

	shouldComponentUpdate(prevProps, prevState) {
		return (
			prevProps.title !== this.props.title ||
			prevProps.style !== this.props.style ||
			prevProps.size !== this.props.size
		)
	}

	render() {
		// console.log("button render")
		return (
			<input
				type="button"
				className={`button-primary ${this.props.size}`}
				value={this.props.title}
				style={this.props.style}
			/>
		)
	}
}

export default React.memo(Button)
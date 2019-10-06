import React, { useState, useRef } from 'react';
import './../form.scss'


const InputItem = (props) => {
	// console.log("input item render")
	const [labelPos, setLabelPos] = useState("-10px")
	const reference = useRef();
	props.setReference && props.setReference(reference)
	let inputBox
	switch (props.type) {
		case "underLine":
			inputBox = <input
				type="text"
				className="input-underline"
				value={props.value}
				onChange={props.onChange}
				{...props}
				ref={reference}
			/>
	}

	return (
		<div
			className="input-item-container"
			onFocus={() => setLabelPos("-40px")}
			onBlur={() => !props.value && setLabelPos("-10px")}
		>
			<div
				className="label-holder"
				style={{ marginTop: labelPos }}
			>
				<div className="label-container">
					<p className="label-text">
						{props.label}
					</p>
				</div>
			</div>
			{inputBox}
		</div>
	)
}

export default React.memo(InputItem);
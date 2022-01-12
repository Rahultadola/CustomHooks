import React, { useRef, useImperativeHandle } from 'react';

import classes from'./Input.module.css';

const Input = React.forwardRef((props, ref) => {
	const inputRef = useRef();
	
	const activate = () => {
		inputRef.current.focus();
	};

	useImperativeHandle(ref, () => {
		return {
			focus: activate,
		}
	});

	return (
		<div
			className={`${classes.control} ${
				props.isValid === false ? classes.invalid : ''
			}`}
        >
			<label htmlFor={props.type}>{props.label}</label>
			<input
				ref={inputRef}
				id={props.id}				
				type={props.type}
				value={props.stateValue}
				onChange={props.changeHandler}
				onBlur={props.validationHandler}
			/>
        </div>	
	);
});

export default Input;
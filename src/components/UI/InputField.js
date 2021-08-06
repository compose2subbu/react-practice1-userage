import React, { useImperativeHandle, useRef } from 'react';
import classes from './InputField.module.css';

const InputField = React.forwardRef((props, ref) => {
    //
    const inputRef = useRef();
    //console.log(props.data)
    const {label , inputType} = props.data;
    
    const printText = () => {
        console.log(inputRef.current.value);
    }

    useImperativeHandle(ref, () => {
        return {
            print: printText,
        }
    })
    //console.log(label);
    return (
        <div className={classes.input}>
            <label>{label}</label>
            <input type={inputType} ref={inputRef}></input>
        </div>
    );
});

export default InputField;
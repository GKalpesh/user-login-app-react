import React, { useImperativeHandle, useRef, } from 'react'

const Input = React.forwardRef((props, ref) => {

    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus()
    }

    useImperativeHandle(ref,() => {
            return{
                focus: focus
            }
        }
    )

    return (
        <React.Fragment>
            <label htmlFor={props.typeAndId}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.typeAndId}
                id={props.typeAndId}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </React.Fragment>
    )
})

export default Input

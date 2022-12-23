import React from 'react'
import Styles from './Input.module.scss'
import clsx from 'clsx'

export type InputProps = {
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    type?: React.HTMLInputTypeAttribute;
}

export type InputState = {}

export type InputRefs = {
    input: HTMLInputElement | null;
    getValue: () => string;
}

export const Input = React.forwardRef(function Input(props: InputProps, ref: React.ForwardedRef<InputRefs>) {
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useImperativeHandle(ref, () => ({
        input: inputRef.current,
        getValue: () => inputRef.current?.value || '',
    }))

    return (
        <input ref={inputRef}
               type={props.type || 'text'}
               className={clsx(props.className, Styles.Input)}
               placeholder={props.placeholder}
               disabled={props.disabled}
        ></input>
    )
})

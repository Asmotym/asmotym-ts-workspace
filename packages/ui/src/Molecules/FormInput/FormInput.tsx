import React from 'react'
import Styles from './FormInput.module.scss'
import clsx from 'clsx'
import * as Atoms from '../../Atoms'

export type FormInputProps = {
    className?: string;
    label: Atoms.TextProps;
    input: Atoms.InputProps;
}

export type FormInputState = {}

export type FormInputRefs = {
    input: React.RefObject<Atoms.InputRefs>;
    text: React.RefObject<HTMLParagraphElement>;
    isEmpty: () => boolean;
}

export const FormInput = React.forwardRef(function FormInput(props: FormInputProps, ref: React.ForwardedRef<FormInputRefs>) {
    const inputRef = React.useRef<Atoms.InputRefs>(null);
    const textRef = React.useRef<HTMLParagraphElement>(null);

    React.useImperativeHandle(ref, () => ({
        input: inputRef,
        text: textRef,
        isEmpty: () => inputRef.current?.getValue() === '',
    }))

    return (
        <div className={clsx(props.className, Styles.FormInput)}>
            <Atoms.Text ref={textRef} {...props.label} />
            <Atoms.Input ref={inputRef} {...props.input} />
        </div>
    )
})

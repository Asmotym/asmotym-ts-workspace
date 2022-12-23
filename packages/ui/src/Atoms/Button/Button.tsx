import React from 'react'
import Styles from './Button.module.scss'
import clsx from 'clsx'

export type ButtonProps = {
    className?: string;
    text: string;
    disabled?: boolean;
    onClick?: (event: React.SyntheticEvent) => void;
}

export type ButtonState = {}

export type ButtonRefs = HTMLButtonElement;

export const Button = React.forwardRef(function Button(props: ButtonProps, ref: React.ForwardedRef<ButtonRefs>): JSX.Element {
    return (
        <button ref={ref}
                className={clsx(props.className, Styles.Button)}
                disabled={props.disabled}
                onClick={props.onClick}
        >
            {props.text}
        </button>
    )
})
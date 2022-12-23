import React from "react";
import Styles from './Text.module.scss'
import clsx from 'clsx'

export type TextProps = {
    className?: string;
    text: string;
}

export type TextState = {}

export type TextRefs = HTMLParagraphElement;

export const Text = React.forwardRef(function Text(props: TextProps, ref: React.ForwardedRef<TextRefs>) {
    return <p ref={ref} className={clsx(props.className, Styles.Text)}>{props.text}</p>
})

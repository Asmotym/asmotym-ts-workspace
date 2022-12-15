import React from "react";
import Styles from './Text.module.scss'
import clsx from 'clsx'

export type TextProps = {
    className?: string;
    text: string;
}

export type TextState = {
    $container?: React.RefObject<HTMLParagraphElement>;
}

export class Text extends React.Component<TextProps, TextState> {
    constructor(props: TextProps) {
        super(props);

        this.state = {
            $container: React.createRef<HTMLParagraphElement>(),
        }
    }

    render() {
        return (
            <p ref={this.state.$container}
               className={clsx(this.props.className, Styles.Text)}
            >
                {this.props.text}
            </p>
        );
    }
}